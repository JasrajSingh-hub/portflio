declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
    BUCKET?: R2Bucket;
  }
}

declare module "*/hosting.json" {
  const value: { d1?: string | null; r2?: string | null; project_id?: string };
  export default value;
}
