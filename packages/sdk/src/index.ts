export type EvalContext = { userId?: string; country?: string };
export type EvalResponse = { enabled: boolean; variant?: string };

export class EdgeFlags {
  constructor(
    private cfg: {
      endpoint: string;
      sdkKey: string;
      org: string;
      project: string;
      env: string;
      timeoutMs?: number;
    }
  ) {}

  async isEnabled(flag: string, ctx: EvalContext = {}): Promise<boolean> {
    const u = new URL(this.cfg.endpoint + "/v1/eval");
    u.searchParams.set("org", this.cfg.org);
    u.searchParams.set("project", this.cfg.project);
    u.searchParams.set("env", this.cfg.env);
    u.searchParams.set("flag", flag);
    if (ctx.userId) u.searchParams.set("userId", ctx.userId);
    if (ctx.country) u.searchParams.set("country", ctx.country);

    const ctrl = new AbortController();
    const id = setTimeout(() => ctrl.abort(), this.cfg.timeoutMs ?? 4000);
    try {
      const res = await fetch(u, {
        headers: { "x-edgeflags-key": this.cfg.sdkKey },
        signal: ctrl.signal,
        cache: "no-store",
      });
      if (!res.ok) return false;
      const json = (await res.json()) as EvalResponse;
      return json.enabled === true;
    } finally {
      clearTimeout(id);
    }
  }
}
