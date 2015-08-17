/**
 * @description Object.assign shorthand
 *
 * Spreading two or more objects inside an object merges the objects together.
 */
import isEqual from 'lodash/lang/isEqual';

const o1 = {a: 1, b: 2, c: 3};
const o2 = {a: 4};

/**
 * Spreading two or more objects inside a single object overrides duplicate keys
 * from right to left. Any duplicate keys have
 * their values overriden by the right most object.
 */
const spread = {...o1, ...o2};

// Standard assign
const assign = Object.assign(o1, o2);

console.log(isEqual(spread, assign)); // true
