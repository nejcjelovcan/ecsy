import {Component, ComponentConstructor} from "./Component";
import {World} from './World'
import {Entity} from './Entity'

/**
 * A system that manipulates entities in the world.
 */
export abstract class System<T extends World = World> {
  /**
   * Whether the system will execute during the world tick.
   */
  enabled:boolean;

  /**
   * World instance
   */
  world:T;

  /**
   * Queries
   */
  queries: {
    [key: string]: {
      results: Entity[]
      added: Entity[]
      removed: Entity[]
      changed: Entity[]
    }
  }

  /**
   * Resume execution of this system.
   */
  play():void

  /**
   * Stop execution of this system.
   */
  stop():void

}

export interface SystemConstructor<T extends System> {
  new (...args: any): T;
}

/**
 * Use the Not class to negate a component query.
 */
export function Not<T>(Component:ComponentConstructor<T>):object
