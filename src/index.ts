import mitt, { type Emitter } from "./mitt.js";

export type Events = {
  foo: string;
};

export const A: Emitter<Events> = mitt<Events>();
