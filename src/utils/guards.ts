/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import {
  NestedSearchOperators,
  SearchableFields,
  AnyObj,
  SearchNestedQuery,
  SearchPropertyQuery,
  SearchPropertyOperators,
} from 'types';

import { SEARCH_OPERATORS, SEARCH_NESTED_OPERATORS } from './constants';

export function isNestedQuery<
  ATTR extends AnyObj,
  F extends SearchableFields = SearchableFields
>(query: any): query is SearchNestedQuery<ATTR, F> {
  return isNestedSearchOperator(query.operator);
}

export function isContactQuery<
  ATTR extends AnyObj,
  F extends SearchableFields = SearchableFields
>(query: any): query is SearchPropertyQuery<F, ATTR> {
  return isContactSearchOperator(query.operator);
}

export function isContactSearchOperator(
  op: SearchPropertyOperators | NestedSearchOperators,
): op is SearchPropertyOperators {
  return SEARCH_OPERATORS.includes(op as SearchPropertyOperators);
}

export function isNestedSearchOperator(
  op: SearchPropertyOperators | NestedSearchOperators,
): op is NestedSearchOperators {
  return SEARCH_NESTED_OPERATORS.includes(op as NestedSearchOperators);
}

export function isCustomAttributesQuery<ATTR extends AnyObj>(query: {
  [key: string]: unknown;
}): query is SearchPropertyQuery<'custom_attributes', ATTR> {
  return query.field === 'custom_attributes';
}
