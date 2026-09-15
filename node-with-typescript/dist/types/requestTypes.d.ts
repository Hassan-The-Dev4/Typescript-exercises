import type { Request } from "express";
export interface GoodbyeQuery {
    name: string;
}
export type GoodbyeRequest = Request<{}, {}, {}, GoodbyeQuery>;
//# sourceMappingURL=requestTypes.d.ts.map