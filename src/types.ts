import type {ParseSelector} from 'typed-query-selector/parser.js';

export type NodeFor<ComplexSelector extends string> =
  ParseSelector<ComplexSelector>;
