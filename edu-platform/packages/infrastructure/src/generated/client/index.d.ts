
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Checklist
 * 
 */
export type Checklist = $Result.DefaultSelection<Prisma.$ChecklistPayload>
/**
 * Model Series
 * 
 */
export type Series = $Result.DefaultSelection<Prisma.$SeriesPayload>
/**
 * Model Subject
 * 
 */
export type Subject = $Result.DefaultSelection<Prisma.$SubjectPayload>
/**
 * Model Topic
 * 
 */
export type Topic = $Result.DefaultSelection<Prisma.$TopicPayload>
/**
 * Model Content
 * 
 */
export type Content = $Result.DefaultSelection<Prisma.$ContentPayload>
/**
 * Model TopicSubject
 * 
 */
export type TopicSubject = $Result.DefaultSelection<Prisma.$TopicSubjectPayload>
/**
 * Model Vestibular
 * 
 */
export type Vestibular = $Result.DefaultSelection<Prisma.$VestibularPayload>
/**
 * Model VestibularSubject
 * 
 */
export type VestibularSubject = $Result.DefaultSelection<Prisma.$VestibularSubjectPayload>
/**
 * Model VestibularContent
 * 
 */
export type VestibularContent = $Result.DefaultSelection<Prisma.$VestibularContentPayload>
/**
 * Model VestibularTopic
 * 
 */
export type VestibularTopic = $Result.DefaultSelection<Prisma.$VestibularTopicPayload>
/**
 * Model AccessibilityCategory
 * 
 */
export type AccessibilityCategory = $Result.DefaultSelection<Prisma.$AccessibilityCategoryPayload>
/**
 * Model AccessibilityCategoryTopic
 * 
 */
export type AccessibilityCategoryTopic = $Result.DefaultSelection<Prisma.$AccessibilityCategoryTopicPayload>
/**
 * Model AccessibilityNeed
 * 
 */
export type AccessibilityNeed = $Result.DefaultSelection<Prisma.$AccessibilityNeedPayload>
/**
 * Model AccessibilityTheme
 * 
 */
export type AccessibilityTheme = $Result.DefaultSelection<Prisma.$AccessibilityThemePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.checklist`: Exposes CRUD operations for the **Checklist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Checklists
    * const checklists = await prisma.checklist.findMany()
    * ```
    */
  get checklist(): Prisma.ChecklistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.series`: Exposes CRUD operations for the **Series** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Series
    * const series = await prisma.series.findMany()
    * ```
    */
  get series(): Prisma.SeriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subject`: Exposes CRUD operations for the **Subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subject.findMany()
    * ```
    */
  get subject(): Prisma.SubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.topic`: Exposes CRUD operations for the **Topic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Topics
    * const topics = await prisma.topic.findMany()
    * ```
    */
  get topic(): Prisma.TopicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.content`: Exposes CRUD operations for the **Content** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contents
    * const contents = await prisma.content.findMany()
    * ```
    */
  get content(): Prisma.ContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.topicSubject`: Exposes CRUD operations for the **TopicSubject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TopicSubjects
    * const topicSubjects = await prisma.topicSubject.findMany()
    * ```
    */
  get topicSubject(): Prisma.TopicSubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vestibular`: Exposes CRUD operations for the **Vestibular** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vestibulars
    * const vestibulars = await prisma.vestibular.findMany()
    * ```
    */
  get vestibular(): Prisma.VestibularDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vestibularSubject`: Exposes CRUD operations for the **VestibularSubject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VestibularSubjects
    * const vestibularSubjects = await prisma.vestibularSubject.findMany()
    * ```
    */
  get vestibularSubject(): Prisma.VestibularSubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vestibularContent`: Exposes CRUD operations for the **VestibularContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VestibularContents
    * const vestibularContents = await prisma.vestibularContent.findMany()
    * ```
    */
  get vestibularContent(): Prisma.VestibularContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vestibularTopic`: Exposes CRUD operations for the **VestibularTopic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VestibularTopics
    * const vestibularTopics = await prisma.vestibularTopic.findMany()
    * ```
    */
  get vestibularTopic(): Prisma.VestibularTopicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accessibilityCategory`: Exposes CRUD operations for the **AccessibilityCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccessibilityCategories
    * const accessibilityCategories = await prisma.accessibilityCategory.findMany()
    * ```
    */
  get accessibilityCategory(): Prisma.AccessibilityCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accessibilityCategoryTopic`: Exposes CRUD operations for the **AccessibilityCategoryTopic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccessibilityCategoryTopics
    * const accessibilityCategoryTopics = await prisma.accessibilityCategoryTopic.findMany()
    * ```
    */
  get accessibilityCategoryTopic(): Prisma.AccessibilityCategoryTopicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accessibilityNeed`: Exposes CRUD operations for the **AccessibilityNeed** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccessibilityNeeds
    * const accessibilityNeeds = await prisma.accessibilityNeed.findMany()
    * ```
    */
  get accessibilityNeed(): Prisma.AccessibilityNeedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accessibilityTheme`: Exposes CRUD operations for the **AccessibilityTheme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccessibilityThemes
    * const accessibilityThemes = await prisma.accessibilityTheme.findMany()
    * ```
    */
  get accessibilityTheme(): Prisma.AccessibilityThemeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Checklist: 'Checklist',
    Series: 'Series',
    Subject: 'Subject',
    Topic: 'Topic',
    Content: 'Content',
    TopicSubject: 'TopicSubject',
    Vestibular: 'Vestibular',
    VestibularSubject: 'VestibularSubject',
    VestibularContent: 'VestibularContent',
    VestibularTopic: 'VestibularTopic',
    AccessibilityCategory: 'AccessibilityCategory',
    AccessibilityCategoryTopic: 'AccessibilityCategoryTopic',
    AccessibilityNeed: 'AccessibilityNeed',
    AccessibilityTheme: 'AccessibilityTheme'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "checklist" | "series" | "subject" | "topic" | "content" | "topicSubject" | "vestibular" | "vestibularSubject" | "vestibularContent" | "vestibularTopic" | "accessibilityCategory" | "accessibilityCategoryTopic" | "accessibilityNeed" | "accessibilityTheme"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Checklist: {
        payload: Prisma.$ChecklistPayload<ExtArgs>
        fields: Prisma.ChecklistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChecklistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChecklistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          findFirst: {
            args: Prisma.ChecklistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChecklistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          findMany: {
            args: Prisma.ChecklistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>[]
          }
          create: {
            args: Prisma.ChecklistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          createMany: {
            args: Prisma.ChecklistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChecklistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>[]
          }
          delete: {
            args: Prisma.ChecklistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          update: {
            args: Prisma.ChecklistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          deleteMany: {
            args: Prisma.ChecklistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChecklistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChecklistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>[]
          }
          upsert: {
            args: Prisma.ChecklistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          aggregate: {
            args: Prisma.ChecklistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChecklist>
          }
          groupBy: {
            args: Prisma.ChecklistGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChecklistGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChecklistCountArgs<ExtArgs>
            result: $Utils.Optional<ChecklistCountAggregateOutputType> | number
          }
        }
      }
      Series: {
        payload: Prisma.$SeriesPayload<ExtArgs>
        fields: Prisma.SeriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          findFirst: {
            args: Prisma.SeriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          findMany: {
            args: Prisma.SeriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>[]
          }
          create: {
            args: Prisma.SeriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          createMany: {
            args: Prisma.SeriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>[]
          }
          delete: {
            args: Prisma.SeriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          update: {
            args: Prisma.SeriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          deleteMany: {
            args: Prisma.SeriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>[]
          }
          upsert: {
            args: Prisma.SeriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          aggregate: {
            args: Prisma.SeriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeries>
          }
          groupBy: {
            args: Prisma.SeriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeriesCountArgs<ExtArgs>
            result: $Utils.Optional<SeriesCountAggregateOutputType> | number
          }
        }
      }
      Subject: {
        payload: Prisma.$SubjectPayload<ExtArgs>
        fields: Prisma.SubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findFirst: {
            args: Prisma.SubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findMany: {
            args: Prisma.SubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          create: {
            args: Prisma.SubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          createMany: {
            args: Prisma.SubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          delete: {
            args: Prisma.SubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          update: {
            args: Prisma.SubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          deleteMany: {
            args: Prisma.SubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          upsert: {
            args: Prisma.SubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject>
          }
          groupBy: {
            args: Prisma.SubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number
          }
        }
      }
      Topic: {
        payload: Prisma.$TopicPayload<ExtArgs>
        fields: Prisma.TopicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TopicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TopicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          findFirst: {
            args: Prisma.TopicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TopicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          findMany: {
            args: Prisma.TopicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          create: {
            args: Prisma.TopicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          createMany: {
            args: Prisma.TopicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TopicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          delete: {
            args: Prisma.TopicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          update: {
            args: Prisma.TopicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          deleteMany: {
            args: Prisma.TopicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TopicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TopicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          upsert: {
            args: Prisma.TopicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          aggregate: {
            args: Prisma.TopicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTopic>
          }
          groupBy: {
            args: Prisma.TopicGroupByArgs<ExtArgs>
            result: $Utils.Optional<TopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.TopicCountArgs<ExtArgs>
            result: $Utils.Optional<TopicCountAggregateOutputType> | number
          }
        }
      }
      Content: {
        payload: Prisma.$ContentPayload<ExtArgs>
        fields: Prisma.ContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          findFirst: {
            args: Prisma.ContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          findMany: {
            args: Prisma.ContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>[]
          }
          create: {
            args: Prisma.ContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          createMany: {
            args: Prisma.ContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>[]
          }
          delete: {
            args: Prisma.ContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          update: {
            args: Prisma.ContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          deleteMany: {
            args: Prisma.ContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>[]
          }
          upsert: {
            args: Prisma.ContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          aggregate: {
            args: Prisma.ContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContent>
          }
          groupBy: {
            args: Prisma.ContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentCountArgs<ExtArgs>
            result: $Utils.Optional<ContentCountAggregateOutputType> | number
          }
        }
      }
      TopicSubject: {
        payload: Prisma.$TopicSubjectPayload<ExtArgs>
        fields: Prisma.TopicSubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TopicSubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicSubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TopicSubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicSubjectPayload>
          }
          findFirst: {
            args: Prisma.TopicSubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicSubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TopicSubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicSubjectPayload>
          }
          findMany: {
            args: Prisma.TopicSubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicSubjectPayload>[]
          }
          create: {
            args: Prisma.TopicSubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicSubjectPayload>
          }
          createMany: {
            args: Prisma.TopicSubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TopicSubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicSubjectPayload>[]
          }
          delete: {
            args: Prisma.TopicSubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicSubjectPayload>
          }
          update: {
            args: Prisma.TopicSubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicSubjectPayload>
          }
          deleteMany: {
            args: Prisma.TopicSubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TopicSubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TopicSubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicSubjectPayload>[]
          }
          upsert: {
            args: Prisma.TopicSubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicSubjectPayload>
          }
          aggregate: {
            args: Prisma.TopicSubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTopicSubject>
          }
          groupBy: {
            args: Prisma.TopicSubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<TopicSubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.TopicSubjectCountArgs<ExtArgs>
            result: $Utils.Optional<TopicSubjectCountAggregateOutputType> | number
          }
        }
      }
      Vestibular: {
        payload: Prisma.$VestibularPayload<ExtArgs>
        fields: Prisma.VestibularFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VestibularFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VestibularFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularPayload>
          }
          findFirst: {
            args: Prisma.VestibularFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VestibularFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularPayload>
          }
          findMany: {
            args: Prisma.VestibularFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularPayload>[]
          }
          create: {
            args: Prisma.VestibularCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularPayload>
          }
          createMany: {
            args: Prisma.VestibularCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VestibularCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularPayload>[]
          }
          delete: {
            args: Prisma.VestibularDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularPayload>
          }
          update: {
            args: Prisma.VestibularUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularPayload>
          }
          deleteMany: {
            args: Prisma.VestibularDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VestibularUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VestibularUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularPayload>[]
          }
          upsert: {
            args: Prisma.VestibularUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularPayload>
          }
          aggregate: {
            args: Prisma.VestibularAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVestibular>
          }
          groupBy: {
            args: Prisma.VestibularGroupByArgs<ExtArgs>
            result: $Utils.Optional<VestibularGroupByOutputType>[]
          }
          count: {
            args: Prisma.VestibularCountArgs<ExtArgs>
            result: $Utils.Optional<VestibularCountAggregateOutputType> | number
          }
        }
      }
      VestibularSubject: {
        payload: Prisma.$VestibularSubjectPayload<ExtArgs>
        fields: Prisma.VestibularSubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VestibularSubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularSubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VestibularSubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularSubjectPayload>
          }
          findFirst: {
            args: Prisma.VestibularSubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularSubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VestibularSubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularSubjectPayload>
          }
          findMany: {
            args: Prisma.VestibularSubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularSubjectPayload>[]
          }
          create: {
            args: Prisma.VestibularSubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularSubjectPayload>
          }
          createMany: {
            args: Prisma.VestibularSubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VestibularSubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularSubjectPayload>[]
          }
          delete: {
            args: Prisma.VestibularSubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularSubjectPayload>
          }
          update: {
            args: Prisma.VestibularSubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularSubjectPayload>
          }
          deleteMany: {
            args: Prisma.VestibularSubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VestibularSubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VestibularSubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularSubjectPayload>[]
          }
          upsert: {
            args: Prisma.VestibularSubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularSubjectPayload>
          }
          aggregate: {
            args: Prisma.VestibularSubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVestibularSubject>
          }
          groupBy: {
            args: Prisma.VestibularSubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<VestibularSubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.VestibularSubjectCountArgs<ExtArgs>
            result: $Utils.Optional<VestibularSubjectCountAggregateOutputType> | number
          }
        }
      }
      VestibularContent: {
        payload: Prisma.$VestibularContentPayload<ExtArgs>
        fields: Prisma.VestibularContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VestibularContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VestibularContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularContentPayload>
          }
          findFirst: {
            args: Prisma.VestibularContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VestibularContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularContentPayload>
          }
          findMany: {
            args: Prisma.VestibularContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularContentPayload>[]
          }
          create: {
            args: Prisma.VestibularContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularContentPayload>
          }
          createMany: {
            args: Prisma.VestibularContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VestibularContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularContentPayload>[]
          }
          delete: {
            args: Prisma.VestibularContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularContentPayload>
          }
          update: {
            args: Prisma.VestibularContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularContentPayload>
          }
          deleteMany: {
            args: Prisma.VestibularContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VestibularContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VestibularContentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularContentPayload>[]
          }
          upsert: {
            args: Prisma.VestibularContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularContentPayload>
          }
          aggregate: {
            args: Prisma.VestibularContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVestibularContent>
          }
          groupBy: {
            args: Prisma.VestibularContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<VestibularContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.VestibularContentCountArgs<ExtArgs>
            result: $Utils.Optional<VestibularContentCountAggregateOutputType> | number
          }
        }
      }
      VestibularTopic: {
        payload: Prisma.$VestibularTopicPayload<ExtArgs>
        fields: Prisma.VestibularTopicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VestibularTopicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularTopicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VestibularTopicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularTopicPayload>
          }
          findFirst: {
            args: Prisma.VestibularTopicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularTopicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VestibularTopicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularTopicPayload>
          }
          findMany: {
            args: Prisma.VestibularTopicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularTopicPayload>[]
          }
          create: {
            args: Prisma.VestibularTopicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularTopicPayload>
          }
          createMany: {
            args: Prisma.VestibularTopicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VestibularTopicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularTopicPayload>[]
          }
          delete: {
            args: Prisma.VestibularTopicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularTopicPayload>
          }
          update: {
            args: Prisma.VestibularTopicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularTopicPayload>
          }
          deleteMany: {
            args: Prisma.VestibularTopicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VestibularTopicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VestibularTopicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularTopicPayload>[]
          }
          upsert: {
            args: Prisma.VestibularTopicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestibularTopicPayload>
          }
          aggregate: {
            args: Prisma.VestibularTopicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVestibularTopic>
          }
          groupBy: {
            args: Prisma.VestibularTopicGroupByArgs<ExtArgs>
            result: $Utils.Optional<VestibularTopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.VestibularTopicCountArgs<ExtArgs>
            result: $Utils.Optional<VestibularTopicCountAggregateOutputType> | number
          }
        }
      }
      AccessibilityCategory: {
        payload: Prisma.$AccessibilityCategoryPayload<ExtArgs>
        fields: Prisma.AccessibilityCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccessibilityCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccessibilityCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityCategoryPayload>
          }
          findFirst: {
            args: Prisma.AccessibilityCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccessibilityCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityCategoryPayload>
          }
          findMany: {
            args: Prisma.AccessibilityCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityCategoryPayload>[]
          }
          create: {
            args: Prisma.AccessibilityCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityCategoryPayload>
          }
          createMany: {
            args: Prisma.AccessibilityCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccessibilityCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityCategoryPayload>[]
          }
          delete: {
            args: Prisma.AccessibilityCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityCategoryPayload>
          }
          update: {
            args: Prisma.AccessibilityCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityCategoryPayload>
          }
          deleteMany: {
            args: Prisma.AccessibilityCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccessibilityCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccessibilityCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityCategoryPayload>[]
          }
          upsert: {
            args: Prisma.AccessibilityCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityCategoryPayload>
          }
          aggregate: {
            args: Prisma.AccessibilityCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccessibilityCategory>
          }
          groupBy: {
            args: Prisma.AccessibilityCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccessibilityCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccessibilityCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<AccessibilityCategoryCountAggregateOutputType> | number
          }
        }
      }
      AccessibilityCategoryTopic: {
        payload: Prisma.$AccessibilityCategoryTopicPayload<ExtArgs>
        fields: Prisma.AccessibilityCategoryTopicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccessibilityCategoryTopicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityCategoryTopicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccessibilityCategoryTopicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityCategoryTopicPayload>
          }
          findFirst: {
            args: Prisma.AccessibilityCategoryTopicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityCategoryTopicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccessibilityCategoryTopicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityCategoryTopicPayload>
          }
          findMany: {
            args: Prisma.AccessibilityCategoryTopicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityCategoryTopicPayload>[]
          }
          create: {
            args: Prisma.AccessibilityCategoryTopicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityCategoryTopicPayload>
          }
          createMany: {
            args: Prisma.AccessibilityCategoryTopicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccessibilityCategoryTopicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityCategoryTopicPayload>[]
          }
          delete: {
            args: Prisma.AccessibilityCategoryTopicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityCategoryTopicPayload>
          }
          update: {
            args: Prisma.AccessibilityCategoryTopicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityCategoryTopicPayload>
          }
          deleteMany: {
            args: Prisma.AccessibilityCategoryTopicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccessibilityCategoryTopicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccessibilityCategoryTopicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityCategoryTopicPayload>[]
          }
          upsert: {
            args: Prisma.AccessibilityCategoryTopicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityCategoryTopicPayload>
          }
          aggregate: {
            args: Prisma.AccessibilityCategoryTopicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccessibilityCategoryTopic>
          }
          groupBy: {
            args: Prisma.AccessibilityCategoryTopicGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccessibilityCategoryTopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccessibilityCategoryTopicCountArgs<ExtArgs>
            result: $Utils.Optional<AccessibilityCategoryTopicCountAggregateOutputType> | number
          }
        }
      }
      AccessibilityNeed: {
        payload: Prisma.$AccessibilityNeedPayload<ExtArgs>
        fields: Prisma.AccessibilityNeedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccessibilityNeedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityNeedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccessibilityNeedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityNeedPayload>
          }
          findFirst: {
            args: Prisma.AccessibilityNeedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityNeedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccessibilityNeedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityNeedPayload>
          }
          findMany: {
            args: Prisma.AccessibilityNeedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityNeedPayload>[]
          }
          create: {
            args: Prisma.AccessibilityNeedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityNeedPayload>
          }
          createMany: {
            args: Prisma.AccessibilityNeedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccessibilityNeedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityNeedPayload>[]
          }
          delete: {
            args: Prisma.AccessibilityNeedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityNeedPayload>
          }
          update: {
            args: Prisma.AccessibilityNeedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityNeedPayload>
          }
          deleteMany: {
            args: Prisma.AccessibilityNeedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccessibilityNeedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccessibilityNeedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityNeedPayload>[]
          }
          upsert: {
            args: Prisma.AccessibilityNeedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityNeedPayload>
          }
          aggregate: {
            args: Prisma.AccessibilityNeedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccessibilityNeed>
          }
          groupBy: {
            args: Prisma.AccessibilityNeedGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccessibilityNeedGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccessibilityNeedCountArgs<ExtArgs>
            result: $Utils.Optional<AccessibilityNeedCountAggregateOutputType> | number
          }
        }
      }
      AccessibilityTheme: {
        payload: Prisma.$AccessibilityThemePayload<ExtArgs>
        fields: Prisma.AccessibilityThemeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccessibilityThemeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityThemePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccessibilityThemeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityThemePayload>
          }
          findFirst: {
            args: Prisma.AccessibilityThemeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityThemePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccessibilityThemeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityThemePayload>
          }
          findMany: {
            args: Prisma.AccessibilityThemeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityThemePayload>[]
          }
          create: {
            args: Prisma.AccessibilityThemeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityThemePayload>
          }
          createMany: {
            args: Prisma.AccessibilityThemeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccessibilityThemeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityThemePayload>[]
          }
          delete: {
            args: Prisma.AccessibilityThemeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityThemePayload>
          }
          update: {
            args: Prisma.AccessibilityThemeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityThemePayload>
          }
          deleteMany: {
            args: Prisma.AccessibilityThemeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccessibilityThemeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccessibilityThemeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityThemePayload>[]
          }
          upsert: {
            args: Prisma.AccessibilityThemeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessibilityThemePayload>
          }
          aggregate: {
            args: Prisma.AccessibilityThemeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccessibilityTheme>
          }
          groupBy: {
            args: Prisma.AccessibilityThemeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccessibilityThemeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccessibilityThemeCountArgs<ExtArgs>
            result: $Utils.Optional<AccessibilityThemeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    checklist?: ChecklistOmit
    series?: SeriesOmit
    subject?: SubjectOmit
    topic?: TopicOmit
    content?: ContentOmit
    topicSubject?: TopicSubjectOmit
    vestibular?: VestibularOmit
    vestibularSubject?: VestibularSubjectOmit
    vestibularContent?: VestibularContentOmit
    vestibularTopic?: VestibularTopicOmit
    accessibilityCategory?: AccessibilityCategoryOmit
    accessibilityCategoryTopic?: AccessibilityCategoryTopicOmit
    accessibilityNeed?: AccessibilityNeedOmit
    accessibilityTheme?: AccessibilityThemeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    checklists: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checklists?: boolean | UserCountOutputTypeCountChecklistsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChecklistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChecklistWhereInput
  }


  /**
   * Count Type SeriesCountOutputType
   */

  export type SeriesCountOutputType = {
    subjects: number
  }

  export type SeriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | SeriesCountOutputTypeCountSubjectsArgs
  }

  // Custom InputTypes
  /**
   * SeriesCountOutputType without action
   */
  export type SeriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesCountOutputType
     */
    select?: SeriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SeriesCountOutputType without action
   */
  export type SeriesCountOutputTypeCountSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
  }


  /**
   * Count Type SubjectCountOutputType
   */

  export type SubjectCountOutputType = {
    topicSubjects: number
    vestibularSubjects: number
  }

  export type SubjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topicSubjects?: boolean | SubjectCountOutputTypeCountTopicSubjectsArgs
    vestibularSubjects?: boolean | SubjectCountOutputTypeCountVestibularSubjectsArgs
  }

  // Custom InputTypes
  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCountOutputType
     */
    select?: SubjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountTopicSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicSubjectWhereInput
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountVestibularSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VestibularSubjectWhereInput
  }


  /**
   * Count Type TopicCountOutputType
   */

  export type TopicCountOutputType = {
    contents: number
    topicSubjects: number
    accessibilityCategoryTopics: number
  }

  export type TopicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contents?: boolean | TopicCountOutputTypeCountContentsArgs
    topicSubjects?: boolean | TopicCountOutputTypeCountTopicSubjectsArgs
    accessibilityCategoryTopics?: boolean | TopicCountOutputTypeCountAccessibilityCategoryTopicsArgs
  }

  // Custom InputTypes
  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicCountOutputType
     */
    select?: TopicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountContentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentWhereInput
  }

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountTopicSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicSubjectWhereInput
  }

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountAccessibilityCategoryTopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessibilityCategoryTopicWhereInput
  }


  /**
   * Count Type ContentCountOutputType
   */

  export type ContentCountOutputType = {
    checklists: number
    vestibularContents: number
  }

  export type ContentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checklists?: boolean | ContentCountOutputTypeCountChecklistsArgs
    vestibularContents?: boolean | ContentCountOutputTypeCountVestibularContentsArgs
  }

  // Custom InputTypes
  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentCountOutputType
     */
    select?: ContentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeCountChecklistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChecklistWhereInput
  }

  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeCountVestibularContentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VestibularContentWhereInput
  }


  /**
   * Count Type VestibularCountOutputType
   */

  export type VestibularCountOutputType = {
    vestibularSubjects: number
    contents: number
    vestibularTopics: number
  }

  export type VestibularCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vestibularSubjects?: boolean | VestibularCountOutputTypeCountVestibularSubjectsArgs
    contents?: boolean | VestibularCountOutputTypeCountContentsArgs
    vestibularTopics?: boolean | VestibularCountOutputTypeCountVestibularTopicsArgs
  }

  // Custom InputTypes
  /**
   * VestibularCountOutputType without action
   */
  export type VestibularCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularCountOutputType
     */
    select?: VestibularCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VestibularCountOutputType without action
   */
  export type VestibularCountOutputTypeCountVestibularSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VestibularSubjectWhereInput
  }

  /**
   * VestibularCountOutputType without action
   */
  export type VestibularCountOutputTypeCountContentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VestibularContentWhereInput
  }

  /**
   * VestibularCountOutputType without action
   */
  export type VestibularCountOutputTypeCountVestibularTopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VestibularTopicWhereInput
  }


  /**
   * Count Type AccessibilityCategoryCountOutputType
   */

  export type AccessibilityCategoryCountOutputType = {
    categoryTopics: number
    needs: number
    themes: number
  }

  export type AccessibilityCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoryTopics?: boolean | AccessibilityCategoryCountOutputTypeCountCategoryTopicsArgs
    needs?: boolean | AccessibilityCategoryCountOutputTypeCountNeedsArgs
    themes?: boolean | AccessibilityCategoryCountOutputTypeCountThemesArgs
  }

  // Custom InputTypes
  /**
   * AccessibilityCategoryCountOutputType without action
   */
  export type AccessibilityCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityCategoryCountOutputType
     */
    select?: AccessibilityCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccessibilityCategoryCountOutputType without action
   */
  export type AccessibilityCategoryCountOutputTypeCountCategoryTopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessibilityCategoryTopicWhereInput
  }

  /**
   * AccessibilityCategoryCountOutputType without action
   */
  export type AccessibilityCategoryCountOutputTypeCountNeedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessibilityNeedWhereInput
  }

  /**
   * AccessibilityCategoryCountOutputType without action
   */
  export type AccessibilityCategoryCountOutputTypeCountThemesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessibilityThemeWhereInput
  }


  /**
   * Count Type AccessibilityNeedCountOutputType
   */

  export type AccessibilityNeedCountOutputType = {
    themes: number
  }

  export type AccessibilityNeedCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    themes?: boolean | AccessibilityNeedCountOutputTypeCountThemesArgs
  }

  // Custom InputTypes
  /**
   * AccessibilityNeedCountOutputType without action
   */
  export type AccessibilityNeedCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityNeedCountOutputType
     */
    select?: AccessibilityNeedCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccessibilityNeedCountOutputType without action
   */
  export type AccessibilityNeedCountOutputTypeCountThemesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessibilityThemeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    providerId: string | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    providerId: string | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    providerId: number
    name: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    providerId?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    providerId?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    providerId?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    providerId: string
    name: string
    email: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    checklists?: boolean | User$checklistsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    providerId?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "providerId" | "name" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checklists?: boolean | User$checklistsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      checklists: Prisma.$ChecklistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      providerId: string
      name: string
      email: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    checklists<T extends User$checklistsArgs<ExtArgs> = {}>(args?: Subset<T, User$checklistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly providerId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.checklists
   */
  export type User$checklistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    where?: ChecklistWhereInput
    orderBy?: ChecklistOrderByWithRelationInput | ChecklistOrderByWithRelationInput[]
    cursor?: ChecklistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChecklistScalarFieldEnum | ChecklistScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Checklist
   */

  export type AggregateChecklist = {
    _count: ChecklistCountAggregateOutputType | null
    _avg: ChecklistAvgAggregateOutputType | null
    _sum: ChecklistSumAggregateOutputType | null
    _min: ChecklistMinAggregateOutputType | null
    _max: ChecklistMaxAggregateOutputType | null
  }

  export type ChecklistAvgAggregateOutputType = {
    id: number | null
    contentId: number | null
  }

  export type ChecklistSumAggregateOutputType = {
    id: number | null
    contentId: number | null
  }

  export type ChecklistMinAggregateOutputType = {
    id: number | null
    userId: string | null
    contentId: number | null
    createdAt: Date | null
  }

  export type ChecklistMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    contentId: number | null
    createdAt: Date | null
  }

  export type ChecklistCountAggregateOutputType = {
    id: number
    userId: number
    contentId: number
    createdAt: number
    _all: number
  }


  export type ChecklistAvgAggregateInputType = {
    id?: true
    contentId?: true
  }

  export type ChecklistSumAggregateInputType = {
    id?: true
    contentId?: true
  }

  export type ChecklistMinAggregateInputType = {
    id?: true
    userId?: true
    contentId?: true
    createdAt?: true
  }

  export type ChecklistMaxAggregateInputType = {
    id?: true
    userId?: true
    contentId?: true
    createdAt?: true
  }

  export type ChecklistCountAggregateInputType = {
    id?: true
    userId?: true
    contentId?: true
    createdAt?: true
    _all?: true
  }

  export type ChecklistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Checklist to aggregate.
     */
    where?: ChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checklists to fetch.
     */
    orderBy?: ChecklistOrderByWithRelationInput | ChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Checklists
    **/
    _count?: true | ChecklistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChecklistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChecklistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChecklistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChecklistMaxAggregateInputType
  }

  export type GetChecklistAggregateType<T extends ChecklistAggregateArgs> = {
        [P in keyof T & keyof AggregateChecklist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChecklist[P]>
      : GetScalarType<T[P], AggregateChecklist[P]>
  }




  export type ChecklistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChecklistWhereInput
    orderBy?: ChecklistOrderByWithAggregationInput | ChecklistOrderByWithAggregationInput[]
    by: ChecklistScalarFieldEnum[] | ChecklistScalarFieldEnum
    having?: ChecklistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChecklistCountAggregateInputType | true
    _avg?: ChecklistAvgAggregateInputType
    _sum?: ChecklistSumAggregateInputType
    _min?: ChecklistMinAggregateInputType
    _max?: ChecklistMaxAggregateInputType
  }

  export type ChecklistGroupByOutputType = {
    id: number
    userId: string
    contentId: number
    createdAt: Date
    _count: ChecklistCountAggregateOutputType | null
    _avg: ChecklistAvgAggregateOutputType | null
    _sum: ChecklistSumAggregateOutputType | null
    _min: ChecklistMinAggregateOutputType | null
    _max: ChecklistMaxAggregateOutputType | null
  }

  type GetChecklistGroupByPayload<T extends ChecklistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChecklistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChecklistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChecklistGroupByOutputType[P]>
            : GetScalarType<T[P], ChecklistGroupByOutputType[P]>
        }
      >
    >


  export type ChecklistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contentId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checklist"]>

  export type ChecklistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contentId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checklist"]>

  export type ChecklistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contentId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checklist"]>

  export type ChecklistSelectScalar = {
    id?: boolean
    userId?: boolean
    contentId?: boolean
    createdAt?: boolean
  }

  export type ChecklistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "contentId" | "createdAt", ExtArgs["result"]["checklist"]>
  export type ChecklistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }
  export type ChecklistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }
  export type ChecklistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }

  export type $ChecklistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Checklist"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      content: Prisma.$ContentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      contentId: number
      createdAt: Date
    }, ExtArgs["result"]["checklist"]>
    composites: {}
  }

  type ChecklistGetPayload<S extends boolean | null | undefined | ChecklistDefaultArgs> = $Result.GetResult<Prisma.$ChecklistPayload, S>

  type ChecklistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChecklistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChecklistCountAggregateInputType | true
    }

  export interface ChecklistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Checklist'], meta: { name: 'Checklist' } }
    /**
     * Find zero or one Checklist that matches the filter.
     * @param {ChecklistFindUniqueArgs} args - Arguments to find a Checklist
     * @example
     * // Get one Checklist
     * const checklist = await prisma.checklist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChecklistFindUniqueArgs>(args: SelectSubset<T, ChecklistFindUniqueArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Checklist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChecklistFindUniqueOrThrowArgs} args - Arguments to find a Checklist
     * @example
     * // Get one Checklist
     * const checklist = await prisma.checklist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChecklistFindUniqueOrThrowArgs>(args: SelectSubset<T, ChecklistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Checklist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistFindFirstArgs} args - Arguments to find a Checklist
     * @example
     * // Get one Checklist
     * const checklist = await prisma.checklist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChecklistFindFirstArgs>(args?: SelectSubset<T, ChecklistFindFirstArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Checklist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistFindFirstOrThrowArgs} args - Arguments to find a Checklist
     * @example
     * // Get one Checklist
     * const checklist = await prisma.checklist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChecklistFindFirstOrThrowArgs>(args?: SelectSubset<T, ChecklistFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Checklists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Checklists
     * const checklists = await prisma.checklist.findMany()
     * 
     * // Get first 10 Checklists
     * const checklists = await prisma.checklist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checklistWithIdOnly = await prisma.checklist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChecklistFindManyArgs>(args?: SelectSubset<T, ChecklistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Checklist.
     * @param {ChecklistCreateArgs} args - Arguments to create a Checklist.
     * @example
     * // Create one Checklist
     * const Checklist = await prisma.checklist.create({
     *   data: {
     *     // ... data to create a Checklist
     *   }
     * })
     * 
     */
    create<T extends ChecklistCreateArgs>(args: SelectSubset<T, ChecklistCreateArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Checklists.
     * @param {ChecklistCreateManyArgs} args - Arguments to create many Checklists.
     * @example
     * // Create many Checklists
     * const checklist = await prisma.checklist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChecklistCreateManyArgs>(args?: SelectSubset<T, ChecklistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Checklists and returns the data saved in the database.
     * @param {ChecklistCreateManyAndReturnArgs} args - Arguments to create many Checklists.
     * @example
     * // Create many Checklists
     * const checklist = await prisma.checklist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Checklists and only return the `id`
     * const checklistWithIdOnly = await prisma.checklist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChecklistCreateManyAndReturnArgs>(args?: SelectSubset<T, ChecklistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Checklist.
     * @param {ChecklistDeleteArgs} args - Arguments to delete one Checklist.
     * @example
     * // Delete one Checklist
     * const Checklist = await prisma.checklist.delete({
     *   where: {
     *     // ... filter to delete one Checklist
     *   }
     * })
     * 
     */
    delete<T extends ChecklistDeleteArgs>(args: SelectSubset<T, ChecklistDeleteArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Checklist.
     * @param {ChecklistUpdateArgs} args - Arguments to update one Checklist.
     * @example
     * // Update one Checklist
     * const checklist = await prisma.checklist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChecklistUpdateArgs>(args: SelectSubset<T, ChecklistUpdateArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Checklists.
     * @param {ChecklistDeleteManyArgs} args - Arguments to filter Checklists to delete.
     * @example
     * // Delete a few Checklists
     * const { count } = await prisma.checklist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChecklistDeleteManyArgs>(args?: SelectSubset<T, ChecklistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Checklists
     * const checklist = await prisma.checklist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChecklistUpdateManyArgs>(args: SelectSubset<T, ChecklistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checklists and returns the data updated in the database.
     * @param {ChecklistUpdateManyAndReturnArgs} args - Arguments to update many Checklists.
     * @example
     * // Update many Checklists
     * const checklist = await prisma.checklist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Checklists and only return the `id`
     * const checklistWithIdOnly = await prisma.checklist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChecklistUpdateManyAndReturnArgs>(args: SelectSubset<T, ChecklistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Checklist.
     * @param {ChecklistUpsertArgs} args - Arguments to update or create a Checklist.
     * @example
     * // Update or create a Checklist
     * const checklist = await prisma.checklist.upsert({
     *   create: {
     *     // ... data to create a Checklist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Checklist we want to update
     *   }
     * })
     */
    upsert<T extends ChecklistUpsertArgs>(args: SelectSubset<T, ChecklistUpsertArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Checklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistCountArgs} args - Arguments to filter Checklists to count.
     * @example
     * // Count the number of Checklists
     * const count = await prisma.checklist.count({
     *   where: {
     *     // ... the filter for the Checklists we want to count
     *   }
     * })
    **/
    count<T extends ChecklistCountArgs>(
      args?: Subset<T, ChecklistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChecklistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Checklist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChecklistAggregateArgs>(args: Subset<T, ChecklistAggregateArgs>): Prisma.PrismaPromise<GetChecklistAggregateType<T>>

    /**
     * Group by Checklist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChecklistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChecklistGroupByArgs['orderBy'] }
        : { orderBy?: ChecklistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChecklistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChecklistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Checklist model
   */
  readonly fields: ChecklistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Checklist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChecklistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    content<T extends ContentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContentDefaultArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Checklist model
   */
  interface ChecklistFieldRefs {
    readonly id: FieldRef<"Checklist", 'Int'>
    readonly userId: FieldRef<"Checklist", 'String'>
    readonly contentId: FieldRef<"Checklist", 'Int'>
    readonly createdAt: FieldRef<"Checklist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Checklist findUnique
   */
  export type ChecklistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter, which Checklist to fetch.
     */
    where: ChecklistWhereUniqueInput
  }

  /**
   * Checklist findUniqueOrThrow
   */
  export type ChecklistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter, which Checklist to fetch.
     */
    where: ChecklistWhereUniqueInput
  }

  /**
   * Checklist findFirst
   */
  export type ChecklistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter, which Checklist to fetch.
     */
    where?: ChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checklists to fetch.
     */
    orderBy?: ChecklistOrderByWithRelationInput | ChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checklists.
     */
    cursor?: ChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checklists.
     */
    distinct?: ChecklistScalarFieldEnum | ChecklistScalarFieldEnum[]
  }

  /**
   * Checklist findFirstOrThrow
   */
  export type ChecklistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter, which Checklist to fetch.
     */
    where?: ChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checklists to fetch.
     */
    orderBy?: ChecklistOrderByWithRelationInput | ChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checklists.
     */
    cursor?: ChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checklists.
     */
    distinct?: ChecklistScalarFieldEnum | ChecklistScalarFieldEnum[]
  }

  /**
   * Checklist findMany
   */
  export type ChecklistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter, which Checklists to fetch.
     */
    where?: ChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checklists to fetch.
     */
    orderBy?: ChecklistOrderByWithRelationInput | ChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Checklists.
     */
    cursor?: ChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checklists.
     */
    distinct?: ChecklistScalarFieldEnum | ChecklistScalarFieldEnum[]
  }

  /**
   * Checklist create
   */
  export type ChecklistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * The data needed to create a Checklist.
     */
    data: XOR<ChecklistCreateInput, ChecklistUncheckedCreateInput>
  }

  /**
   * Checklist createMany
   */
  export type ChecklistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Checklists.
     */
    data: ChecklistCreateManyInput | ChecklistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Checklist createManyAndReturn
   */
  export type ChecklistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * The data used to create many Checklists.
     */
    data: ChecklistCreateManyInput | ChecklistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Checklist update
   */
  export type ChecklistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * The data needed to update a Checklist.
     */
    data: XOR<ChecklistUpdateInput, ChecklistUncheckedUpdateInput>
    /**
     * Choose, which Checklist to update.
     */
    where: ChecklistWhereUniqueInput
  }

  /**
   * Checklist updateMany
   */
  export type ChecklistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Checklists.
     */
    data: XOR<ChecklistUpdateManyMutationInput, ChecklistUncheckedUpdateManyInput>
    /**
     * Filter which Checklists to update
     */
    where?: ChecklistWhereInput
    /**
     * Limit how many Checklists to update.
     */
    limit?: number
  }

  /**
   * Checklist updateManyAndReturn
   */
  export type ChecklistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * The data used to update Checklists.
     */
    data: XOR<ChecklistUpdateManyMutationInput, ChecklistUncheckedUpdateManyInput>
    /**
     * Filter which Checklists to update
     */
    where?: ChecklistWhereInput
    /**
     * Limit how many Checklists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Checklist upsert
   */
  export type ChecklistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * The filter to search for the Checklist to update in case it exists.
     */
    where: ChecklistWhereUniqueInput
    /**
     * In case the Checklist found by the `where` argument doesn't exist, create a new Checklist with this data.
     */
    create: XOR<ChecklistCreateInput, ChecklistUncheckedCreateInput>
    /**
     * In case the Checklist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChecklistUpdateInput, ChecklistUncheckedUpdateInput>
  }

  /**
   * Checklist delete
   */
  export type ChecklistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter which Checklist to delete.
     */
    where: ChecklistWhereUniqueInput
  }

  /**
   * Checklist deleteMany
   */
  export type ChecklistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Checklists to delete
     */
    where?: ChecklistWhereInput
    /**
     * Limit how many Checklists to delete.
     */
    limit?: number
  }

  /**
   * Checklist without action
   */
  export type ChecklistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
  }


  /**
   * Model Series
   */

  export type AggregateSeries = {
    _count: SeriesCountAggregateOutputType | null
    _avg: SeriesAvgAggregateOutputType | null
    _sum: SeriesSumAggregateOutputType | null
    _min: SeriesMinAggregateOutputType | null
    _max: SeriesMaxAggregateOutputType | null
  }

  export type SeriesAvgAggregateOutputType = {
    id: number | null
  }

  export type SeriesSumAggregateOutputType = {
    id: number | null
  }

  export type SeriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SeriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SeriesCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SeriesAvgAggregateInputType = {
    id?: true
  }

  export type SeriesSumAggregateInputType = {
    id?: true
  }

  export type SeriesMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SeriesMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SeriesCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SeriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Series to aggregate.
     */
    where?: SeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SeriesOrderByWithRelationInput | SeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Series
    **/
    _count?: true | SeriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeriesMaxAggregateInputType
  }

  export type GetSeriesAggregateType<T extends SeriesAggregateArgs> = {
        [P in keyof T & keyof AggregateSeries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeries[P]>
      : GetScalarType<T[P], AggregateSeries[P]>
  }




  export type SeriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeriesWhereInput
    orderBy?: SeriesOrderByWithAggregationInput | SeriesOrderByWithAggregationInput[]
    by: SeriesScalarFieldEnum[] | SeriesScalarFieldEnum
    having?: SeriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeriesCountAggregateInputType | true
    _avg?: SeriesAvgAggregateInputType
    _sum?: SeriesSumAggregateInputType
    _min?: SeriesMinAggregateInputType
    _max?: SeriesMaxAggregateInputType
  }

  export type SeriesGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: SeriesCountAggregateOutputType | null
    _avg: SeriesAvgAggregateOutputType | null
    _sum: SeriesSumAggregateOutputType | null
    _min: SeriesMinAggregateOutputType | null
    _max: SeriesMaxAggregateOutputType | null
  }

  type GetSeriesGroupByPayload<T extends SeriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeriesGroupByOutputType[P]>
            : GetScalarType<T[P], SeriesGroupByOutputType[P]>
        }
      >
    >


  export type SeriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subjects?: boolean | Series$subjectsArgs<ExtArgs>
    _count?: boolean | SeriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["series"]>

  export type SeriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["series"]>

  export type SeriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["series"]>

  export type SeriesSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SeriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["series"]>
  export type SeriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | Series$subjectsArgs<ExtArgs>
    _count?: boolean | SeriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SeriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SeriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SeriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Series"
    objects: {
      subjects: Prisma.$SubjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["series"]>
    composites: {}
  }

  type SeriesGetPayload<S extends boolean | null | undefined | SeriesDefaultArgs> = $Result.GetResult<Prisma.$SeriesPayload, S>

  type SeriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeriesCountAggregateInputType | true
    }

  export interface SeriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Series'], meta: { name: 'Series' } }
    /**
     * Find zero or one Series that matches the filter.
     * @param {SeriesFindUniqueArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeriesFindUniqueArgs>(args: SelectSubset<T, SeriesFindUniqueArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Series that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeriesFindUniqueOrThrowArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeriesFindUniqueOrThrowArgs>(args: SelectSubset<T, SeriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Series that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesFindFirstArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeriesFindFirstArgs>(args?: SelectSubset<T, SeriesFindFirstArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Series that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesFindFirstOrThrowArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeriesFindFirstOrThrowArgs>(args?: SelectSubset<T, SeriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Series that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Series
     * const series = await prisma.series.findMany()
     * 
     * // Get first 10 Series
     * const series = await prisma.series.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seriesWithIdOnly = await prisma.series.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeriesFindManyArgs>(args?: SelectSubset<T, SeriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Series.
     * @param {SeriesCreateArgs} args - Arguments to create a Series.
     * @example
     * // Create one Series
     * const Series = await prisma.series.create({
     *   data: {
     *     // ... data to create a Series
     *   }
     * })
     * 
     */
    create<T extends SeriesCreateArgs>(args: SelectSubset<T, SeriesCreateArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Series.
     * @param {SeriesCreateManyArgs} args - Arguments to create many Series.
     * @example
     * // Create many Series
     * const series = await prisma.series.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeriesCreateManyArgs>(args?: SelectSubset<T, SeriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Series and returns the data saved in the database.
     * @param {SeriesCreateManyAndReturnArgs} args - Arguments to create many Series.
     * @example
     * // Create many Series
     * const series = await prisma.series.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Series and only return the `id`
     * const seriesWithIdOnly = await prisma.series.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeriesCreateManyAndReturnArgs>(args?: SelectSubset<T, SeriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Series.
     * @param {SeriesDeleteArgs} args - Arguments to delete one Series.
     * @example
     * // Delete one Series
     * const Series = await prisma.series.delete({
     *   where: {
     *     // ... filter to delete one Series
     *   }
     * })
     * 
     */
    delete<T extends SeriesDeleteArgs>(args: SelectSubset<T, SeriesDeleteArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Series.
     * @param {SeriesUpdateArgs} args - Arguments to update one Series.
     * @example
     * // Update one Series
     * const series = await prisma.series.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeriesUpdateArgs>(args: SelectSubset<T, SeriesUpdateArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Series.
     * @param {SeriesDeleteManyArgs} args - Arguments to filter Series to delete.
     * @example
     * // Delete a few Series
     * const { count } = await prisma.series.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeriesDeleteManyArgs>(args?: SelectSubset<T, SeriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Series
     * const series = await prisma.series.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeriesUpdateManyArgs>(args: SelectSubset<T, SeriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Series and returns the data updated in the database.
     * @param {SeriesUpdateManyAndReturnArgs} args - Arguments to update many Series.
     * @example
     * // Update many Series
     * const series = await prisma.series.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Series and only return the `id`
     * const seriesWithIdOnly = await prisma.series.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SeriesUpdateManyAndReturnArgs>(args: SelectSubset<T, SeriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Series.
     * @param {SeriesUpsertArgs} args - Arguments to update or create a Series.
     * @example
     * // Update or create a Series
     * const series = await prisma.series.upsert({
     *   create: {
     *     // ... data to create a Series
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Series we want to update
     *   }
     * })
     */
    upsert<T extends SeriesUpsertArgs>(args: SelectSubset<T, SeriesUpsertArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesCountArgs} args - Arguments to filter Series to count.
     * @example
     * // Count the number of Series
     * const count = await prisma.series.count({
     *   where: {
     *     // ... the filter for the Series we want to count
     *   }
     * })
    **/
    count<T extends SeriesCountArgs>(
      args?: Subset<T, SeriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeriesAggregateArgs>(args: Subset<T, SeriesAggregateArgs>): Prisma.PrismaPromise<GetSeriesAggregateType<T>>

    /**
     * Group by Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SeriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeriesGroupByArgs['orderBy'] }
        : { orderBy?: SeriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SeriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Series model
   */
  readonly fields: SeriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Series.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subjects<T extends Series$subjectsArgs<ExtArgs> = {}>(args?: Subset<T, Series$subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Series model
   */
  interface SeriesFieldRefs {
    readonly id: FieldRef<"Series", 'Int'>
    readonly name: FieldRef<"Series", 'String'>
    readonly createdAt: FieldRef<"Series", 'DateTime'>
    readonly updatedAt: FieldRef<"Series", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Series findUnique
   */
  export type SeriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where: SeriesWhereUniqueInput
  }

  /**
   * Series findUniqueOrThrow
   */
  export type SeriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where: SeriesWhereUniqueInput
  }

  /**
   * Series findFirst
   */
  export type SeriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where?: SeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SeriesOrderByWithRelationInput | SeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Series.
     */
    cursor?: SeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Series.
     */
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[]
  }

  /**
   * Series findFirstOrThrow
   */
  export type SeriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where?: SeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SeriesOrderByWithRelationInput | SeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Series.
     */
    cursor?: SeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Series.
     */
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[]
  }

  /**
   * Series findMany
   */
  export type SeriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where?: SeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SeriesOrderByWithRelationInput | SeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Series.
     */
    cursor?: SeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Series.
     */
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[]
  }

  /**
   * Series create
   */
  export type SeriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Series.
     */
    data: XOR<SeriesCreateInput, SeriesUncheckedCreateInput>
  }

  /**
   * Series createMany
   */
  export type SeriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Series.
     */
    data: SeriesCreateManyInput | SeriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Series createManyAndReturn
   */
  export type SeriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * The data used to create many Series.
     */
    data: SeriesCreateManyInput | SeriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Series update
   */
  export type SeriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Series.
     */
    data: XOR<SeriesUpdateInput, SeriesUncheckedUpdateInput>
    /**
     * Choose, which Series to update.
     */
    where: SeriesWhereUniqueInput
  }

  /**
   * Series updateMany
   */
  export type SeriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Series.
     */
    data: XOR<SeriesUpdateManyMutationInput, SeriesUncheckedUpdateManyInput>
    /**
     * Filter which Series to update
     */
    where?: SeriesWhereInput
    /**
     * Limit how many Series to update.
     */
    limit?: number
  }

  /**
   * Series updateManyAndReturn
   */
  export type SeriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * The data used to update Series.
     */
    data: XOR<SeriesUpdateManyMutationInput, SeriesUncheckedUpdateManyInput>
    /**
     * Filter which Series to update
     */
    where?: SeriesWhereInput
    /**
     * Limit how many Series to update.
     */
    limit?: number
  }

  /**
   * Series upsert
   */
  export type SeriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Series to update in case it exists.
     */
    where: SeriesWhereUniqueInput
    /**
     * In case the Series found by the `where` argument doesn't exist, create a new Series with this data.
     */
    create: XOR<SeriesCreateInput, SeriesUncheckedCreateInput>
    /**
     * In case the Series was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeriesUpdateInput, SeriesUncheckedUpdateInput>
  }

  /**
   * Series delete
   */
  export type SeriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter which Series to delete.
     */
    where: SeriesWhereUniqueInput
  }

  /**
   * Series deleteMany
   */
  export type SeriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Series to delete
     */
    where?: SeriesWhereInput
    /**
     * Limit how many Series to delete.
     */
    limit?: number
  }

  /**
   * Series.subjects
   */
  export type Series$subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    cursor?: SubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Series without action
   */
  export type SeriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
  }


  /**
   * Model Subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  export type SubjectAvgAggregateOutputType = {
    id: number | null
    seriesId: number | null
  }

  export type SubjectSumAggregateOutputType = {
    id: number | null
    seriesId: number | null
  }

  export type SubjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    seriesId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    seriesId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubjectCountAggregateOutputType = {
    id: number
    name: number
    seriesId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubjectAvgAggregateInputType = {
    id?: true
    seriesId?: true
  }

  export type SubjectSumAggregateInputType = {
    id?: true
    seriesId?: true
  }

  export type SubjectMinAggregateInputType = {
    id?: true
    name?: true
    seriesId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubjectMaxAggregateInputType = {
    id?: true
    name?: true
    seriesId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubjectCountAggregateInputType = {
    id?: true
    name?: true
    seriesId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subject to aggregate.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subjects
    **/
    _count?: true | SubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectMaxAggregateInputType
  }

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>
  }




  export type SubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithAggregationInput | SubjectOrderByWithAggregationInput[]
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum
    having?: SubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCountAggregateInputType | true
    _avg?: SubjectAvgAggregateInputType
    _sum?: SubjectSumAggregateInputType
    _min?: SubjectMinAggregateInputType
    _max?: SubjectMaxAggregateInputType
  }

  export type SubjectGroupByOutputType = {
    id: number
    name: string
    seriesId: number | null
    createdAt: Date
    updatedAt: Date
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>
        }
      >
    >


  export type SubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    seriesId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    series?: boolean | Subject$seriesArgs<ExtArgs>
    topicSubjects?: boolean | Subject$topicSubjectsArgs<ExtArgs>
    vestibularSubjects?: boolean | Subject$vestibularSubjectsArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    seriesId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    series?: boolean | Subject$seriesArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    seriesId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    series?: boolean | Subject$seriesArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectScalar = {
    id?: boolean
    name?: boolean
    seriesId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "seriesId" | "createdAt" | "updatedAt", ExtArgs["result"]["subject"]>
  export type SubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    series?: boolean | Subject$seriesArgs<ExtArgs>
    topicSubjects?: boolean | Subject$topicSubjectsArgs<ExtArgs>
    vestibularSubjects?: boolean | Subject$vestibularSubjectsArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    series?: boolean | Subject$seriesArgs<ExtArgs>
  }
  export type SubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    series?: boolean | Subject$seriesArgs<ExtArgs>
  }

  export type $SubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subject"
    objects: {
      series: Prisma.$SeriesPayload<ExtArgs> | null
      topicSubjects: Prisma.$TopicSubjectPayload<ExtArgs>[]
      vestibularSubjects: Prisma.$VestibularSubjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      seriesId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subject"]>
    composites: {}
  }

  type SubjectGetPayload<S extends boolean | null | undefined | SubjectDefaultArgs> = $Result.GetResult<Prisma.$SubjectPayload, S>

  type SubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectCountAggregateInputType | true
    }

  export interface SubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subject'], meta: { name: 'Subject' } }
    /**
     * Find zero or one Subject that matches the filter.
     * @param {SubjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectFindUniqueArgs>(args: SelectSubset<T, SubjectFindUniqueArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectFindFirstArgs>(args?: SelectSubset<T, SubjectFindFirstArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectWithIdOnly = await prisma.subject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectFindManyArgs>(args?: SelectSubset<T, SubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subject.
     * @param {SubjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     * 
     */
    create<T extends SubjectCreateArgs>(args: SelectSubset<T, SubjectCreateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subjects.
     * @param {SubjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectCreateManyArgs>(args?: SelectSubset<T, SubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {SubjectCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subject.
     * @param {SubjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     * 
     */
    delete<T extends SubjectDeleteArgs>(args: SelectSubset<T, SubjectDeleteArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subject.
     * @param {SubjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectUpdateArgs>(args: SelectSubset<T, SubjectUpdateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subjects.
     * @param {SubjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectDeleteManyArgs>(args?: SelectSubset<T, SubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectUpdateManyArgs>(args: SelectSubset<T, SubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects and returns the data updated in the database.
     * @param {SubjectUpdateManyAndReturnArgs} args - Arguments to update many Subjects.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, SubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subject.
     * @param {SubjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends SubjectUpsertArgs>(args: SelectSubset<T, SubjectUpsertArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends SubjectCountArgs>(
      args?: Subset<T, SubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubjectAggregateArgs>(args: Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectGroupByArgs['orderBy'] }
        : { orderBy?: SubjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subject model
   */
  readonly fields: SubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    series<T extends Subject$seriesArgs<ExtArgs> = {}>(args?: Subset<T, Subject$seriesArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    topicSubjects<T extends Subject$topicSubjectsArgs<ExtArgs> = {}>(args?: Subset<T, Subject$topicSubjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vestibularSubjects<T extends Subject$vestibularSubjectsArgs<ExtArgs> = {}>(args?: Subset<T, Subject$vestibularSubjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VestibularSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subject model
   */
  interface SubjectFieldRefs {
    readonly id: FieldRef<"Subject", 'Int'>
    readonly name: FieldRef<"Subject", 'String'>
    readonly seriesId: FieldRef<"Subject", 'Int'>
    readonly createdAt: FieldRef<"Subject", 'DateTime'>
    readonly updatedAt: FieldRef<"Subject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subject findUnique
   */
  export type SubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findUniqueOrThrow
   */
  export type SubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findFirst
   */
  export type SubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findFirstOrThrow
   */
  export type SubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findMany
   */
  export type SubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject create
   */
  export type SubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Subject.
     */
    data: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
  }

  /**
   * Subject createMany
   */
  export type SubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject createManyAndReturn
   */
  export type SubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subject update
   */
  export type SubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Subject.
     */
    data: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
    /**
     * Choose, which Subject to update.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject updateMany
   */
  export type SubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject updateManyAndReturn
   */
  export type SubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subject upsert
   */
  export type SubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Subject to update in case it exists.
     */
    where: SubjectWhereUniqueInput
    /**
     * In case the Subject found by the `where` argument doesn't exist, create a new Subject with this data.
     */
    create: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
    /**
     * In case the Subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
  }

  /**
   * Subject delete
   */
  export type SubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter which Subject to delete.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject deleteMany
   */
  export type SubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subjects to delete
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to delete.
     */
    limit?: number
  }

  /**
   * Subject.series
   */
  export type Subject$seriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    where?: SeriesWhereInput
  }

  /**
   * Subject.topicSubjects
   */
  export type Subject$topicSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicSubject
     */
    select?: TopicSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicSubject
     */
    omit?: TopicSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicSubjectInclude<ExtArgs> | null
    where?: TopicSubjectWhereInput
    orderBy?: TopicSubjectOrderByWithRelationInput | TopicSubjectOrderByWithRelationInput[]
    cursor?: TopicSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TopicSubjectScalarFieldEnum | TopicSubjectScalarFieldEnum[]
  }

  /**
   * Subject.vestibularSubjects
   */
  export type Subject$vestibularSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularSubject
     */
    select?: VestibularSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularSubject
     */
    omit?: VestibularSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularSubjectInclude<ExtArgs> | null
    where?: VestibularSubjectWhereInput
    orderBy?: VestibularSubjectOrderByWithRelationInput | VestibularSubjectOrderByWithRelationInput[]
    cursor?: VestibularSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VestibularSubjectScalarFieldEnum | VestibularSubjectScalarFieldEnum[]
  }

  /**
   * Subject without action
   */
  export type SubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
  }


  /**
   * Model Topic
   */

  export type AggregateTopic = {
    _count: TopicCountAggregateOutputType | null
    _avg: TopicAvgAggregateOutputType | null
    _sum: TopicSumAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  export type TopicAvgAggregateOutputType = {
    id: number | null
  }

  export type TopicSumAggregateOutputType = {
    id: number | null
  }

  export type TopicMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TopicMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TopicCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TopicAvgAggregateInputType = {
    id?: true
  }

  export type TopicSumAggregateInputType = {
    id?: true
  }

  export type TopicMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TopicMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TopicCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topic to aggregate.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Topics
    **/
    _count?: true | TopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TopicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TopicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopicMaxAggregateInputType
  }

  export type GetTopicAggregateType<T extends TopicAggregateArgs> = {
        [P in keyof T & keyof AggregateTopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopic[P]>
      : GetScalarType<T[P], AggregateTopic[P]>
  }




  export type TopicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicWhereInput
    orderBy?: TopicOrderByWithAggregationInput | TopicOrderByWithAggregationInput[]
    by: TopicScalarFieldEnum[] | TopicScalarFieldEnum
    having?: TopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopicCountAggregateInputType | true
    _avg?: TopicAvgAggregateInputType
    _sum?: TopicSumAggregateInputType
    _min?: TopicMinAggregateInputType
    _max?: TopicMaxAggregateInputType
  }

  export type TopicGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: TopicCountAggregateOutputType | null
    _avg: TopicAvgAggregateOutputType | null
    _sum: TopicSumAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  type GetTopicGroupByPayload<T extends TopicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopicGroupByOutputType[P]>
            : GetScalarType<T[P], TopicGroupByOutputType[P]>
        }
      >
    >


  export type TopicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contents?: boolean | Topic$contentsArgs<ExtArgs>
    topicSubjects?: boolean | Topic$topicSubjectsArgs<ExtArgs>
    accessibilityCategoryTopics?: boolean | Topic$accessibilityCategoryTopicsArgs<ExtArgs>
    _count?: boolean | TopicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TopicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["topic"]>
  export type TopicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contents?: boolean | Topic$contentsArgs<ExtArgs>
    topicSubjects?: boolean | Topic$topicSubjectsArgs<ExtArgs>
    accessibilityCategoryTopics?: boolean | Topic$accessibilityCategoryTopicsArgs<ExtArgs>
    _count?: boolean | TopicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TopicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TopicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TopicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Topic"
    objects: {
      contents: Prisma.$ContentPayload<ExtArgs>[]
      topicSubjects: Prisma.$TopicSubjectPayload<ExtArgs>[]
      accessibilityCategoryTopics: Prisma.$AccessibilityCategoryTopicPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["topic"]>
    composites: {}
  }

  type TopicGetPayload<S extends boolean | null | undefined | TopicDefaultArgs> = $Result.GetResult<Prisma.$TopicPayload, S>

  type TopicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TopicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TopicCountAggregateInputType | true
    }

  export interface TopicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Topic'], meta: { name: 'Topic' } }
    /**
     * Find zero or one Topic that matches the filter.
     * @param {TopicFindUniqueArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TopicFindUniqueArgs>(args: SelectSubset<T, TopicFindUniqueArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Topic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TopicFindUniqueOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TopicFindUniqueOrThrowArgs>(args: SelectSubset<T, TopicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Topic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindFirstArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TopicFindFirstArgs>(args?: SelectSubset<T, TopicFindFirstArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Topic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindFirstOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TopicFindFirstOrThrowArgs>(args?: SelectSubset<T, TopicFindFirstOrThrowArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Topics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Topics
     * const topics = await prisma.topic.findMany()
     * 
     * // Get first 10 Topics
     * const topics = await prisma.topic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const topicWithIdOnly = await prisma.topic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TopicFindManyArgs>(args?: SelectSubset<T, TopicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Topic.
     * @param {TopicCreateArgs} args - Arguments to create a Topic.
     * @example
     * // Create one Topic
     * const Topic = await prisma.topic.create({
     *   data: {
     *     // ... data to create a Topic
     *   }
     * })
     * 
     */
    create<T extends TopicCreateArgs>(args: SelectSubset<T, TopicCreateArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Topics.
     * @param {TopicCreateManyArgs} args - Arguments to create many Topics.
     * @example
     * // Create many Topics
     * const topic = await prisma.topic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TopicCreateManyArgs>(args?: SelectSubset<T, TopicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Topics and returns the data saved in the database.
     * @param {TopicCreateManyAndReturnArgs} args - Arguments to create many Topics.
     * @example
     * // Create many Topics
     * const topic = await prisma.topic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Topics and only return the `id`
     * const topicWithIdOnly = await prisma.topic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TopicCreateManyAndReturnArgs>(args?: SelectSubset<T, TopicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Topic.
     * @param {TopicDeleteArgs} args - Arguments to delete one Topic.
     * @example
     * // Delete one Topic
     * const Topic = await prisma.topic.delete({
     *   where: {
     *     // ... filter to delete one Topic
     *   }
     * })
     * 
     */
    delete<T extends TopicDeleteArgs>(args: SelectSubset<T, TopicDeleteArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Topic.
     * @param {TopicUpdateArgs} args - Arguments to update one Topic.
     * @example
     * // Update one Topic
     * const topic = await prisma.topic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TopicUpdateArgs>(args: SelectSubset<T, TopicUpdateArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Topics.
     * @param {TopicDeleteManyArgs} args - Arguments to filter Topics to delete.
     * @example
     * // Delete a few Topics
     * const { count } = await prisma.topic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TopicDeleteManyArgs>(args?: SelectSubset<T, TopicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Topics
     * const topic = await prisma.topic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TopicUpdateManyArgs>(args: SelectSubset<T, TopicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics and returns the data updated in the database.
     * @param {TopicUpdateManyAndReturnArgs} args - Arguments to update many Topics.
     * @example
     * // Update many Topics
     * const topic = await prisma.topic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Topics and only return the `id`
     * const topicWithIdOnly = await prisma.topic.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TopicUpdateManyAndReturnArgs>(args: SelectSubset<T, TopicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Topic.
     * @param {TopicUpsertArgs} args - Arguments to update or create a Topic.
     * @example
     * // Update or create a Topic
     * const topic = await prisma.topic.upsert({
     *   create: {
     *     // ... data to create a Topic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Topic we want to update
     *   }
     * })
     */
    upsert<T extends TopicUpsertArgs>(args: SelectSubset<T, TopicUpsertArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicCountArgs} args - Arguments to filter Topics to count.
     * @example
     * // Count the number of Topics
     * const count = await prisma.topic.count({
     *   where: {
     *     // ... the filter for the Topics we want to count
     *   }
     * })
    **/
    count<T extends TopicCountArgs>(
      args?: Subset<T, TopicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TopicAggregateArgs>(args: Subset<T, TopicAggregateArgs>): Prisma.PrismaPromise<GetTopicAggregateType<T>>

    /**
     * Group by Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TopicGroupByArgs['orderBy'] }
        : { orderBy?: TopicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Topic model
   */
  readonly fields: TopicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Topic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TopicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contents<T extends Topic$contentsArgs<ExtArgs> = {}>(args?: Subset<T, Topic$contentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    topicSubjects<T extends Topic$topicSubjectsArgs<ExtArgs> = {}>(args?: Subset<T, Topic$topicSubjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accessibilityCategoryTopics<T extends Topic$accessibilityCategoryTopicsArgs<ExtArgs> = {}>(args?: Subset<T, Topic$accessibilityCategoryTopicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessibilityCategoryTopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Topic model
   */
  interface TopicFieldRefs {
    readonly id: FieldRef<"Topic", 'Int'>
    readonly name: FieldRef<"Topic", 'String'>
    readonly createdAt: FieldRef<"Topic", 'DateTime'>
    readonly updatedAt: FieldRef<"Topic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Topic findUnique
   */
  export type TopicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic findUniqueOrThrow
   */
  export type TopicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic findFirst
   */
  export type TopicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic findFirstOrThrow
   */
  export type TopicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic findMany
   */
  export type TopicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topics to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic create
   */
  export type TopicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The data needed to create a Topic.
     */
    data: XOR<TopicCreateInput, TopicUncheckedCreateInput>
  }

  /**
   * Topic createMany
   */
  export type TopicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Topics.
     */
    data: TopicCreateManyInput | TopicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Topic createManyAndReturn
   */
  export type TopicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * The data used to create many Topics.
     */
    data: TopicCreateManyInput | TopicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Topic update
   */
  export type TopicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The data needed to update a Topic.
     */
    data: XOR<TopicUpdateInput, TopicUncheckedUpdateInput>
    /**
     * Choose, which Topic to update.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic updateMany
   */
  export type TopicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Topics.
     */
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyInput>
    /**
     * Filter which Topics to update
     */
    where?: TopicWhereInput
    /**
     * Limit how many Topics to update.
     */
    limit?: number
  }

  /**
   * Topic updateManyAndReturn
   */
  export type TopicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * The data used to update Topics.
     */
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyInput>
    /**
     * Filter which Topics to update
     */
    where?: TopicWhereInput
    /**
     * Limit how many Topics to update.
     */
    limit?: number
  }

  /**
   * Topic upsert
   */
  export type TopicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The filter to search for the Topic to update in case it exists.
     */
    where: TopicWhereUniqueInput
    /**
     * In case the Topic found by the `where` argument doesn't exist, create a new Topic with this data.
     */
    create: XOR<TopicCreateInput, TopicUncheckedCreateInput>
    /**
     * In case the Topic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TopicUpdateInput, TopicUncheckedUpdateInput>
  }

  /**
   * Topic delete
   */
  export type TopicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter which Topic to delete.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic deleteMany
   */
  export type TopicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topics to delete
     */
    where?: TopicWhereInput
    /**
     * Limit how many Topics to delete.
     */
    limit?: number
  }

  /**
   * Topic.contents
   */
  export type Topic$contentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    where?: ContentWhereInput
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    cursor?: ContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Topic.topicSubjects
   */
  export type Topic$topicSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicSubject
     */
    select?: TopicSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicSubject
     */
    omit?: TopicSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicSubjectInclude<ExtArgs> | null
    where?: TopicSubjectWhereInput
    orderBy?: TopicSubjectOrderByWithRelationInput | TopicSubjectOrderByWithRelationInput[]
    cursor?: TopicSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TopicSubjectScalarFieldEnum | TopicSubjectScalarFieldEnum[]
  }

  /**
   * Topic.accessibilityCategoryTopics
   */
  export type Topic$accessibilityCategoryTopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityCategoryTopic
     */
    select?: AccessibilityCategoryTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityCategoryTopic
     */
    omit?: AccessibilityCategoryTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityCategoryTopicInclude<ExtArgs> | null
    where?: AccessibilityCategoryTopicWhereInput
    orderBy?: AccessibilityCategoryTopicOrderByWithRelationInput | AccessibilityCategoryTopicOrderByWithRelationInput[]
    cursor?: AccessibilityCategoryTopicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccessibilityCategoryTopicScalarFieldEnum | AccessibilityCategoryTopicScalarFieldEnum[]
  }

  /**
   * Topic without action
   */
  export type TopicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
  }


  /**
   * Model Content
   */

  export type AggregateContent = {
    _count: ContentCountAggregateOutputType | null
    _avg: ContentAvgAggregateOutputType | null
    _sum: ContentSumAggregateOutputType | null
    _min: ContentMinAggregateOutputType | null
    _max: ContentMaxAggregateOutputType | null
  }

  export type ContentAvgAggregateOutputType = {
    id: number | null
    topicId: number | null
  }

  export type ContentSumAggregateOutputType = {
    id: number | null
    topicId: number | null
  }

  export type ContentMinAggregateOutputType = {
    id: number | null
    title: string | null
    type: string | null
    link: string | null
    thumbnailUrl: string | null
    pdfUrl: string | null
    topicId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentMaxAggregateOutputType = {
    id: number | null
    title: string | null
    type: string | null
    link: string | null
    thumbnailUrl: string | null
    pdfUrl: string | null
    topicId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentCountAggregateOutputType = {
    id: number
    title: number
    type: number
    link: number
    thumbnailUrl: number
    pdfUrl: number
    topicId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContentAvgAggregateInputType = {
    id?: true
    topicId?: true
  }

  export type ContentSumAggregateInputType = {
    id?: true
    topicId?: true
  }

  export type ContentMinAggregateInputType = {
    id?: true
    title?: true
    type?: true
    link?: true
    thumbnailUrl?: true
    pdfUrl?: true
    topicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentMaxAggregateInputType = {
    id?: true
    title?: true
    type?: true
    link?: true
    thumbnailUrl?: true
    pdfUrl?: true
    topicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentCountAggregateInputType = {
    id?: true
    title?: true
    type?: true
    link?: true
    thumbnailUrl?: true
    pdfUrl?: true
    topicId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Content to aggregate.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contents
    **/
    _count?: true | ContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentMaxAggregateInputType
  }

  export type GetContentAggregateType<T extends ContentAggregateArgs> = {
        [P in keyof T & keyof AggregateContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContent[P]>
      : GetScalarType<T[P], AggregateContent[P]>
  }




  export type ContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentWhereInput
    orderBy?: ContentOrderByWithAggregationInput | ContentOrderByWithAggregationInput[]
    by: ContentScalarFieldEnum[] | ContentScalarFieldEnum
    having?: ContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentCountAggregateInputType | true
    _avg?: ContentAvgAggregateInputType
    _sum?: ContentSumAggregateInputType
    _min?: ContentMinAggregateInputType
    _max?: ContentMaxAggregateInputType
  }

  export type ContentGroupByOutputType = {
    id: number
    title: string
    type: string
    link: string
    thumbnailUrl: string
    pdfUrl: string | null
    topicId: number
    createdAt: Date
    updatedAt: Date
    _count: ContentCountAggregateOutputType | null
    _avg: ContentAvgAggregateOutputType | null
    _sum: ContentSumAggregateOutputType | null
    _min: ContentMinAggregateOutputType | null
    _max: ContentMaxAggregateOutputType | null
  }

  type GetContentGroupByPayload<T extends ContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentGroupByOutputType[P]>
            : GetScalarType<T[P], ContentGroupByOutputType[P]>
        }
      >
    >


  export type ContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    link?: boolean
    thumbnailUrl?: boolean
    pdfUrl?: boolean
    topicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    checklists?: boolean | Content$checklistsArgs<ExtArgs>
    vestibularContents?: boolean | Content$vestibularContentsArgs<ExtArgs>
    _count?: boolean | ContentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["content"]>

  export type ContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    link?: boolean
    thumbnailUrl?: boolean
    pdfUrl?: boolean
    topicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["content"]>

  export type ContentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    link?: boolean
    thumbnailUrl?: boolean
    pdfUrl?: boolean
    topicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["content"]>

  export type ContentSelectScalar = {
    id?: boolean
    title?: boolean
    type?: boolean
    link?: boolean
    thumbnailUrl?: boolean
    pdfUrl?: boolean
    topicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "type" | "link" | "thumbnailUrl" | "pdfUrl" | "topicId" | "createdAt" | "updatedAt", ExtArgs["result"]["content"]>
  export type ContentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    checklists?: boolean | Content$checklistsArgs<ExtArgs>
    vestibularContents?: boolean | Content$vestibularContentsArgs<ExtArgs>
    _count?: boolean | ContentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }
  export type ContentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }

  export type $ContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Content"
    objects: {
      topic: Prisma.$TopicPayload<ExtArgs>
      checklists: Prisma.$ChecklistPayload<ExtArgs>[]
      vestibularContents: Prisma.$VestibularContentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      type: string
      link: string
      thumbnailUrl: string
      pdfUrl: string | null
      topicId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["content"]>
    composites: {}
  }

  type ContentGetPayload<S extends boolean | null | undefined | ContentDefaultArgs> = $Result.GetResult<Prisma.$ContentPayload, S>

  type ContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentCountAggregateInputType | true
    }

  export interface ContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Content'], meta: { name: 'Content' } }
    /**
     * Find zero or one Content that matches the filter.
     * @param {ContentFindUniqueArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentFindUniqueArgs>(args: SelectSubset<T, ContentFindUniqueArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Content that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentFindUniqueOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Content that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindFirstArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentFindFirstArgs>(args?: SelectSubset<T, ContentFindFirstArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Content that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindFirstOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contents
     * const contents = await prisma.content.findMany()
     * 
     * // Get first 10 Contents
     * const contents = await prisma.content.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentWithIdOnly = await prisma.content.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentFindManyArgs>(args?: SelectSubset<T, ContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Content.
     * @param {ContentCreateArgs} args - Arguments to create a Content.
     * @example
     * // Create one Content
     * const Content = await prisma.content.create({
     *   data: {
     *     // ... data to create a Content
     *   }
     * })
     * 
     */
    create<T extends ContentCreateArgs>(args: SelectSubset<T, ContentCreateArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contents.
     * @param {ContentCreateManyArgs} args - Arguments to create many Contents.
     * @example
     * // Create many Contents
     * const content = await prisma.content.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentCreateManyArgs>(args?: SelectSubset<T, ContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contents and returns the data saved in the database.
     * @param {ContentCreateManyAndReturnArgs} args - Arguments to create many Contents.
     * @example
     * // Create many Contents
     * const content = await prisma.content.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contents and only return the `id`
     * const contentWithIdOnly = await prisma.content.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContentCreateManyAndReturnArgs>(args?: SelectSubset<T, ContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Content.
     * @param {ContentDeleteArgs} args - Arguments to delete one Content.
     * @example
     * // Delete one Content
     * const Content = await prisma.content.delete({
     *   where: {
     *     // ... filter to delete one Content
     *   }
     * })
     * 
     */
    delete<T extends ContentDeleteArgs>(args: SelectSubset<T, ContentDeleteArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Content.
     * @param {ContentUpdateArgs} args - Arguments to update one Content.
     * @example
     * // Update one Content
     * const content = await prisma.content.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentUpdateArgs>(args: SelectSubset<T, ContentUpdateArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contents.
     * @param {ContentDeleteManyArgs} args - Arguments to filter Contents to delete.
     * @example
     * // Delete a few Contents
     * const { count } = await prisma.content.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentDeleteManyArgs>(args?: SelectSubset<T, ContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contents
     * const content = await prisma.content.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentUpdateManyArgs>(args: SelectSubset<T, ContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contents and returns the data updated in the database.
     * @param {ContentUpdateManyAndReturnArgs} args - Arguments to update many Contents.
     * @example
     * // Update many Contents
     * const content = await prisma.content.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contents and only return the `id`
     * const contentWithIdOnly = await prisma.content.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContentUpdateManyAndReturnArgs>(args: SelectSubset<T, ContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Content.
     * @param {ContentUpsertArgs} args - Arguments to update or create a Content.
     * @example
     * // Update or create a Content
     * const content = await prisma.content.upsert({
     *   create: {
     *     // ... data to create a Content
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Content we want to update
     *   }
     * })
     */
    upsert<T extends ContentUpsertArgs>(args: SelectSubset<T, ContentUpsertArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentCountArgs} args - Arguments to filter Contents to count.
     * @example
     * // Count the number of Contents
     * const count = await prisma.content.count({
     *   where: {
     *     // ... the filter for the Contents we want to count
     *   }
     * })
    **/
    count<T extends ContentCountArgs>(
      args?: Subset<T, ContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContentAggregateArgs>(args: Subset<T, ContentAggregateArgs>): Prisma.PrismaPromise<GetContentAggregateType<T>>

    /**
     * Group by Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentGroupByArgs['orderBy'] }
        : { orderBy?: ContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Content model
   */
  readonly fields: ContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Content.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    topic<T extends TopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicDefaultArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    checklists<T extends Content$checklistsArgs<ExtArgs> = {}>(args?: Subset<T, Content$checklistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vestibularContents<T extends Content$vestibularContentsArgs<ExtArgs> = {}>(args?: Subset<T, Content$vestibularContentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VestibularContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Content model
   */
  interface ContentFieldRefs {
    readonly id: FieldRef<"Content", 'Int'>
    readonly title: FieldRef<"Content", 'String'>
    readonly type: FieldRef<"Content", 'String'>
    readonly link: FieldRef<"Content", 'String'>
    readonly thumbnailUrl: FieldRef<"Content", 'String'>
    readonly pdfUrl: FieldRef<"Content", 'String'>
    readonly topicId: FieldRef<"Content", 'Int'>
    readonly createdAt: FieldRef<"Content", 'DateTime'>
    readonly updatedAt: FieldRef<"Content", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Content findUnique
   */
  export type ContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content findUniqueOrThrow
   */
  export type ContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content findFirst
   */
  export type ContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content findFirstOrThrow
   */
  export type ContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content findMany
   */
  export type ContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Contents to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content create
   */
  export type ContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The data needed to create a Content.
     */
    data: XOR<ContentCreateInput, ContentUncheckedCreateInput>
  }

  /**
   * Content createMany
   */
  export type ContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contents.
     */
    data: ContentCreateManyInput | ContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Content createManyAndReturn
   */
  export type ContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * The data used to create many Contents.
     */
    data: ContentCreateManyInput | ContentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Content update
   */
  export type ContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The data needed to update a Content.
     */
    data: XOR<ContentUpdateInput, ContentUncheckedUpdateInput>
    /**
     * Choose, which Content to update.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content updateMany
   */
  export type ContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contents.
     */
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyInput>
    /**
     * Filter which Contents to update
     */
    where?: ContentWhereInput
    /**
     * Limit how many Contents to update.
     */
    limit?: number
  }

  /**
   * Content updateManyAndReturn
   */
  export type ContentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * The data used to update Contents.
     */
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyInput>
    /**
     * Filter which Contents to update
     */
    where?: ContentWhereInput
    /**
     * Limit how many Contents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Content upsert
   */
  export type ContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The filter to search for the Content to update in case it exists.
     */
    where: ContentWhereUniqueInput
    /**
     * In case the Content found by the `where` argument doesn't exist, create a new Content with this data.
     */
    create: XOR<ContentCreateInput, ContentUncheckedCreateInput>
    /**
     * In case the Content was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentUpdateInput, ContentUncheckedUpdateInput>
  }

  /**
   * Content delete
   */
  export type ContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter which Content to delete.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content deleteMany
   */
  export type ContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contents to delete
     */
    where?: ContentWhereInput
    /**
     * Limit how many Contents to delete.
     */
    limit?: number
  }

  /**
   * Content.checklists
   */
  export type Content$checklistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    where?: ChecklistWhereInput
    orderBy?: ChecklistOrderByWithRelationInput | ChecklistOrderByWithRelationInput[]
    cursor?: ChecklistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChecklistScalarFieldEnum | ChecklistScalarFieldEnum[]
  }

  /**
   * Content.vestibularContents
   */
  export type Content$vestibularContentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularContent
     */
    select?: VestibularContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularContent
     */
    omit?: VestibularContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularContentInclude<ExtArgs> | null
    where?: VestibularContentWhereInput
    orderBy?: VestibularContentOrderByWithRelationInput | VestibularContentOrderByWithRelationInput[]
    cursor?: VestibularContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VestibularContentScalarFieldEnum | VestibularContentScalarFieldEnum[]
  }

  /**
   * Content without action
   */
  export type ContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
  }


  /**
   * Model TopicSubject
   */

  export type AggregateTopicSubject = {
    _count: TopicSubjectCountAggregateOutputType | null
    _avg: TopicSubjectAvgAggregateOutputType | null
    _sum: TopicSubjectSumAggregateOutputType | null
    _min: TopicSubjectMinAggregateOutputType | null
    _max: TopicSubjectMaxAggregateOutputType | null
  }

  export type TopicSubjectAvgAggregateOutputType = {
    topicId: number | null
    subjectId: number | null
  }

  export type TopicSubjectSumAggregateOutputType = {
    topicId: number | null
    subjectId: number | null
  }

  export type TopicSubjectMinAggregateOutputType = {
    topicId: number | null
    subjectId: number | null
  }

  export type TopicSubjectMaxAggregateOutputType = {
    topicId: number | null
    subjectId: number | null
  }

  export type TopicSubjectCountAggregateOutputType = {
    topicId: number
    subjectId: number
    _all: number
  }


  export type TopicSubjectAvgAggregateInputType = {
    topicId?: true
    subjectId?: true
  }

  export type TopicSubjectSumAggregateInputType = {
    topicId?: true
    subjectId?: true
  }

  export type TopicSubjectMinAggregateInputType = {
    topicId?: true
    subjectId?: true
  }

  export type TopicSubjectMaxAggregateInputType = {
    topicId?: true
    subjectId?: true
  }

  export type TopicSubjectCountAggregateInputType = {
    topicId?: true
    subjectId?: true
    _all?: true
  }

  export type TopicSubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TopicSubject to aggregate.
     */
    where?: TopicSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopicSubjects to fetch.
     */
    orderBy?: TopicSubjectOrderByWithRelationInput | TopicSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TopicSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopicSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopicSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TopicSubjects
    **/
    _count?: true | TopicSubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TopicSubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TopicSubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopicSubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopicSubjectMaxAggregateInputType
  }

  export type GetTopicSubjectAggregateType<T extends TopicSubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateTopicSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopicSubject[P]>
      : GetScalarType<T[P], AggregateTopicSubject[P]>
  }




  export type TopicSubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicSubjectWhereInput
    orderBy?: TopicSubjectOrderByWithAggregationInput | TopicSubjectOrderByWithAggregationInput[]
    by: TopicSubjectScalarFieldEnum[] | TopicSubjectScalarFieldEnum
    having?: TopicSubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopicSubjectCountAggregateInputType | true
    _avg?: TopicSubjectAvgAggregateInputType
    _sum?: TopicSubjectSumAggregateInputType
    _min?: TopicSubjectMinAggregateInputType
    _max?: TopicSubjectMaxAggregateInputType
  }

  export type TopicSubjectGroupByOutputType = {
    topicId: number
    subjectId: number
    _count: TopicSubjectCountAggregateOutputType | null
    _avg: TopicSubjectAvgAggregateOutputType | null
    _sum: TopicSubjectSumAggregateOutputType | null
    _min: TopicSubjectMinAggregateOutputType | null
    _max: TopicSubjectMaxAggregateOutputType | null
  }

  type GetTopicSubjectGroupByPayload<T extends TopicSubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TopicSubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopicSubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopicSubjectGroupByOutputType[P]>
            : GetScalarType<T[P], TopicSubjectGroupByOutputType[P]>
        }
      >
    >


  export type TopicSubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    topicId?: boolean
    subjectId?: boolean
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topicSubject"]>

  export type TopicSubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    topicId?: boolean
    subjectId?: boolean
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topicSubject"]>

  export type TopicSubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    topicId?: boolean
    subjectId?: boolean
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topicSubject"]>

  export type TopicSubjectSelectScalar = {
    topicId?: boolean
    subjectId?: boolean
  }

  export type TopicSubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"topicId" | "subjectId", ExtArgs["result"]["topicSubject"]>
  export type TopicSubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type TopicSubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type TopicSubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }

  export type $TopicSubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TopicSubject"
    objects: {
      topic: Prisma.$TopicPayload<ExtArgs>
      subject: Prisma.$SubjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      topicId: number
      subjectId: number
    }, ExtArgs["result"]["topicSubject"]>
    composites: {}
  }

  type TopicSubjectGetPayload<S extends boolean | null | undefined | TopicSubjectDefaultArgs> = $Result.GetResult<Prisma.$TopicSubjectPayload, S>

  type TopicSubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TopicSubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TopicSubjectCountAggregateInputType | true
    }

  export interface TopicSubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TopicSubject'], meta: { name: 'TopicSubject' } }
    /**
     * Find zero or one TopicSubject that matches the filter.
     * @param {TopicSubjectFindUniqueArgs} args - Arguments to find a TopicSubject
     * @example
     * // Get one TopicSubject
     * const topicSubject = await prisma.topicSubject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TopicSubjectFindUniqueArgs>(args: SelectSubset<T, TopicSubjectFindUniqueArgs<ExtArgs>>): Prisma__TopicSubjectClient<$Result.GetResult<Prisma.$TopicSubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TopicSubject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TopicSubjectFindUniqueOrThrowArgs} args - Arguments to find a TopicSubject
     * @example
     * // Get one TopicSubject
     * const topicSubject = await prisma.topicSubject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TopicSubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, TopicSubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TopicSubjectClient<$Result.GetResult<Prisma.$TopicSubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TopicSubject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicSubjectFindFirstArgs} args - Arguments to find a TopicSubject
     * @example
     * // Get one TopicSubject
     * const topicSubject = await prisma.topicSubject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TopicSubjectFindFirstArgs>(args?: SelectSubset<T, TopicSubjectFindFirstArgs<ExtArgs>>): Prisma__TopicSubjectClient<$Result.GetResult<Prisma.$TopicSubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TopicSubject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicSubjectFindFirstOrThrowArgs} args - Arguments to find a TopicSubject
     * @example
     * // Get one TopicSubject
     * const topicSubject = await prisma.topicSubject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TopicSubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, TopicSubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__TopicSubjectClient<$Result.GetResult<Prisma.$TopicSubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TopicSubjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicSubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TopicSubjects
     * const topicSubjects = await prisma.topicSubject.findMany()
     * 
     * // Get first 10 TopicSubjects
     * const topicSubjects = await prisma.topicSubject.findMany({ take: 10 })
     * 
     * // Only select the `topicId`
     * const topicSubjectWithTopicIdOnly = await prisma.topicSubject.findMany({ select: { topicId: true } })
     * 
     */
    findMany<T extends TopicSubjectFindManyArgs>(args?: SelectSubset<T, TopicSubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TopicSubject.
     * @param {TopicSubjectCreateArgs} args - Arguments to create a TopicSubject.
     * @example
     * // Create one TopicSubject
     * const TopicSubject = await prisma.topicSubject.create({
     *   data: {
     *     // ... data to create a TopicSubject
     *   }
     * })
     * 
     */
    create<T extends TopicSubjectCreateArgs>(args: SelectSubset<T, TopicSubjectCreateArgs<ExtArgs>>): Prisma__TopicSubjectClient<$Result.GetResult<Prisma.$TopicSubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TopicSubjects.
     * @param {TopicSubjectCreateManyArgs} args - Arguments to create many TopicSubjects.
     * @example
     * // Create many TopicSubjects
     * const topicSubject = await prisma.topicSubject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TopicSubjectCreateManyArgs>(args?: SelectSubset<T, TopicSubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TopicSubjects and returns the data saved in the database.
     * @param {TopicSubjectCreateManyAndReturnArgs} args - Arguments to create many TopicSubjects.
     * @example
     * // Create many TopicSubjects
     * const topicSubject = await prisma.topicSubject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TopicSubjects and only return the `topicId`
     * const topicSubjectWithTopicIdOnly = await prisma.topicSubject.createManyAndReturn({
     *   select: { topicId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TopicSubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, TopicSubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicSubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TopicSubject.
     * @param {TopicSubjectDeleteArgs} args - Arguments to delete one TopicSubject.
     * @example
     * // Delete one TopicSubject
     * const TopicSubject = await prisma.topicSubject.delete({
     *   where: {
     *     // ... filter to delete one TopicSubject
     *   }
     * })
     * 
     */
    delete<T extends TopicSubjectDeleteArgs>(args: SelectSubset<T, TopicSubjectDeleteArgs<ExtArgs>>): Prisma__TopicSubjectClient<$Result.GetResult<Prisma.$TopicSubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TopicSubject.
     * @param {TopicSubjectUpdateArgs} args - Arguments to update one TopicSubject.
     * @example
     * // Update one TopicSubject
     * const topicSubject = await prisma.topicSubject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TopicSubjectUpdateArgs>(args: SelectSubset<T, TopicSubjectUpdateArgs<ExtArgs>>): Prisma__TopicSubjectClient<$Result.GetResult<Prisma.$TopicSubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TopicSubjects.
     * @param {TopicSubjectDeleteManyArgs} args - Arguments to filter TopicSubjects to delete.
     * @example
     * // Delete a few TopicSubjects
     * const { count } = await prisma.topicSubject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TopicSubjectDeleteManyArgs>(args?: SelectSubset<T, TopicSubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TopicSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicSubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TopicSubjects
     * const topicSubject = await prisma.topicSubject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TopicSubjectUpdateManyArgs>(args: SelectSubset<T, TopicSubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TopicSubjects and returns the data updated in the database.
     * @param {TopicSubjectUpdateManyAndReturnArgs} args - Arguments to update many TopicSubjects.
     * @example
     * // Update many TopicSubjects
     * const topicSubject = await prisma.topicSubject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TopicSubjects and only return the `topicId`
     * const topicSubjectWithTopicIdOnly = await prisma.topicSubject.updateManyAndReturn({
     *   select: { topicId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TopicSubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, TopicSubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicSubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TopicSubject.
     * @param {TopicSubjectUpsertArgs} args - Arguments to update or create a TopicSubject.
     * @example
     * // Update or create a TopicSubject
     * const topicSubject = await prisma.topicSubject.upsert({
     *   create: {
     *     // ... data to create a TopicSubject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TopicSubject we want to update
     *   }
     * })
     */
    upsert<T extends TopicSubjectUpsertArgs>(args: SelectSubset<T, TopicSubjectUpsertArgs<ExtArgs>>): Prisma__TopicSubjectClient<$Result.GetResult<Prisma.$TopicSubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TopicSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicSubjectCountArgs} args - Arguments to filter TopicSubjects to count.
     * @example
     * // Count the number of TopicSubjects
     * const count = await prisma.topicSubject.count({
     *   where: {
     *     // ... the filter for the TopicSubjects we want to count
     *   }
     * })
    **/
    count<T extends TopicSubjectCountArgs>(
      args?: Subset<T, TopicSubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopicSubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TopicSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicSubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TopicSubjectAggregateArgs>(args: Subset<T, TopicSubjectAggregateArgs>): Prisma.PrismaPromise<GetTopicSubjectAggregateType<T>>

    /**
     * Group by TopicSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicSubjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TopicSubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TopicSubjectGroupByArgs['orderBy'] }
        : { orderBy?: TopicSubjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TopicSubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopicSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TopicSubject model
   */
  readonly fields: TopicSubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TopicSubject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TopicSubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    topic<T extends TopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicDefaultArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TopicSubject model
   */
  interface TopicSubjectFieldRefs {
    readonly topicId: FieldRef<"TopicSubject", 'Int'>
    readonly subjectId: FieldRef<"TopicSubject", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TopicSubject findUnique
   */
  export type TopicSubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicSubject
     */
    select?: TopicSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicSubject
     */
    omit?: TopicSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TopicSubject to fetch.
     */
    where: TopicSubjectWhereUniqueInput
  }

  /**
   * TopicSubject findUniqueOrThrow
   */
  export type TopicSubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicSubject
     */
    select?: TopicSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicSubject
     */
    omit?: TopicSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TopicSubject to fetch.
     */
    where: TopicSubjectWhereUniqueInput
  }

  /**
   * TopicSubject findFirst
   */
  export type TopicSubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicSubject
     */
    select?: TopicSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicSubject
     */
    omit?: TopicSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TopicSubject to fetch.
     */
    where?: TopicSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopicSubjects to fetch.
     */
    orderBy?: TopicSubjectOrderByWithRelationInput | TopicSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TopicSubjects.
     */
    cursor?: TopicSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopicSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopicSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TopicSubjects.
     */
    distinct?: TopicSubjectScalarFieldEnum | TopicSubjectScalarFieldEnum[]
  }

  /**
   * TopicSubject findFirstOrThrow
   */
  export type TopicSubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicSubject
     */
    select?: TopicSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicSubject
     */
    omit?: TopicSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TopicSubject to fetch.
     */
    where?: TopicSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopicSubjects to fetch.
     */
    orderBy?: TopicSubjectOrderByWithRelationInput | TopicSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TopicSubjects.
     */
    cursor?: TopicSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopicSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopicSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TopicSubjects.
     */
    distinct?: TopicSubjectScalarFieldEnum | TopicSubjectScalarFieldEnum[]
  }

  /**
   * TopicSubject findMany
   */
  export type TopicSubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicSubject
     */
    select?: TopicSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicSubject
     */
    omit?: TopicSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TopicSubjects to fetch.
     */
    where?: TopicSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopicSubjects to fetch.
     */
    orderBy?: TopicSubjectOrderByWithRelationInput | TopicSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TopicSubjects.
     */
    cursor?: TopicSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopicSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopicSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TopicSubjects.
     */
    distinct?: TopicSubjectScalarFieldEnum | TopicSubjectScalarFieldEnum[]
  }

  /**
   * TopicSubject create
   */
  export type TopicSubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicSubject
     */
    select?: TopicSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicSubject
     */
    omit?: TopicSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicSubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a TopicSubject.
     */
    data: XOR<TopicSubjectCreateInput, TopicSubjectUncheckedCreateInput>
  }

  /**
   * TopicSubject createMany
   */
  export type TopicSubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TopicSubjects.
     */
    data: TopicSubjectCreateManyInput | TopicSubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TopicSubject createManyAndReturn
   */
  export type TopicSubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicSubject
     */
    select?: TopicSubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TopicSubject
     */
    omit?: TopicSubjectOmit<ExtArgs> | null
    /**
     * The data used to create many TopicSubjects.
     */
    data: TopicSubjectCreateManyInput | TopicSubjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicSubjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TopicSubject update
   */
  export type TopicSubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicSubject
     */
    select?: TopicSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicSubject
     */
    omit?: TopicSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicSubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a TopicSubject.
     */
    data: XOR<TopicSubjectUpdateInput, TopicSubjectUncheckedUpdateInput>
    /**
     * Choose, which TopicSubject to update.
     */
    where: TopicSubjectWhereUniqueInput
  }

  /**
   * TopicSubject updateMany
   */
  export type TopicSubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TopicSubjects.
     */
    data: XOR<TopicSubjectUpdateManyMutationInput, TopicSubjectUncheckedUpdateManyInput>
    /**
     * Filter which TopicSubjects to update
     */
    where?: TopicSubjectWhereInput
    /**
     * Limit how many TopicSubjects to update.
     */
    limit?: number
  }

  /**
   * TopicSubject updateManyAndReturn
   */
  export type TopicSubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicSubject
     */
    select?: TopicSubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TopicSubject
     */
    omit?: TopicSubjectOmit<ExtArgs> | null
    /**
     * The data used to update TopicSubjects.
     */
    data: XOR<TopicSubjectUpdateManyMutationInput, TopicSubjectUncheckedUpdateManyInput>
    /**
     * Filter which TopicSubjects to update
     */
    where?: TopicSubjectWhereInput
    /**
     * Limit how many TopicSubjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicSubjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TopicSubject upsert
   */
  export type TopicSubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicSubject
     */
    select?: TopicSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicSubject
     */
    omit?: TopicSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicSubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the TopicSubject to update in case it exists.
     */
    where: TopicSubjectWhereUniqueInput
    /**
     * In case the TopicSubject found by the `where` argument doesn't exist, create a new TopicSubject with this data.
     */
    create: XOR<TopicSubjectCreateInput, TopicSubjectUncheckedCreateInput>
    /**
     * In case the TopicSubject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TopicSubjectUpdateInput, TopicSubjectUncheckedUpdateInput>
  }

  /**
   * TopicSubject delete
   */
  export type TopicSubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicSubject
     */
    select?: TopicSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicSubject
     */
    omit?: TopicSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicSubjectInclude<ExtArgs> | null
    /**
     * Filter which TopicSubject to delete.
     */
    where: TopicSubjectWhereUniqueInput
  }

  /**
   * TopicSubject deleteMany
   */
  export type TopicSubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TopicSubjects to delete
     */
    where?: TopicSubjectWhereInput
    /**
     * Limit how many TopicSubjects to delete.
     */
    limit?: number
  }

  /**
   * TopicSubject without action
   */
  export type TopicSubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicSubject
     */
    select?: TopicSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicSubject
     */
    omit?: TopicSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicSubjectInclude<ExtArgs> | null
  }


  /**
   * Model Vestibular
   */

  export type AggregateVestibular = {
    _count: VestibularCountAggregateOutputType | null
    _avg: VestibularAvgAggregateOutputType | null
    _sum: VestibularSumAggregateOutputType | null
    _min: VestibularMinAggregateOutputType | null
    _max: VestibularMaxAggregateOutputType | null
  }

  export type VestibularAvgAggregateOutputType = {
    id: number | null
  }

  export type VestibularSumAggregateOutputType = {
    id: number | null
  }

  export type VestibularMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VestibularMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VestibularCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VestibularAvgAggregateInputType = {
    id?: true
  }

  export type VestibularSumAggregateInputType = {
    id?: true
  }

  export type VestibularMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VestibularMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VestibularCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VestibularAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vestibular to aggregate.
     */
    where?: VestibularWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vestibulars to fetch.
     */
    orderBy?: VestibularOrderByWithRelationInput | VestibularOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VestibularWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vestibulars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vestibulars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vestibulars
    **/
    _count?: true | VestibularCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VestibularAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VestibularSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VestibularMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VestibularMaxAggregateInputType
  }

  export type GetVestibularAggregateType<T extends VestibularAggregateArgs> = {
        [P in keyof T & keyof AggregateVestibular]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVestibular[P]>
      : GetScalarType<T[P], AggregateVestibular[P]>
  }




  export type VestibularGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VestibularWhereInput
    orderBy?: VestibularOrderByWithAggregationInput | VestibularOrderByWithAggregationInput[]
    by: VestibularScalarFieldEnum[] | VestibularScalarFieldEnum
    having?: VestibularScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VestibularCountAggregateInputType | true
    _avg?: VestibularAvgAggregateInputType
    _sum?: VestibularSumAggregateInputType
    _min?: VestibularMinAggregateInputType
    _max?: VestibularMaxAggregateInputType
  }

  export type VestibularGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: VestibularCountAggregateOutputType | null
    _avg: VestibularAvgAggregateOutputType | null
    _sum: VestibularSumAggregateOutputType | null
    _min: VestibularMinAggregateOutputType | null
    _max: VestibularMaxAggregateOutputType | null
  }

  type GetVestibularGroupByPayload<T extends VestibularGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VestibularGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VestibularGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VestibularGroupByOutputType[P]>
            : GetScalarType<T[P], VestibularGroupByOutputType[P]>
        }
      >
    >


  export type VestibularSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vestibularSubjects?: boolean | Vestibular$vestibularSubjectsArgs<ExtArgs>
    contents?: boolean | Vestibular$contentsArgs<ExtArgs>
    vestibularTopics?: boolean | Vestibular$vestibularTopicsArgs<ExtArgs>
    _count?: boolean | VestibularCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vestibular"]>

  export type VestibularSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vestibular"]>

  export type VestibularSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vestibular"]>

  export type VestibularSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VestibularOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["vestibular"]>
  export type VestibularInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vestibularSubjects?: boolean | Vestibular$vestibularSubjectsArgs<ExtArgs>
    contents?: boolean | Vestibular$contentsArgs<ExtArgs>
    vestibularTopics?: boolean | Vestibular$vestibularTopicsArgs<ExtArgs>
    _count?: boolean | VestibularCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VestibularIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VestibularIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VestibularPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vestibular"
    objects: {
      vestibularSubjects: Prisma.$VestibularSubjectPayload<ExtArgs>[]
      contents: Prisma.$VestibularContentPayload<ExtArgs>[]
      vestibularTopics: Prisma.$VestibularTopicPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vestibular"]>
    composites: {}
  }

  type VestibularGetPayload<S extends boolean | null | undefined | VestibularDefaultArgs> = $Result.GetResult<Prisma.$VestibularPayload, S>

  type VestibularCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VestibularFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VestibularCountAggregateInputType | true
    }

  export interface VestibularDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vestibular'], meta: { name: 'Vestibular' } }
    /**
     * Find zero or one Vestibular that matches the filter.
     * @param {VestibularFindUniqueArgs} args - Arguments to find a Vestibular
     * @example
     * // Get one Vestibular
     * const vestibular = await prisma.vestibular.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VestibularFindUniqueArgs>(args: SelectSubset<T, VestibularFindUniqueArgs<ExtArgs>>): Prisma__VestibularClient<$Result.GetResult<Prisma.$VestibularPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vestibular that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VestibularFindUniqueOrThrowArgs} args - Arguments to find a Vestibular
     * @example
     * // Get one Vestibular
     * const vestibular = await prisma.vestibular.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VestibularFindUniqueOrThrowArgs>(args: SelectSubset<T, VestibularFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VestibularClient<$Result.GetResult<Prisma.$VestibularPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vestibular that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestibularFindFirstArgs} args - Arguments to find a Vestibular
     * @example
     * // Get one Vestibular
     * const vestibular = await prisma.vestibular.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VestibularFindFirstArgs>(args?: SelectSubset<T, VestibularFindFirstArgs<ExtArgs>>): Prisma__VestibularClient<$Result.GetResult<Prisma.$VestibularPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vestibular that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestibularFindFirstOrThrowArgs} args - Arguments to find a Vestibular
     * @example
     * // Get one Vestibular
     * const vestibular = await prisma.vestibular.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VestibularFindFirstOrThrowArgs>(args?: SelectSubset<T, VestibularFindFirstOrThrowArgs<ExtArgs>>): Prisma__VestibularClient<$Result.GetResult<Prisma.$VestibularPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vestibulars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestibularFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vestibulars
     * const vestibulars = await prisma.vestibular.findMany()
     * 
     * // Get first 10 Vestibulars
     * const vestibulars = await prisma.vestibular.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vestibularWithIdOnly = await prisma.vestibular.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VestibularFindManyArgs>(args?: SelectSubset<T, VestibularFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VestibularPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vestibular.
     * @param {VestibularCreateArgs} args - Arguments to create a Vestibular.
     * @example
     * // Create one Vestibular
     * const Vestibular = await prisma.vestibular.create({
     *   data: {
     *     // ... data to create a Vestibular
     *   }
     * })
     * 
     */
    create<T extends VestibularCreateArgs>(args: SelectSubset<T, VestibularCreateArgs<ExtArgs>>): Prisma__VestibularClient<$Result.GetResult<Prisma.$VestibularPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vestibulars.
     * @param {VestibularCreateManyArgs} args - Arguments to create many Vestibulars.
     * @example
     * // Create many Vestibulars
     * const vestibular = await prisma.vestibular.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VestibularCreateManyArgs>(args?: SelectSubset<T, VestibularCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vestibulars and returns the data saved in the database.
     * @param {VestibularCreateManyAndReturnArgs} args - Arguments to create many Vestibulars.
     * @example
     * // Create many Vestibulars
     * const vestibular = await prisma.vestibular.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vestibulars and only return the `id`
     * const vestibularWithIdOnly = await prisma.vestibular.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VestibularCreateManyAndReturnArgs>(args?: SelectSubset<T, VestibularCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VestibularPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vestibular.
     * @param {VestibularDeleteArgs} args - Arguments to delete one Vestibular.
     * @example
     * // Delete one Vestibular
     * const Vestibular = await prisma.vestibular.delete({
     *   where: {
     *     // ... filter to delete one Vestibular
     *   }
     * })
     * 
     */
    delete<T extends VestibularDeleteArgs>(args: SelectSubset<T, VestibularDeleteArgs<ExtArgs>>): Prisma__VestibularClient<$Result.GetResult<Prisma.$VestibularPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vestibular.
     * @param {VestibularUpdateArgs} args - Arguments to update one Vestibular.
     * @example
     * // Update one Vestibular
     * const vestibular = await prisma.vestibular.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VestibularUpdateArgs>(args: SelectSubset<T, VestibularUpdateArgs<ExtArgs>>): Prisma__VestibularClient<$Result.GetResult<Prisma.$VestibularPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vestibulars.
     * @param {VestibularDeleteManyArgs} args - Arguments to filter Vestibulars to delete.
     * @example
     * // Delete a few Vestibulars
     * const { count } = await prisma.vestibular.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VestibularDeleteManyArgs>(args?: SelectSubset<T, VestibularDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vestibulars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestibularUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vestibulars
     * const vestibular = await prisma.vestibular.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VestibularUpdateManyArgs>(args: SelectSubset<T, VestibularUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vestibulars and returns the data updated in the database.
     * @param {VestibularUpdateManyAndReturnArgs} args - Arguments to update many Vestibulars.
     * @example
     * // Update many Vestibulars
     * const vestibular = await prisma.vestibular.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vestibulars and only return the `id`
     * const vestibularWithIdOnly = await prisma.vestibular.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VestibularUpdateManyAndReturnArgs>(args: SelectSubset<T, VestibularUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VestibularPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vestibular.
     * @param {VestibularUpsertArgs} args - Arguments to update or create a Vestibular.
     * @example
     * // Update or create a Vestibular
     * const vestibular = await prisma.vestibular.upsert({
     *   create: {
     *     // ... data to create a Vestibular
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vestibular we want to update
     *   }
     * })
     */
    upsert<T extends VestibularUpsertArgs>(args: SelectSubset<T, VestibularUpsertArgs<ExtArgs>>): Prisma__VestibularClient<$Result.GetResult<Prisma.$VestibularPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vestibulars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestibularCountArgs} args - Arguments to filter Vestibulars to count.
     * @example
     * // Count the number of Vestibulars
     * const count = await prisma.vestibular.count({
     *   where: {
     *     // ... the filter for the Vestibulars we want to count
     *   }
     * })
    **/
    count<T extends VestibularCountArgs>(
      args?: Subset<T, VestibularCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VestibularCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vestibular.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestibularAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VestibularAggregateArgs>(args: Subset<T, VestibularAggregateArgs>): Prisma.PrismaPromise<GetVestibularAggregateType<T>>

    /**
     * Group by Vestibular.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestibularGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VestibularGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VestibularGroupByArgs['orderBy'] }
        : { orderBy?: VestibularGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VestibularGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVestibularGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vestibular model
   */
  readonly fields: VestibularFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vestibular.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VestibularClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vestibularSubjects<T extends Vestibular$vestibularSubjectsArgs<ExtArgs> = {}>(args?: Subset<T, Vestibular$vestibularSubjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VestibularSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contents<T extends Vestibular$contentsArgs<ExtArgs> = {}>(args?: Subset<T, Vestibular$contentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VestibularContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vestibularTopics<T extends Vestibular$vestibularTopicsArgs<ExtArgs> = {}>(args?: Subset<T, Vestibular$vestibularTopicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VestibularTopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vestibular model
   */
  interface VestibularFieldRefs {
    readonly id: FieldRef<"Vestibular", 'Int'>
    readonly name: FieldRef<"Vestibular", 'String'>
    readonly createdAt: FieldRef<"Vestibular", 'DateTime'>
    readonly updatedAt: FieldRef<"Vestibular", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vestibular findUnique
   */
  export type VestibularFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vestibular
     */
    select?: VestibularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vestibular
     */
    omit?: VestibularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularInclude<ExtArgs> | null
    /**
     * Filter, which Vestibular to fetch.
     */
    where: VestibularWhereUniqueInput
  }

  /**
   * Vestibular findUniqueOrThrow
   */
  export type VestibularFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vestibular
     */
    select?: VestibularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vestibular
     */
    omit?: VestibularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularInclude<ExtArgs> | null
    /**
     * Filter, which Vestibular to fetch.
     */
    where: VestibularWhereUniqueInput
  }

  /**
   * Vestibular findFirst
   */
  export type VestibularFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vestibular
     */
    select?: VestibularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vestibular
     */
    omit?: VestibularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularInclude<ExtArgs> | null
    /**
     * Filter, which Vestibular to fetch.
     */
    where?: VestibularWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vestibulars to fetch.
     */
    orderBy?: VestibularOrderByWithRelationInput | VestibularOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vestibulars.
     */
    cursor?: VestibularWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vestibulars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vestibulars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vestibulars.
     */
    distinct?: VestibularScalarFieldEnum | VestibularScalarFieldEnum[]
  }

  /**
   * Vestibular findFirstOrThrow
   */
  export type VestibularFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vestibular
     */
    select?: VestibularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vestibular
     */
    omit?: VestibularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularInclude<ExtArgs> | null
    /**
     * Filter, which Vestibular to fetch.
     */
    where?: VestibularWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vestibulars to fetch.
     */
    orderBy?: VestibularOrderByWithRelationInput | VestibularOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vestibulars.
     */
    cursor?: VestibularWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vestibulars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vestibulars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vestibulars.
     */
    distinct?: VestibularScalarFieldEnum | VestibularScalarFieldEnum[]
  }

  /**
   * Vestibular findMany
   */
  export type VestibularFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vestibular
     */
    select?: VestibularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vestibular
     */
    omit?: VestibularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularInclude<ExtArgs> | null
    /**
     * Filter, which Vestibulars to fetch.
     */
    where?: VestibularWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vestibulars to fetch.
     */
    orderBy?: VestibularOrderByWithRelationInput | VestibularOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vestibulars.
     */
    cursor?: VestibularWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vestibulars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vestibulars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vestibulars.
     */
    distinct?: VestibularScalarFieldEnum | VestibularScalarFieldEnum[]
  }

  /**
   * Vestibular create
   */
  export type VestibularCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vestibular
     */
    select?: VestibularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vestibular
     */
    omit?: VestibularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularInclude<ExtArgs> | null
    /**
     * The data needed to create a Vestibular.
     */
    data: XOR<VestibularCreateInput, VestibularUncheckedCreateInput>
  }

  /**
   * Vestibular createMany
   */
  export type VestibularCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vestibulars.
     */
    data: VestibularCreateManyInput | VestibularCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vestibular createManyAndReturn
   */
  export type VestibularCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vestibular
     */
    select?: VestibularSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vestibular
     */
    omit?: VestibularOmit<ExtArgs> | null
    /**
     * The data used to create many Vestibulars.
     */
    data: VestibularCreateManyInput | VestibularCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vestibular update
   */
  export type VestibularUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vestibular
     */
    select?: VestibularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vestibular
     */
    omit?: VestibularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularInclude<ExtArgs> | null
    /**
     * The data needed to update a Vestibular.
     */
    data: XOR<VestibularUpdateInput, VestibularUncheckedUpdateInput>
    /**
     * Choose, which Vestibular to update.
     */
    where: VestibularWhereUniqueInput
  }

  /**
   * Vestibular updateMany
   */
  export type VestibularUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vestibulars.
     */
    data: XOR<VestibularUpdateManyMutationInput, VestibularUncheckedUpdateManyInput>
    /**
     * Filter which Vestibulars to update
     */
    where?: VestibularWhereInput
    /**
     * Limit how many Vestibulars to update.
     */
    limit?: number
  }

  /**
   * Vestibular updateManyAndReturn
   */
  export type VestibularUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vestibular
     */
    select?: VestibularSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vestibular
     */
    omit?: VestibularOmit<ExtArgs> | null
    /**
     * The data used to update Vestibulars.
     */
    data: XOR<VestibularUpdateManyMutationInput, VestibularUncheckedUpdateManyInput>
    /**
     * Filter which Vestibulars to update
     */
    where?: VestibularWhereInput
    /**
     * Limit how many Vestibulars to update.
     */
    limit?: number
  }

  /**
   * Vestibular upsert
   */
  export type VestibularUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vestibular
     */
    select?: VestibularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vestibular
     */
    omit?: VestibularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularInclude<ExtArgs> | null
    /**
     * The filter to search for the Vestibular to update in case it exists.
     */
    where: VestibularWhereUniqueInput
    /**
     * In case the Vestibular found by the `where` argument doesn't exist, create a new Vestibular with this data.
     */
    create: XOR<VestibularCreateInput, VestibularUncheckedCreateInput>
    /**
     * In case the Vestibular was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VestibularUpdateInput, VestibularUncheckedUpdateInput>
  }

  /**
   * Vestibular delete
   */
  export type VestibularDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vestibular
     */
    select?: VestibularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vestibular
     */
    omit?: VestibularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularInclude<ExtArgs> | null
    /**
     * Filter which Vestibular to delete.
     */
    where: VestibularWhereUniqueInput
  }

  /**
   * Vestibular deleteMany
   */
  export type VestibularDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vestibulars to delete
     */
    where?: VestibularWhereInput
    /**
     * Limit how many Vestibulars to delete.
     */
    limit?: number
  }

  /**
   * Vestibular.vestibularSubjects
   */
  export type Vestibular$vestibularSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularSubject
     */
    select?: VestibularSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularSubject
     */
    omit?: VestibularSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularSubjectInclude<ExtArgs> | null
    where?: VestibularSubjectWhereInput
    orderBy?: VestibularSubjectOrderByWithRelationInput | VestibularSubjectOrderByWithRelationInput[]
    cursor?: VestibularSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VestibularSubjectScalarFieldEnum | VestibularSubjectScalarFieldEnum[]
  }

  /**
   * Vestibular.contents
   */
  export type Vestibular$contentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularContent
     */
    select?: VestibularContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularContent
     */
    omit?: VestibularContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularContentInclude<ExtArgs> | null
    where?: VestibularContentWhereInput
    orderBy?: VestibularContentOrderByWithRelationInput | VestibularContentOrderByWithRelationInput[]
    cursor?: VestibularContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VestibularContentScalarFieldEnum | VestibularContentScalarFieldEnum[]
  }

  /**
   * Vestibular.vestibularTopics
   */
  export type Vestibular$vestibularTopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularTopic
     */
    select?: VestibularTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularTopic
     */
    omit?: VestibularTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularTopicInclude<ExtArgs> | null
    where?: VestibularTopicWhereInput
    orderBy?: VestibularTopicOrderByWithRelationInput | VestibularTopicOrderByWithRelationInput[]
    cursor?: VestibularTopicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VestibularTopicScalarFieldEnum | VestibularTopicScalarFieldEnum[]
  }

  /**
   * Vestibular without action
   */
  export type VestibularDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vestibular
     */
    select?: VestibularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vestibular
     */
    omit?: VestibularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularInclude<ExtArgs> | null
  }


  /**
   * Model VestibularSubject
   */

  export type AggregateVestibularSubject = {
    _count: VestibularSubjectCountAggregateOutputType | null
    _avg: VestibularSubjectAvgAggregateOutputType | null
    _sum: VestibularSubjectSumAggregateOutputType | null
    _min: VestibularSubjectMinAggregateOutputType | null
    _max: VestibularSubjectMaxAggregateOutputType | null
  }

  export type VestibularSubjectAvgAggregateOutputType = {
    vestibularId: number | null
    subjectId: number | null
  }

  export type VestibularSubjectSumAggregateOutputType = {
    vestibularId: number | null
    subjectId: number | null
  }

  export type VestibularSubjectMinAggregateOutputType = {
    vestibularId: number | null
    subjectId: number | null
  }

  export type VestibularSubjectMaxAggregateOutputType = {
    vestibularId: number | null
    subjectId: number | null
  }

  export type VestibularSubjectCountAggregateOutputType = {
    vestibularId: number
    subjectId: number
    _all: number
  }


  export type VestibularSubjectAvgAggregateInputType = {
    vestibularId?: true
    subjectId?: true
  }

  export type VestibularSubjectSumAggregateInputType = {
    vestibularId?: true
    subjectId?: true
  }

  export type VestibularSubjectMinAggregateInputType = {
    vestibularId?: true
    subjectId?: true
  }

  export type VestibularSubjectMaxAggregateInputType = {
    vestibularId?: true
    subjectId?: true
  }

  export type VestibularSubjectCountAggregateInputType = {
    vestibularId?: true
    subjectId?: true
    _all?: true
  }

  export type VestibularSubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VestibularSubject to aggregate.
     */
    where?: VestibularSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VestibularSubjects to fetch.
     */
    orderBy?: VestibularSubjectOrderByWithRelationInput | VestibularSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VestibularSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VestibularSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VestibularSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VestibularSubjects
    **/
    _count?: true | VestibularSubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VestibularSubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VestibularSubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VestibularSubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VestibularSubjectMaxAggregateInputType
  }

  export type GetVestibularSubjectAggregateType<T extends VestibularSubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateVestibularSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVestibularSubject[P]>
      : GetScalarType<T[P], AggregateVestibularSubject[P]>
  }




  export type VestibularSubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VestibularSubjectWhereInput
    orderBy?: VestibularSubjectOrderByWithAggregationInput | VestibularSubjectOrderByWithAggregationInput[]
    by: VestibularSubjectScalarFieldEnum[] | VestibularSubjectScalarFieldEnum
    having?: VestibularSubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VestibularSubjectCountAggregateInputType | true
    _avg?: VestibularSubjectAvgAggregateInputType
    _sum?: VestibularSubjectSumAggregateInputType
    _min?: VestibularSubjectMinAggregateInputType
    _max?: VestibularSubjectMaxAggregateInputType
  }

  export type VestibularSubjectGroupByOutputType = {
    vestibularId: number
    subjectId: number
    _count: VestibularSubjectCountAggregateOutputType | null
    _avg: VestibularSubjectAvgAggregateOutputType | null
    _sum: VestibularSubjectSumAggregateOutputType | null
    _min: VestibularSubjectMinAggregateOutputType | null
    _max: VestibularSubjectMaxAggregateOutputType | null
  }

  type GetVestibularSubjectGroupByPayload<T extends VestibularSubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VestibularSubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VestibularSubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VestibularSubjectGroupByOutputType[P]>
            : GetScalarType<T[P], VestibularSubjectGroupByOutputType[P]>
        }
      >
    >


  export type VestibularSubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vestibularId?: boolean
    subjectId?: boolean
    vestibular?: boolean | VestibularDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vestibularSubject"]>

  export type VestibularSubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vestibularId?: boolean
    subjectId?: boolean
    vestibular?: boolean | VestibularDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vestibularSubject"]>

  export type VestibularSubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vestibularId?: boolean
    subjectId?: boolean
    vestibular?: boolean | VestibularDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vestibularSubject"]>

  export type VestibularSubjectSelectScalar = {
    vestibularId?: boolean
    subjectId?: boolean
  }

  export type VestibularSubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"vestibularId" | "subjectId", ExtArgs["result"]["vestibularSubject"]>
  export type VestibularSubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vestibular?: boolean | VestibularDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type VestibularSubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vestibular?: boolean | VestibularDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type VestibularSubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vestibular?: boolean | VestibularDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }

  export type $VestibularSubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VestibularSubject"
    objects: {
      vestibular: Prisma.$VestibularPayload<ExtArgs>
      subject: Prisma.$SubjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      vestibularId: number
      subjectId: number
    }, ExtArgs["result"]["vestibularSubject"]>
    composites: {}
  }

  type VestibularSubjectGetPayload<S extends boolean | null | undefined | VestibularSubjectDefaultArgs> = $Result.GetResult<Prisma.$VestibularSubjectPayload, S>

  type VestibularSubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VestibularSubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VestibularSubjectCountAggregateInputType | true
    }

  export interface VestibularSubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VestibularSubject'], meta: { name: 'VestibularSubject' } }
    /**
     * Find zero or one VestibularSubject that matches the filter.
     * @param {VestibularSubjectFindUniqueArgs} args - Arguments to find a VestibularSubject
     * @example
     * // Get one VestibularSubject
     * const vestibularSubject = await prisma.vestibularSubject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VestibularSubjectFindUniqueArgs>(args: SelectSubset<T, VestibularSubjectFindUniqueArgs<ExtArgs>>): Prisma__VestibularSubjectClient<$Result.GetResult<Prisma.$VestibularSubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VestibularSubject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VestibularSubjectFindUniqueOrThrowArgs} args - Arguments to find a VestibularSubject
     * @example
     * // Get one VestibularSubject
     * const vestibularSubject = await prisma.vestibularSubject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VestibularSubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, VestibularSubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VestibularSubjectClient<$Result.GetResult<Prisma.$VestibularSubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VestibularSubject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestibularSubjectFindFirstArgs} args - Arguments to find a VestibularSubject
     * @example
     * // Get one VestibularSubject
     * const vestibularSubject = await prisma.vestibularSubject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VestibularSubjectFindFirstArgs>(args?: SelectSubset<T, VestibularSubjectFindFirstArgs<ExtArgs>>): Prisma__VestibularSubjectClient<$Result.GetResult<Prisma.$VestibularSubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VestibularSubject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestibularSubjectFindFirstOrThrowArgs} args - Arguments to find a VestibularSubject
     * @example
     * // Get one VestibularSubject
     * const vestibularSubject = await prisma.vestibularSubject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VestibularSubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, VestibularSubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__VestibularSubjectClient<$Result.GetResult<Prisma.$VestibularSubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VestibularSubjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestibularSubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VestibularSubjects
     * const vestibularSubjects = await prisma.vestibularSubject.findMany()
     * 
     * // Get first 10 VestibularSubjects
     * const vestibularSubjects = await prisma.vestibularSubject.findMany({ take: 10 })
     * 
     * // Only select the `vestibularId`
     * const vestibularSubjectWithVestibularIdOnly = await prisma.vestibularSubject.findMany({ select: { vestibularId: true } })
     * 
     */
    findMany<T extends VestibularSubjectFindManyArgs>(args?: SelectSubset<T, VestibularSubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VestibularSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VestibularSubject.
     * @param {VestibularSubjectCreateArgs} args - Arguments to create a VestibularSubject.
     * @example
     * // Create one VestibularSubject
     * const VestibularSubject = await prisma.vestibularSubject.create({
     *   data: {
     *     // ... data to create a VestibularSubject
     *   }
     * })
     * 
     */
    create<T extends VestibularSubjectCreateArgs>(args: SelectSubset<T, VestibularSubjectCreateArgs<ExtArgs>>): Prisma__VestibularSubjectClient<$Result.GetResult<Prisma.$VestibularSubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VestibularSubjects.
     * @param {VestibularSubjectCreateManyArgs} args - Arguments to create many VestibularSubjects.
     * @example
     * // Create many VestibularSubjects
     * const vestibularSubject = await prisma.vestibularSubject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VestibularSubjectCreateManyArgs>(args?: SelectSubset<T, VestibularSubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VestibularSubjects and returns the data saved in the database.
     * @param {VestibularSubjectCreateManyAndReturnArgs} args - Arguments to create many VestibularSubjects.
     * @example
     * // Create many VestibularSubjects
     * const vestibularSubject = await prisma.vestibularSubject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VestibularSubjects and only return the `vestibularId`
     * const vestibularSubjectWithVestibularIdOnly = await prisma.vestibularSubject.createManyAndReturn({
     *   select: { vestibularId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VestibularSubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, VestibularSubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VestibularSubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VestibularSubject.
     * @param {VestibularSubjectDeleteArgs} args - Arguments to delete one VestibularSubject.
     * @example
     * // Delete one VestibularSubject
     * const VestibularSubject = await prisma.vestibularSubject.delete({
     *   where: {
     *     // ... filter to delete one VestibularSubject
     *   }
     * })
     * 
     */
    delete<T extends VestibularSubjectDeleteArgs>(args: SelectSubset<T, VestibularSubjectDeleteArgs<ExtArgs>>): Prisma__VestibularSubjectClient<$Result.GetResult<Prisma.$VestibularSubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VestibularSubject.
     * @param {VestibularSubjectUpdateArgs} args - Arguments to update one VestibularSubject.
     * @example
     * // Update one VestibularSubject
     * const vestibularSubject = await prisma.vestibularSubject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VestibularSubjectUpdateArgs>(args: SelectSubset<T, VestibularSubjectUpdateArgs<ExtArgs>>): Prisma__VestibularSubjectClient<$Result.GetResult<Prisma.$VestibularSubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VestibularSubjects.
     * @param {VestibularSubjectDeleteManyArgs} args - Arguments to filter VestibularSubjects to delete.
     * @example
     * // Delete a few VestibularSubjects
     * const { count } = await prisma.vestibularSubject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VestibularSubjectDeleteManyArgs>(args?: SelectSubset<T, VestibularSubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VestibularSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestibularSubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VestibularSubjects
     * const vestibularSubject = await prisma.vestibularSubject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VestibularSubjectUpdateManyArgs>(args: SelectSubset<T, VestibularSubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VestibularSubjects and returns the data updated in the database.
     * @param {VestibularSubjectUpdateManyAndReturnArgs} args - Arguments to update many VestibularSubjects.
     * @example
     * // Update many VestibularSubjects
     * const vestibularSubject = await prisma.vestibularSubject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VestibularSubjects and only return the `vestibularId`
     * const vestibularSubjectWithVestibularIdOnly = await prisma.vestibularSubject.updateManyAndReturn({
     *   select: { vestibularId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VestibularSubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, VestibularSubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VestibularSubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VestibularSubject.
     * @param {VestibularSubjectUpsertArgs} args - Arguments to update or create a VestibularSubject.
     * @example
     * // Update or create a VestibularSubject
     * const vestibularSubject = await prisma.vestibularSubject.upsert({
     *   create: {
     *     // ... data to create a VestibularSubject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VestibularSubject we want to update
     *   }
     * })
     */
    upsert<T extends VestibularSubjectUpsertArgs>(args: SelectSubset<T, VestibularSubjectUpsertArgs<ExtArgs>>): Prisma__VestibularSubjectClient<$Result.GetResult<Prisma.$VestibularSubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VestibularSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestibularSubjectCountArgs} args - Arguments to filter VestibularSubjects to count.
     * @example
     * // Count the number of VestibularSubjects
     * const count = await prisma.vestibularSubject.count({
     *   where: {
     *     // ... the filter for the VestibularSubjects we want to count
     *   }
     * })
    **/
    count<T extends VestibularSubjectCountArgs>(
      args?: Subset<T, VestibularSubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VestibularSubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VestibularSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestibularSubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VestibularSubjectAggregateArgs>(args: Subset<T, VestibularSubjectAggregateArgs>): Prisma.PrismaPromise<GetVestibularSubjectAggregateType<T>>

    /**
     * Group by VestibularSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestibularSubjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VestibularSubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VestibularSubjectGroupByArgs['orderBy'] }
        : { orderBy?: VestibularSubjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VestibularSubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVestibularSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VestibularSubject model
   */
  readonly fields: VestibularSubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VestibularSubject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VestibularSubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vestibular<T extends VestibularDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VestibularDefaultArgs<ExtArgs>>): Prisma__VestibularClient<$Result.GetResult<Prisma.$VestibularPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VestibularSubject model
   */
  interface VestibularSubjectFieldRefs {
    readonly vestibularId: FieldRef<"VestibularSubject", 'Int'>
    readonly subjectId: FieldRef<"VestibularSubject", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * VestibularSubject findUnique
   */
  export type VestibularSubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularSubject
     */
    select?: VestibularSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularSubject
     */
    omit?: VestibularSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularSubjectInclude<ExtArgs> | null
    /**
     * Filter, which VestibularSubject to fetch.
     */
    where: VestibularSubjectWhereUniqueInput
  }

  /**
   * VestibularSubject findUniqueOrThrow
   */
  export type VestibularSubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularSubject
     */
    select?: VestibularSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularSubject
     */
    omit?: VestibularSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularSubjectInclude<ExtArgs> | null
    /**
     * Filter, which VestibularSubject to fetch.
     */
    where: VestibularSubjectWhereUniqueInput
  }

  /**
   * VestibularSubject findFirst
   */
  export type VestibularSubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularSubject
     */
    select?: VestibularSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularSubject
     */
    omit?: VestibularSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularSubjectInclude<ExtArgs> | null
    /**
     * Filter, which VestibularSubject to fetch.
     */
    where?: VestibularSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VestibularSubjects to fetch.
     */
    orderBy?: VestibularSubjectOrderByWithRelationInput | VestibularSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VestibularSubjects.
     */
    cursor?: VestibularSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VestibularSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VestibularSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VestibularSubjects.
     */
    distinct?: VestibularSubjectScalarFieldEnum | VestibularSubjectScalarFieldEnum[]
  }

  /**
   * VestibularSubject findFirstOrThrow
   */
  export type VestibularSubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularSubject
     */
    select?: VestibularSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularSubject
     */
    omit?: VestibularSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularSubjectInclude<ExtArgs> | null
    /**
     * Filter, which VestibularSubject to fetch.
     */
    where?: VestibularSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VestibularSubjects to fetch.
     */
    orderBy?: VestibularSubjectOrderByWithRelationInput | VestibularSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VestibularSubjects.
     */
    cursor?: VestibularSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VestibularSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VestibularSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VestibularSubjects.
     */
    distinct?: VestibularSubjectScalarFieldEnum | VestibularSubjectScalarFieldEnum[]
  }

  /**
   * VestibularSubject findMany
   */
  export type VestibularSubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularSubject
     */
    select?: VestibularSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularSubject
     */
    omit?: VestibularSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularSubjectInclude<ExtArgs> | null
    /**
     * Filter, which VestibularSubjects to fetch.
     */
    where?: VestibularSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VestibularSubjects to fetch.
     */
    orderBy?: VestibularSubjectOrderByWithRelationInput | VestibularSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VestibularSubjects.
     */
    cursor?: VestibularSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VestibularSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VestibularSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VestibularSubjects.
     */
    distinct?: VestibularSubjectScalarFieldEnum | VestibularSubjectScalarFieldEnum[]
  }

  /**
   * VestibularSubject create
   */
  export type VestibularSubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularSubject
     */
    select?: VestibularSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularSubject
     */
    omit?: VestibularSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularSubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a VestibularSubject.
     */
    data: XOR<VestibularSubjectCreateInput, VestibularSubjectUncheckedCreateInput>
  }

  /**
   * VestibularSubject createMany
   */
  export type VestibularSubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VestibularSubjects.
     */
    data: VestibularSubjectCreateManyInput | VestibularSubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VestibularSubject createManyAndReturn
   */
  export type VestibularSubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularSubject
     */
    select?: VestibularSubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularSubject
     */
    omit?: VestibularSubjectOmit<ExtArgs> | null
    /**
     * The data used to create many VestibularSubjects.
     */
    data: VestibularSubjectCreateManyInput | VestibularSubjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularSubjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VestibularSubject update
   */
  export type VestibularSubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularSubject
     */
    select?: VestibularSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularSubject
     */
    omit?: VestibularSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularSubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a VestibularSubject.
     */
    data: XOR<VestibularSubjectUpdateInput, VestibularSubjectUncheckedUpdateInput>
    /**
     * Choose, which VestibularSubject to update.
     */
    where: VestibularSubjectWhereUniqueInput
  }

  /**
   * VestibularSubject updateMany
   */
  export type VestibularSubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VestibularSubjects.
     */
    data: XOR<VestibularSubjectUpdateManyMutationInput, VestibularSubjectUncheckedUpdateManyInput>
    /**
     * Filter which VestibularSubjects to update
     */
    where?: VestibularSubjectWhereInput
    /**
     * Limit how many VestibularSubjects to update.
     */
    limit?: number
  }

  /**
   * VestibularSubject updateManyAndReturn
   */
  export type VestibularSubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularSubject
     */
    select?: VestibularSubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularSubject
     */
    omit?: VestibularSubjectOmit<ExtArgs> | null
    /**
     * The data used to update VestibularSubjects.
     */
    data: XOR<VestibularSubjectUpdateManyMutationInput, VestibularSubjectUncheckedUpdateManyInput>
    /**
     * Filter which VestibularSubjects to update
     */
    where?: VestibularSubjectWhereInput
    /**
     * Limit how many VestibularSubjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularSubjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VestibularSubject upsert
   */
  export type VestibularSubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularSubject
     */
    select?: VestibularSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularSubject
     */
    omit?: VestibularSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularSubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the VestibularSubject to update in case it exists.
     */
    where: VestibularSubjectWhereUniqueInput
    /**
     * In case the VestibularSubject found by the `where` argument doesn't exist, create a new VestibularSubject with this data.
     */
    create: XOR<VestibularSubjectCreateInput, VestibularSubjectUncheckedCreateInput>
    /**
     * In case the VestibularSubject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VestibularSubjectUpdateInput, VestibularSubjectUncheckedUpdateInput>
  }

  /**
   * VestibularSubject delete
   */
  export type VestibularSubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularSubject
     */
    select?: VestibularSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularSubject
     */
    omit?: VestibularSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularSubjectInclude<ExtArgs> | null
    /**
     * Filter which VestibularSubject to delete.
     */
    where: VestibularSubjectWhereUniqueInput
  }

  /**
   * VestibularSubject deleteMany
   */
  export type VestibularSubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VestibularSubjects to delete
     */
    where?: VestibularSubjectWhereInput
    /**
     * Limit how many VestibularSubjects to delete.
     */
    limit?: number
  }

  /**
   * VestibularSubject without action
   */
  export type VestibularSubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularSubject
     */
    select?: VestibularSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularSubject
     */
    omit?: VestibularSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularSubjectInclude<ExtArgs> | null
  }


  /**
   * Model VestibularContent
   */

  export type AggregateVestibularContent = {
    _count: VestibularContentCountAggregateOutputType | null
    _avg: VestibularContentAvgAggregateOutputType | null
    _sum: VestibularContentSumAggregateOutputType | null
    _min: VestibularContentMinAggregateOutputType | null
    _max: VestibularContentMaxAggregateOutputType | null
  }

  export type VestibularContentAvgAggregateOutputType = {
    id: number | null
    vestibularId: number | null
    originalContentId: number | null
  }

  export type VestibularContentSumAggregateOutputType = {
    id: number | null
    vestibularId: number | null
    originalContentId: number | null
  }

  export type VestibularContentMinAggregateOutputType = {
    id: number | null
    vestibularId: number | null
    title: string | null
    type: string | null
    link: string | null
    pdfUrl: string | null
    isShared: boolean | null
    originalContentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VestibularContentMaxAggregateOutputType = {
    id: number | null
    vestibularId: number | null
    title: string | null
    type: string | null
    link: string | null
    pdfUrl: string | null
    isShared: boolean | null
    originalContentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VestibularContentCountAggregateOutputType = {
    id: number
    vestibularId: number
    title: number
    type: number
    link: number
    pdfUrl: number
    isShared: number
    originalContentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VestibularContentAvgAggregateInputType = {
    id?: true
    vestibularId?: true
    originalContentId?: true
  }

  export type VestibularContentSumAggregateInputType = {
    id?: true
    vestibularId?: true
    originalContentId?: true
  }

  export type VestibularContentMinAggregateInputType = {
    id?: true
    vestibularId?: true
    title?: true
    type?: true
    link?: true
    pdfUrl?: true
    isShared?: true
    originalContentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VestibularContentMaxAggregateInputType = {
    id?: true
    vestibularId?: true
    title?: true
    type?: true
    link?: true
    pdfUrl?: true
    isShared?: true
    originalContentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VestibularContentCountAggregateInputType = {
    id?: true
    vestibularId?: true
    title?: true
    type?: true
    link?: true
    pdfUrl?: true
    isShared?: true
    originalContentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VestibularContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VestibularContent to aggregate.
     */
    where?: VestibularContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VestibularContents to fetch.
     */
    orderBy?: VestibularContentOrderByWithRelationInput | VestibularContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VestibularContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VestibularContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VestibularContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VestibularContents
    **/
    _count?: true | VestibularContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VestibularContentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VestibularContentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VestibularContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VestibularContentMaxAggregateInputType
  }

  export type GetVestibularContentAggregateType<T extends VestibularContentAggregateArgs> = {
        [P in keyof T & keyof AggregateVestibularContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVestibularContent[P]>
      : GetScalarType<T[P], AggregateVestibularContent[P]>
  }




  export type VestibularContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VestibularContentWhereInput
    orderBy?: VestibularContentOrderByWithAggregationInput | VestibularContentOrderByWithAggregationInput[]
    by: VestibularContentScalarFieldEnum[] | VestibularContentScalarFieldEnum
    having?: VestibularContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VestibularContentCountAggregateInputType | true
    _avg?: VestibularContentAvgAggregateInputType
    _sum?: VestibularContentSumAggregateInputType
    _min?: VestibularContentMinAggregateInputType
    _max?: VestibularContentMaxAggregateInputType
  }

  export type VestibularContentGroupByOutputType = {
    id: number
    vestibularId: number
    title: string
    type: string | null
    link: string | null
    pdfUrl: string | null
    isShared: boolean
    originalContentId: number | null
    createdAt: Date
    updatedAt: Date
    _count: VestibularContentCountAggregateOutputType | null
    _avg: VestibularContentAvgAggregateOutputType | null
    _sum: VestibularContentSumAggregateOutputType | null
    _min: VestibularContentMinAggregateOutputType | null
    _max: VestibularContentMaxAggregateOutputType | null
  }

  type GetVestibularContentGroupByPayload<T extends VestibularContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VestibularContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VestibularContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VestibularContentGroupByOutputType[P]>
            : GetScalarType<T[P], VestibularContentGroupByOutputType[P]>
        }
      >
    >


  export type VestibularContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vestibularId?: boolean
    title?: boolean
    type?: boolean
    link?: boolean
    pdfUrl?: boolean
    isShared?: boolean
    originalContentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vestibular?: boolean | VestibularDefaultArgs<ExtArgs>
    originalContent?: boolean | VestibularContent$originalContentArgs<ExtArgs>
  }, ExtArgs["result"]["vestibularContent"]>

  export type VestibularContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vestibularId?: boolean
    title?: boolean
    type?: boolean
    link?: boolean
    pdfUrl?: boolean
    isShared?: boolean
    originalContentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vestibular?: boolean | VestibularDefaultArgs<ExtArgs>
    originalContent?: boolean | VestibularContent$originalContentArgs<ExtArgs>
  }, ExtArgs["result"]["vestibularContent"]>

  export type VestibularContentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vestibularId?: boolean
    title?: boolean
    type?: boolean
    link?: boolean
    pdfUrl?: boolean
    isShared?: boolean
    originalContentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vestibular?: boolean | VestibularDefaultArgs<ExtArgs>
    originalContent?: boolean | VestibularContent$originalContentArgs<ExtArgs>
  }, ExtArgs["result"]["vestibularContent"]>

  export type VestibularContentSelectScalar = {
    id?: boolean
    vestibularId?: boolean
    title?: boolean
    type?: boolean
    link?: boolean
    pdfUrl?: boolean
    isShared?: boolean
    originalContentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VestibularContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vestibularId" | "title" | "type" | "link" | "pdfUrl" | "isShared" | "originalContentId" | "createdAt" | "updatedAt", ExtArgs["result"]["vestibularContent"]>
  export type VestibularContentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vestibular?: boolean | VestibularDefaultArgs<ExtArgs>
    originalContent?: boolean | VestibularContent$originalContentArgs<ExtArgs>
  }
  export type VestibularContentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vestibular?: boolean | VestibularDefaultArgs<ExtArgs>
    originalContent?: boolean | VestibularContent$originalContentArgs<ExtArgs>
  }
  export type VestibularContentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vestibular?: boolean | VestibularDefaultArgs<ExtArgs>
    originalContent?: boolean | VestibularContent$originalContentArgs<ExtArgs>
  }

  export type $VestibularContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VestibularContent"
    objects: {
      vestibular: Prisma.$VestibularPayload<ExtArgs>
      originalContent: Prisma.$ContentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      vestibularId: number
      title: string
      type: string | null
      link: string | null
      pdfUrl: string | null
      isShared: boolean
      originalContentId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vestibularContent"]>
    composites: {}
  }

  type VestibularContentGetPayload<S extends boolean | null | undefined | VestibularContentDefaultArgs> = $Result.GetResult<Prisma.$VestibularContentPayload, S>

  type VestibularContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VestibularContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VestibularContentCountAggregateInputType | true
    }

  export interface VestibularContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VestibularContent'], meta: { name: 'VestibularContent' } }
    /**
     * Find zero or one VestibularContent that matches the filter.
     * @param {VestibularContentFindUniqueArgs} args - Arguments to find a VestibularContent
     * @example
     * // Get one VestibularContent
     * const vestibularContent = await prisma.vestibularContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VestibularContentFindUniqueArgs>(args: SelectSubset<T, VestibularContentFindUniqueArgs<ExtArgs>>): Prisma__VestibularContentClient<$Result.GetResult<Prisma.$VestibularContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VestibularContent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VestibularContentFindUniqueOrThrowArgs} args - Arguments to find a VestibularContent
     * @example
     * // Get one VestibularContent
     * const vestibularContent = await prisma.vestibularContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VestibularContentFindUniqueOrThrowArgs>(args: SelectSubset<T, VestibularContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VestibularContentClient<$Result.GetResult<Prisma.$VestibularContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VestibularContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestibularContentFindFirstArgs} args - Arguments to find a VestibularContent
     * @example
     * // Get one VestibularContent
     * const vestibularContent = await prisma.vestibularContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VestibularContentFindFirstArgs>(args?: SelectSubset<T, VestibularContentFindFirstArgs<ExtArgs>>): Prisma__VestibularContentClient<$Result.GetResult<Prisma.$VestibularContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VestibularContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestibularContentFindFirstOrThrowArgs} args - Arguments to find a VestibularContent
     * @example
     * // Get one VestibularContent
     * const vestibularContent = await prisma.vestibularContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VestibularContentFindFirstOrThrowArgs>(args?: SelectSubset<T, VestibularContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__VestibularContentClient<$Result.GetResult<Prisma.$VestibularContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VestibularContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestibularContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VestibularContents
     * const vestibularContents = await prisma.vestibularContent.findMany()
     * 
     * // Get first 10 VestibularContents
     * const vestibularContents = await prisma.vestibularContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vestibularContentWithIdOnly = await prisma.vestibularContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VestibularContentFindManyArgs>(args?: SelectSubset<T, VestibularContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VestibularContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VestibularContent.
     * @param {VestibularContentCreateArgs} args - Arguments to create a VestibularContent.
     * @example
     * // Create one VestibularContent
     * const VestibularContent = await prisma.vestibularContent.create({
     *   data: {
     *     // ... data to create a VestibularContent
     *   }
     * })
     * 
     */
    create<T extends VestibularContentCreateArgs>(args: SelectSubset<T, VestibularContentCreateArgs<ExtArgs>>): Prisma__VestibularContentClient<$Result.GetResult<Prisma.$VestibularContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VestibularContents.
     * @param {VestibularContentCreateManyArgs} args - Arguments to create many VestibularContents.
     * @example
     * // Create many VestibularContents
     * const vestibularContent = await prisma.vestibularContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VestibularContentCreateManyArgs>(args?: SelectSubset<T, VestibularContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VestibularContents and returns the data saved in the database.
     * @param {VestibularContentCreateManyAndReturnArgs} args - Arguments to create many VestibularContents.
     * @example
     * // Create many VestibularContents
     * const vestibularContent = await prisma.vestibularContent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VestibularContents and only return the `id`
     * const vestibularContentWithIdOnly = await prisma.vestibularContent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VestibularContentCreateManyAndReturnArgs>(args?: SelectSubset<T, VestibularContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VestibularContentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VestibularContent.
     * @param {VestibularContentDeleteArgs} args - Arguments to delete one VestibularContent.
     * @example
     * // Delete one VestibularContent
     * const VestibularContent = await prisma.vestibularContent.delete({
     *   where: {
     *     // ... filter to delete one VestibularContent
     *   }
     * })
     * 
     */
    delete<T extends VestibularContentDeleteArgs>(args: SelectSubset<T, VestibularContentDeleteArgs<ExtArgs>>): Prisma__VestibularContentClient<$Result.GetResult<Prisma.$VestibularContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VestibularContent.
     * @param {VestibularContentUpdateArgs} args - Arguments to update one VestibularContent.
     * @example
     * // Update one VestibularContent
     * const vestibularContent = await prisma.vestibularContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VestibularContentUpdateArgs>(args: SelectSubset<T, VestibularContentUpdateArgs<ExtArgs>>): Prisma__VestibularContentClient<$Result.GetResult<Prisma.$VestibularContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VestibularContents.
     * @param {VestibularContentDeleteManyArgs} args - Arguments to filter VestibularContents to delete.
     * @example
     * // Delete a few VestibularContents
     * const { count } = await prisma.vestibularContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VestibularContentDeleteManyArgs>(args?: SelectSubset<T, VestibularContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VestibularContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestibularContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VestibularContents
     * const vestibularContent = await prisma.vestibularContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VestibularContentUpdateManyArgs>(args: SelectSubset<T, VestibularContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VestibularContents and returns the data updated in the database.
     * @param {VestibularContentUpdateManyAndReturnArgs} args - Arguments to update many VestibularContents.
     * @example
     * // Update many VestibularContents
     * const vestibularContent = await prisma.vestibularContent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VestibularContents and only return the `id`
     * const vestibularContentWithIdOnly = await prisma.vestibularContent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VestibularContentUpdateManyAndReturnArgs>(args: SelectSubset<T, VestibularContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VestibularContentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VestibularContent.
     * @param {VestibularContentUpsertArgs} args - Arguments to update or create a VestibularContent.
     * @example
     * // Update or create a VestibularContent
     * const vestibularContent = await prisma.vestibularContent.upsert({
     *   create: {
     *     // ... data to create a VestibularContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VestibularContent we want to update
     *   }
     * })
     */
    upsert<T extends VestibularContentUpsertArgs>(args: SelectSubset<T, VestibularContentUpsertArgs<ExtArgs>>): Prisma__VestibularContentClient<$Result.GetResult<Prisma.$VestibularContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VestibularContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestibularContentCountArgs} args - Arguments to filter VestibularContents to count.
     * @example
     * // Count the number of VestibularContents
     * const count = await prisma.vestibularContent.count({
     *   where: {
     *     // ... the filter for the VestibularContents we want to count
     *   }
     * })
    **/
    count<T extends VestibularContentCountArgs>(
      args?: Subset<T, VestibularContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VestibularContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VestibularContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestibularContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VestibularContentAggregateArgs>(args: Subset<T, VestibularContentAggregateArgs>): Prisma.PrismaPromise<GetVestibularContentAggregateType<T>>

    /**
     * Group by VestibularContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestibularContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VestibularContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VestibularContentGroupByArgs['orderBy'] }
        : { orderBy?: VestibularContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VestibularContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVestibularContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VestibularContent model
   */
  readonly fields: VestibularContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VestibularContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VestibularContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vestibular<T extends VestibularDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VestibularDefaultArgs<ExtArgs>>): Prisma__VestibularClient<$Result.GetResult<Prisma.$VestibularPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    originalContent<T extends VestibularContent$originalContentArgs<ExtArgs> = {}>(args?: Subset<T, VestibularContent$originalContentArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VestibularContent model
   */
  interface VestibularContentFieldRefs {
    readonly id: FieldRef<"VestibularContent", 'Int'>
    readonly vestibularId: FieldRef<"VestibularContent", 'Int'>
    readonly title: FieldRef<"VestibularContent", 'String'>
    readonly type: FieldRef<"VestibularContent", 'String'>
    readonly link: FieldRef<"VestibularContent", 'String'>
    readonly pdfUrl: FieldRef<"VestibularContent", 'String'>
    readonly isShared: FieldRef<"VestibularContent", 'Boolean'>
    readonly originalContentId: FieldRef<"VestibularContent", 'Int'>
    readonly createdAt: FieldRef<"VestibularContent", 'DateTime'>
    readonly updatedAt: FieldRef<"VestibularContent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VestibularContent findUnique
   */
  export type VestibularContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularContent
     */
    select?: VestibularContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularContent
     */
    omit?: VestibularContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularContentInclude<ExtArgs> | null
    /**
     * Filter, which VestibularContent to fetch.
     */
    where: VestibularContentWhereUniqueInput
  }

  /**
   * VestibularContent findUniqueOrThrow
   */
  export type VestibularContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularContent
     */
    select?: VestibularContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularContent
     */
    omit?: VestibularContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularContentInclude<ExtArgs> | null
    /**
     * Filter, which VestibularContent to fetch.
     */
    where: VestibularContentWhereUniqueInput
  }

  /**
   * VestibularContent findFirst
   */
  export type VestibularContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularContent
     */
    select?: VestibularContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularContent
     */
    omit?: VestibularContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularContentInclude<ExtArgs> | null
    /**
     * Filter, which VestibularContent to fetch.
     */
    where?: VestibularContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VestibularContents to fetch.
     */
    orderBy?: VestibularContentOrderByWithRelationInput | VestibularContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VestibularContents.
     */
    cursor?: VestibularContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VestibularContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VestibularContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VestibularContents.
     */
    distinct?: VestibularContentScalarFieldEnum | VestibularContentScalarFieldEnum[]
  }

  /**
   * VestibularContent findFirstOrThrow
   */
  export type VestibularContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularContent
     */
    select?: VestibularContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularContent
     */
    omit?: VestibularContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularContentInclude<ExtArgs> | null
    /**
     * Filter, which VestibularContent to fetch.
     */
    where?: VestibularContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VestibularContents to fetch.
     */
    orderBy?: VestibularContentOrderByWithRelationInput | VestibularContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VestibularContents.
     */
    cursor?: VestibularContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VestibularContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VestibularContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VestibularContents.
     */
    distinct?: VestibularContentScalarFieldEnum | VestibularContentScalarFieldEnum[]
  }

  /**
   * VestibularContent findMany
   */
  export type VestibularContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularContent
     */
    select?: VestibularContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularContent
     */
    omit?: VestibularContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularContentInclude<ExtArgs> | null
    /**
     * Filter, which VestibularContents to fetch.
     */
    where?: VestibularContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VestibularContents to fetch.
     */
    orderBy?: VestibularContentOrderByWithRelationInput | VestibularContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VestibularContents.
     */
    cursor?: VestibularContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VestibularContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VestibularContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VestibularContents.
     */
    distinct?: VestibularContentScalarFieldEnum | VestibularContentScalarFieldEnum[]
  }

  /**
   * VestibularContent create
   */
  export type VestibularContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularContent
     */
    select?: VestibularContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularContent
     */
    omit?: VestibularContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularContentInclude<ExtArgs> | null
    /**
     * The data needed to create a VestibularContent.
     */
    data: XOR<VestibularContentCreateInput, VestibularContentUncheckedCreateInput>
  }

  /**
   * VestibularContent createMany
   */
  export type VestibularContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VestibularContents.
     */
    data: VestibularContentCreateManyInput | VestibularContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VestibularContent createManyAndReturn
   */
  export type VestibularContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularContent
     */
    select?: VestibularContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularContent
     */
    omit?: VestibularContentOmit<ExtArgs> | null
    /**
     * The data used to create many VestibularContents.
     */
    data: VestibularContentCreateManyInput | VestibularContentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularContentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VestibularContent update
   */
  export type VestibularContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularContent
     */
    select?: VestibularContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularContent
     */
    omit?: VestibularContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularContentInclude<ExtArgs> | null
    /**
     * The data needed to update a VestibularContent.
     */
    data: XOR<VestibularContentUpdateInput, VestibularContentUncheckedUpdateInput>
    /**
     * Choose, which VestibularContent to update.
     */
    where: VestibularContentWhereUniqueInput
  }

  /**
   * VestibularContent updateMany
   */
  export type VestibularContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VestibularContents.
     */
    data: XOR<VestibularContentUpdateManyMutationInput, VestibularContentUncheckedUpdateManyInput>
    /**
     * Filter which VestibularContents to update
     */
    where?: VestibularContentWhereInput
    /**
     * Limit how many VestibularContents to update.
     */
    limit?: number
  }

  /**
   * VestibularContent updateManyAndReturn
   */
  export type VestibularContentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularContent
     */
    select?: VestibularContentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularContent
     */
    omit?: VestibularContentOmit<ExtArgs> | null
    /**
     * The data used to update VestibularContents.
     */
    data: XOR<VestibularContentUpdateManyMutationInput, VestibularContentUncheckedUpdateManyInput>
    /**
     * Filter which VestibularContents to update
     */
    where?: VestibularContentWhereInput
    /**
     * Limit how many VestibularContents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularContentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VestibularContent upsert
   */
  export type VestibularContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularContent
     */
    select?: VestibularContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularContent
     */
    omit?: VestibularContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularContentInclude<ExtArgs> | null
    /**
     * The filter to search for the VestibularContent to update in case it exists.
     */
    where: VestibularContentWhereUniqueInput
    /**
     * In case the VestibularContent found by the `where` argument doesn't exist, create a new VestibularContent with this data.
     */
    create: XOR<VestibularContentCreateInput, VestibularContentUncheckedCreateInput>
    /**
     * In case the VestibularContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VestibularContentUpdateInput, VestibularContentUncheckedUpdateInput>
  }

  /**
   * VestibularContent delete
   */
  export type VestibularContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularContent
     */
    select?: VestibularContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularContent
     */
    omit?: VestibularContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularContentInclude<ExtArgs> | null
    /**
     * Filter which VestibularContent to delete.
     */
    where: VestibularContentWhereUniqueInput
  }

  /**
   * VestibularContent deleteMany
   */
  export type VestibularContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VestibularContents to delete
     */
    where?: VestibularContentWhereInput
    /**
     * Limit how many VestibularContents to delete.
     */
    limit?: number
  }

  /**
   * VestibularContent.originalContent
   */
  export type VestibularContent$originalContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    where?: ContentWhereInput
  }

  /**
   * VestibularContent without action
   */
  export type VestibularContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularContent
     */
    select?: VestibularContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularContent
     */
    omit?: VestibularContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularContentInclude<ExtArgs> | null
  }


  /**
   * Model VestibularTopic
   */

  export type AggregateVestibularTopic = {
    _count: VestibularTopicCountAggregateOutputType | null
    _avg: VestibularTopicAvgAggregateOutputType | null
    _sum: VestibularTopicSumAggregateOutputType | null
    _min: VestibularTopicMinAggregateOutputType | null
    _max: VestibularTopicMaxAggregateOutputType | null
  }

  export type VestibularTopicAvgAggregateOutputType = {
    id: number | null
    vestibularId: number | null
    originalTopicId: number | null
  }

  export type VestibularTopicSumAggregateOutputType = {
    id: number | null
    vestibularId: number | null
    originalTopicId: number | null
  }

  export type VestibularTopicMinAggregateOutputType = {
    id: number | null
    vestibularId: number | null
    name: string | null
    originalTopicId: number | null
    isShared: boolean | null
    notes: string | null
    tags: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VestibularTopicMaxAggregateOutputType = {
    id: number | null
    vestibularId: number | null
    name: string | null
    originalTopicId: number | null
    isShared: boolean | null
    notes: string | null
    tags: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VestibularTopicCountAggregateOutputType = {
    id: number
    vestibularId: number
    name: number
    originalTopicId: number
    isShared: number
    notes: number
    tags: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VestibularTopicAvgAggregateInputType = {
    id?: true
    vestibularId?: true
    originalTopicId?: true
  }

  export type VestibularTopicSumAggregateInputType = {
    id?: true
    vestibularId?: true
    originalTopicId?: true
  }

  export type VestibularTopicMinAggregateInputType = {
    id?: true
    vestibularId?: true
    name?: true
    originalTopicId?: true
    isShared?: true
    notes?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VestibularTopicMaxAggregateInputType = {
    id?: true
    vestibularId?: true
    name?: true
    originalTopicId?: true
    isShared?: true
    notes?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VestibularTopicCountAggregateInputType = {
    id?: true
    vestibularId?: true
    name?: true
    originalTopicId?: true
    isShared?: true
    notes?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VestibularTopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VestibularTopic to aggregate.
     */
    where?: VestibularTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VestibularTopics to fetch.
     */
    orderBy?: VestibularTopicOrderByWithRelationInput | VestibularTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VestibularTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VestibularTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VestibularTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VestibularTopics
    **/
    _count?: true | VestibularTopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VestibularTopicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VestibularTopicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VestibularTopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VestibularTopicMaxAggregateInputType
  }

  export type GetVestibularTopicAggregateType<T extends VestibularTopicAggregateArgs> = {
        [P in keyof T & keyof AggregateVestibularTopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVestibularTopic[P]>
      : GetScalarType<T[P], AggregateVestibularTopic[P]>
  }




  export type VestibularTopicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VestibularTopicWhereInput
    orderBy?: VestibularTopicOrderByWithAggregationInput | VestibularTopicOrderByWithAggregationInput[]
    by: VestibularTopicScalarFieldEnum[] | VestibularTopicScalarFieldEnum
    having?: VestibularTopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VestibularTopicCountAggregateInputType | true
    _avg?: VestibularTopicAvgAggregateInputType
    _sum?: VestibularTopicSumAggregateInputType
    _min?: VestibularTopicMinAggregateInputType
    _max?: VestibularTopicMaxAggregateInputType
  }

  export type VestibularTopicGroupByOutputType = {
    id: number
    vestibularId: number
    name: string
    originalTopicId: number | null
    isShared: boolean
    notes: string | null
    tags: string | null
    createdAt: Date
    updatedAt: Date
    _count: VestibularTopicCountAggregateOutputType | null
    _avg: VestibularTopicAvgAggregateOutputType | null
    _sum: VestibularTopicSumAggregateOutputType | null
    _min: VestibularTopicMinAggregateOutputType | null
    _max: VestibularTopicMaxAggregateOutputType | null
  }

  type GetVestibularTopicGroupByPayload<T extends VestibularTopicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VestibularTopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VestibularTopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VestibularTopicGroupByOutputType[P]>
            : GetScalarType<T[P], VestibularTopicGroupByOutputType[P]>
        }
      >
    >


  export type VestibularTopicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vestibularId?: boolean
    name?: boolean
    originalTopicId?: boolean
    isShared?: boolean
    notes?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vestibular?: boolean | VestibularDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vestibularTopic"]>

  export type VestibularTopicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vestibularId?: boolean
    name?: boolean
    originalTopicId?: boolean
    isShared?: boolean
    notes?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vestibular?: boolean | VestibularDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vestibularTopic"]>

  export type VestibularTopicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vestibularId?: boolean
    name?: boolean
    originalTopicId?: boolean
    isShared?: boolean
    notes?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vestibular?: boolean | VestibularDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vestibularTopic"]>

  export type VestibularTopicSelectScalar = {
    id?: boolean
    vestibularId?: boolean
    name?: boolean
    originalTopicId?: boolean
    isShared?: boolean
    notes?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VestibularTopicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vestibularId" | "name" | "originalTopicId" | "isShared" | "notes" | "tags" | "createdAt" | "updatedAt", ExtArgs["result"]["vestibularTopic"]>
  export type VestibularTopicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vestibular?: boolean | VestibularDefaultArgs<ExtArgs>
  }
  export type VestibularTopicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vestibular?: boolean | VestibularDefaultArgs<ExtArgs>
  }
  export type VestibularTopicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vestibular?: boolean | VestibularDefaultArgs<ExtArgs>
  }

  export type $VestibularTopicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VestibularTopic"
    objects: {
      vestibular: Prisma.$VestibularPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      vestibularId: number
      name: string
      originalTopicId: number | null
      isShared: boolean
      notes: string | null
      tags: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vestibularTopic"]>
    composites: {}
  }

  type VestibularTopicGetPayload<S extends boolean | null | undefined | VestibularTopicDefaultArgs> = $Result.GetResult<Prisma.$VestibularTopicPayload, S>

  type VestibularTopicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VestibularTopicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VestibularTopicCountAggregateInputType | true
    }

  export interface VestibularTopicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VestibularTopic'], meta: { name: 'VestibularTopic' } }
    /**
     * Find zero or one VestibularTopic that matches the filter.
     * @param {VestibularTopicFindUniqueArgs} args - Arguments to find a VestibularTopic
     * @example
     * // Get one VestibularTopic
     * const vestibularTopic = await prisma.vestibularTopic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VestibularTopicFindUniqueArgs>(args: SelectSubset<T, VestibularTopicFindUniqueArgs<ExtArgs>>): Prisma__VestibularTopicClient<$Result.GetResult<Prisma.$VestibularTopicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VestibularTopic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VestibularTopicFindUniqueOrThrowArgs} args - Arguments to find a VestibularTopic
     * @example
     * // Get one VestibularTopic
     * const vestibularTopic = await prisma.vestibularTopic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VestibularTopicFindUniqueOrThrowArgs>(args: SelectSubset<T, VestibularTopicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VestibularTopicClient<$Result.GetResult<Prisma.$VestibularTopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VestibularTopic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestibularTopicFindFirstArgs} args - Arguments to find a VestibularTopic
     * @example
     * // Get one VestibularTopic
     * const vestibularTopic = await prisma.vestibularTopic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VestibularTopicFindFirstArgs>(args?: SelectSubset<T, VestibularTopicFindFirstArgs<ExtArgs>>): Prisma__VestibularTopicClient<$Result.GetResult<Prisma.$VestibularTopicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VestibularTopic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestibularTopicFindFirstOrThrowArgs} args - Arguments to find a VestibularTopic
     * @example
     * // Get one VestibularTopic
     * const vestibularTopic = await prisma.vestibularTopic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VestibularTopicFindFirstOrThrowArgs>(args?: SelectSubset<T, VestibularTopicFindFirstOrThrowArgs<ExtArgs>>): Prisma__VestibularTopicClient<$Result.GetResult<Prisma.$VestibularTopicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VestibularTopics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestibularTopicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VestibularTopics
     * const vestibularTopics = await prisma.vestibularTopic.findMany()
     * 
     * // Get first 10 VestibularTopics
     * const vestibularTopics = await prisma.vestibularTopic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vestibularTopicWithIdOnly = await prisma.vestibularTopic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VestibularTopicFindManyArgs>(args?: SelectSubset<T, VestibularTopicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VestibularTopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VestibularTopic.
     * @param {VestibularTopicCreateArgs} args - Arguments to create a VestibularTopic.
     * @example
     * // Create one VestibularTopic
     * const VestibularTopic = await prisma.vestibularTopic.create({
     *   data: {
     *     // ... data to create a VestibularTopic
     *   }
     * })
     * 
     */
    create<T extends VestibularTopicCreateArgs>(args: SelectSubset<T, VestibularTopicCreateArgs<ExtArgs>>): Prisma__VestibularTopicClient<$Result.GetResult<Prisma.$VestibularTopicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VestibularTopics.
     * @param {VestibularTopicCreateManyArgs} args - Arguments to create many VestibularTopics.
     * @example
     * // Create many VestibularTopics
     * const vestibularTopic = await prisma.vestibularTopic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VestibularTopicCreateManyArgs>(args?: SelectSubset<T, VestibularTopicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VestibularTopics and returns the data saved in the database.
     * @param {VestibularTopicCreateManyAndReturnArgs} args - Arguments to create many VestibularTopics.
     * @example
     * // Create many VestibularTopics
     * const vestibularTopic = await prisma.vestibularTopic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VestibularTopics and only return the `id`
     * const vestibularTopicWithIdOnly = await prisma.vestibularTopic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VestibularTopicCreateManyAndReturnArgs>(args?: SelectSubset<T, VestibularTopicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VestibularTopicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VestibularTopic.
     * @param {VestibularTopicDeleteArgs} args - Arguments to delete one VestibularTopic.
     * @example
     * // Delete one VestibularTopic
     * const VestibularTopic = await prisma.vestibularTopic.delete({
     *   where: {
     *     // ... filter to delete one VestibularTopic
     *   }
     * })
     * 
     */
    delete<T extends VestibularTopicDeleteArgs>(args: SelectSubset<T, VestibularTopicDeleteArgs<ExtArgs>>): Prisma__VestibularTopicClient<$Result.GetResult<Prisma.$VestibularTopicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VestibularTopic.
     * @param {VestibularTopicUpdateArgs} args - Arguments to update one VestibularTopic.
     * @example
     * // Update one VestibularTopic
     * const vestibularTopic = await prisma.vestibularTopic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VestibularTopicUpdateArgs>(args: SelectSubset<T, VestibularTopicUpdateArgs<ExtArgs>>): Prisma__VestibularTopicClient<$Result.GetResult<Prisma.$VestibularTopicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VestibularTopics.
     * @param {VestibularTopicDeleteManyArgs} args - Arguments to filter VestibularTopics to delete.
     * @example
     * // Delete a few VestibularTopics
     * const { count } = await prisma.vestibularTopic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VestibularTopicDeleteManyArgs>(args?: SelectSubset<T, VestibularTopicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VestibularTopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestibularTopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VestibularTopics
     * const vestibularTopic = await prisma.vestibularTopic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VestibularTopicUpdateManyArgs>(args: SelectSubset<T, VestibularTopicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VestibularTopics and returns the data updated in the database.
     * @param {VestibularTopicUpdateManyAndReturnArgs} args - Arguments to update many VestibularTopics.
     * @example
     * // Update many VestibularTopics
     * const vestibularTopic = await prisma.vestibularTopic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VestibularTopics and only return the `id`
     * const vestibularTopicWithIdOnly = await prisma.vestibularTopic.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VestibularTopicUpdateManyAndReturnArgs>(args: SelectSubset<T, VestibularTopicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VestibularTopicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VestibularTopic.
     * @param {VestibularTopicUpsertArgs} args - Arguments to update or create a VestibularTopic.
     * @example
     * // Update or create a VestibularTopic
     * const vestibularTopic = await prisma.vestibularTopic.upsert({
     *   create: {
     *     // ... data to create a VestibularTopic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VestibularTopic we want to update
     *   }
     * })
     */
    upsert<T extends VestibularTopicUpsertArgs>(args: SelectSubset<T, VestibularTopicUpsertArgs<ExtArgs>>): Prisma__VestibularTopicClient<$Result.GetResult<Prisma.$VestibularTopicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VestibularTopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestibularTopicCountArgs} args - Arguments to filter VestibularTopics to count.
     * @example
     * // Count the number of VestibularTopics
     * const count = await prisma.vestibularTopic.count({
     *   where: {
     *     // ... the filter for the VestibularTopics we want to count
     *   }
     * })
    **/
    count<T extends VestibularTopicCountArgs>(
      args?: Subset<T, VestibularTopicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VestibularTopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VestibularTopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestibularTopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VestibularTopicAggregateArgs>(args: Subset<T, VestibularTopicAggregateArgs>): Prisma.PrismaPromise<GetVestibularTopicAggregateType<T>>

    /**
     * Group by VestibularTopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestibularTopicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VestibularTopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VestibularTopicGroupByArgs['orderBy'] }
        : { orderBy?: VestibularTopicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VestibularTopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVestibularTopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VestibularTopic model
   */
  readonly fields: VestibularTopicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VestibularTopic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VestibularTopicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vestibular<T extends VestibularDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VestibularDefaultArgs<ExtArgs>>): Prisma__VestibularClient<$Result.GetResult<Prisma.$VestibularPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VestibularTopic model
   */
  interface VestibularTopicFieldRefs {
    readonly id: FieldRef<"VestibularTopic", 'Int'>
    readonly vestibularId: FieldRef<"VestibularTopic", 'Int'>
    readonly name: FieldRef<"VestibularTopic", 'String'>
    readonly originalTopicId: FieldRef<"VestibularTopic", 'Int'>
    readonly isShared: FieldRef<"VestibularTopic", 'Boolean'>
    readonly notes: FieldRef<"VestibularTopic", 'String'>
    readonly tags: FieldRef<"VestibularTopic", 'String'>
    readonly createdAt: FieldRef<"VestibularTopic", 'DateTime'>
    readonly updatedAt: FieldRef<"VestibularTopic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VestibularTopic findUnique
   */
  export type VestibularTopicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularTopic
     */
    select?: VestibularTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularTopic
     */
    omit?: VestibularTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularTopicInclude<ExtArgs> | null
    /**
     * Filter, which VestibularTopic to fetch.
     */
    where: VestibularTopicWhereUniqueInput
  }

  /**
   * VestibularTopic findUniqueOrThrow
   */
  export type VestibularTopicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularTopic
     */
    select?: VestibularTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularTopic
     */
    omit?: VestibularTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularTopicInclude<ExtArgs> | null
    /**
     * Filter, which VestibularTopic to fetch.
     */
    where: VestibularTopicWhereUniqueInput
  }

  /**
   * VestibularTopic findFirst
   */
  export type VestibularTopicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularTopic
     */
    select?: VestibularTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularTopic
     */
    omit?: VestibularTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularTopicInclude<ExtArgs> | null
    /**
     * Filter, which VestibularTopic to fetch.
     */
    where?: VestibularTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VestibularTopics to fetch.
     */
    orderBy?: VestibularTopicOrderByWithRelationInput | VestibularTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VestibularTopics.
     */
    cursor?: VestibularTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VestibularTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VestibularTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VestibularTopics.
     */
    distinct?: VestibularTopicScalarFieldEnum | VestibularTopicScalarFieldEnum[]
  }

  /**
   * VestibularTopic findFirstOrThrow
   */
  export type VestibularTopicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularTopic
     */
    select?: VestibularTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularTopic
     */
    omit?: VestibularTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularTopicInclude<ExtArgs> | null
    /**
     * Filter, which VestibularTopic to fetch.
     */
    where?: VestibularTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VestibularTopics to fetch.
     */
    orderBy?: VestibularTopicOrderByWithRelationInput | VestibularTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VestibularTopics.
     */
    cursor?: VestibularTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VestibularTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VestibularTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VestibularTopics.
     */
    distinct?: VestibularTopicScalarFieldEnum | VestibularTopicScalarFieldEnum[]
  }

  /**
   * VestibularTopic findMany
   */
  export type VestibularTopicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularTopic
     */
    select?: VestibularTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularTopic
     */
    omit?: VestibularTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularTopicInclude<ExtArgs> | null
    /**
     * Filter, which VestibularTopics to fetch.
     */
    where?: VestibularTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VestibularTopics to fetch.
     */
    orderBy?: VestibularTopicOrderByWithRelationInput | VestibularTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VestibularTopics.
     */
    cursor?: VestibularTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VestibularTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VestibularTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VestibularTopics.
     */
    distinct?: VestibularTopicScalarFieldEnum | VestibularTopicScalarFieldEnum[]
  }

  /**
   * VestibularTopic create
   */
  export type VestibularTopicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularTopic
     */
    select?: VestibularTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularTopic
     */
    omit?: VestibularTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularTopicInclude<ExtArgs> | null
    /**
     * The data needed to create a VestibularTopic.
     */
    data: XOR<VestibularTopicCreateInput, VestibularTopicUncheckedCreateInput>
  }

  /**
   * VestibularTopic createMany
   */
  export type VestibularTopicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VestibularTopics.
     */
    data: VestibularTopicCreateManyInput | VestibularTopicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VestibularTopic createManyAndReturn
   */
  export type VestibularTopicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularTopic
     */
    select?: VestibularTopicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularTopic
     */
    omit?: VestibularTopicOmit<ExtArgs> | null
    /**
     * The data used to create many VestibularTopics.
     */
    data: VestibularTopicCreateManyInput | VestibularTopicCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularTopicIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VestibularTopic update
   */
  export type VestibularTopicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularTopic
     */
    select?: VestibularTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularTopic
     */
    omit?: VestibularTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularTopicInclude<ExtArgs> | null
    /**
     * The data needed to update a VestibularTopic.
     */
    data: XOR<VestibularTopicUpdateInput, VestibularTopicUncheckedUpdateInput>
    /**
     * Choose, which VestibularTopic to update.
     */
    where: VestibularTopicWhereUniqueInput
  }

  /**
   * VestibularTopic updateMany
   */
  export type VestibularTopicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VestibularTopics.
     */
    data: XOR<VestibularTopicUpdateManyMutationInput, VestibularTopicUncheckedUpdateManyInput>
    /**
     * Filter which VestibularTopics to update
     */
    where?: VestibularTopicWhereInput
    /**
     * Limit how many VestibularTopics to update.
     */
    limit?: number
  }

  /**
   * VestibularTopic updateManyAndReturn
   */
  export type VestibularTopicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularTopic
     */
    select?: VestibularTopicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularTopic
     */
    omit?: VestibularTopicOmit<ExtArgs> | null
    /**
     * The data used to update VestibularTopics.
     */
    data: XOR<VestibularTopicUpdateManyMutationInput, VestibularTopicUncheckedUpdateManyInput>
    /**
     * Filter which VestibularTopics to update
     */
    where?: VestibularTopicWhereInput
    /**
     * Limit how many VestibularTopics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularTopicIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VestibularTopic upsert
   */
  export type VestibularTopicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularTopic
     */
    select?: VestibularTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularTopic
     */
    omit?: VestibularTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularTopicInclude<ExtArgs> | null
    /**
     * The filter to search for the VestibularTopic to update in case it exists.
     */
    where: VestibularTopicWhereUniqueInput
    /**
     * In case the VestibularTopic found by the `where` argument doesn't exist, create a new VestibularTopic with this data.
     */
    create: XOR<VestibularTopicCreateInput, VestibularTopicUncheckedCreateInput>
    /**
     * In case the VestibularTopic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VestibularTopicUpdateInput, VestibularTopicUncheckedUpdateInput>
  }

  /**
   * VestibularTopic delete
   */
  export type VestibularTopicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularTopic
     */
    select?: VestibularTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularTopic
     */
    omit?: VestibularTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularTopicInclude<ExtArgs> | null
    /**
     * Filter which VestibularTopic to delete.
     */
    where: VestibularTopicWhereUniqueInput
  }

  /**
   * VestibularTopic deleteMany
   */
  export type VestibularTopicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VestibularTopics to delete
     */
    where?: VestibularTopicWhereInput
    /**
     * Limit how many VestibularTopics to delete.
     */
    limit?: number
  }

  /**
   * VestibularTopic without action
   */
  export type VestibularTopicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestibularTopic
     */
    select?: VestibularTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestibularTopic
     */
    omit?: VestibularTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestibularTopicInclude<ExtArgs> | null
  }


  /**
   * Model AccessibilityCategory
   */

  export type AggregateAccessibilityCategory = {
    _count: AccessibilityCategoryCountAggregateOutputType | null
    _avg: AccessibilityCategoryAvgAggregateOutputType | null
    _sum: AccessibilityCategorySumAggregateOutputType | null
    _min: AccessibilityCategoryMinAggregateOutputType | null
    _max: AccessibilityCategoryMaxAggregateOutputType | null
  }

  export type AccessibilityCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type AccessibilityCategorySumAggregateOutputType = {
    id: number | null
  }

  export type AccessibilityCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccessibilityCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccessibilityCategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccessibilityCategoryAvgAggregateInputType = {
    id?: true
  }

  export type AccessibilityCategorySumAggregateInputType = {
    id?: true
  }

  export type AccessibilityCategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccessibilityCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccessibilityCategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccessibilityCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessibilityCategory to aggregate.
     */
    where?: AccessibilityCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessibilityCategories to fetch.
     */
    orderBy?: AccessibilityCategoryOrderByWithRelationInput | AccessibilityCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccessibilityCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessibilityCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessibilityCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccessibilityCategories
    **/
    _count?: true | AccessibilityCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccessibilityCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccessibilityCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccessibilityCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccessibilityCategoryMaxAggregateInputType
  }

  export type GetAccessibilityCategoryAggregateType<T extends AccessibilityCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateAccessibilityCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccessibilityCategory[P]>
      : GetScalarType<T[P], AggregateAccessibilityCategory[P]>
  }




  export type AccessibilityCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessibilityCategoryWhereInput
    orderBy?: AccessibilityCategoryOrderByWithAggregationInput | AccessibilityCategoryOrderByWithAggregationInput[]
    by: AccessibilityCategoryScalarFieldEnum[] | AccessibilityCategoryScalarFieldEnum
    having?: AccessibilityCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccessibilityCategoryCountAggregateInputType | true
    _avg?: AccessibilityCategoryAvgAggregateInputType
    _sum?: AccessibilityCategorySumAggregateInputType
    _min?: AccessibilityCategoryMinAggregateInputType
    _max?: AccessibilityCategoryMaxAggregateInputType
  }

  export type AccessibilityCategoryGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccessibilityCategoryCountAggregateOutputType | null
    _avg: AccessibilityCategoryAvgAggregateOutputType | null
    _sum: AccessibilityCategorySumAggregateOutputType | null
    _min: AccessibilityCategoryMinAggregateOutputType | null
    _max: AccessibilityCategoryMaxAggregateOutputType | null
  }

  type GetAccessibilityCategoryGroupByPayload<T extends AccessibilityCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccessibilityCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccessibilityCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccessibilityCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], AccessibilityCategoryGroupByOutputType[P]>
        }
      >
    >


  export type AccessibilityCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryTopics?: boolean | AccessibilityCategory$categoryTopicsArgs<ExtArgs>
    needs?: boolean | AccessibilityCategory$needsArgs<ExtArgs>
    themes?: boolean | AccessibilityCategory$themesArgs<ExtArgs>
    _count?: boolean | AccessibilityCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accessibilityCategory"]>

  export type AccessibilityCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["accessibilityCategory"]>

  export type AccessibilityCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["accessibilityCategory"]>

  export type AccessibilityCategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccessibilityCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["accessibilityCategory"]>
  export type AccessibilityCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoryTopics?: boolean | AccessibilityCategory$categoryTopicsArgs<ExtArgs>
    needs?: boolean | AccessibilityCategory$needsArgs<ExtArgs>
    themes?: boolean | AccessibilityCategory$themesArgs<ExtArgs>
    _count?: boolean | AccessibilityCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccessibilityCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AccessibilityCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AccessibilityCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccessibilityCategory"
    objects: {
      categoryTopics: Prisma.$AccessibilityCategoryTopicPayload<ExtArgs>[]
      needs: Prisma.$AccessibilityNeedPayload<ExtArgs>[]
      themes: Prisma.$AccessibilityThemePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["accessibilityCategory"]>
    composites: {}
  }

  type AccessibilityCategoryGetPayload<S extends boolean | null | undefined | AccessibilityCategoryDefaultArgs> = $Result.GetResult<Prisma.$AccessibilityCategoryPayload, S>

  type AccessibilityCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccessibilityCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccessibilityCategoryCountAggregateInputType | true
    }

  export interface AccessibilityCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccessibilityCategory'], meta: { name: 'AccessibilityCategory' } }
    /**
     * Find zero or one AccessibilityCategory that matches the filter.
     * @param {AccessibilityCategoryFindUniqueArgs} args - Arguments to find a AccessibilityCategory
     * @example
     * // Get one AccessibilityCategory
     * const accessibilityCategory = await prisma.accessibilityCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccessibilityCategoryFindUniqueArgs>(args: SelectSubset<T, AccessibilityCategoryFindUniqueArgs<ExtArgs>>): Prisma__AccessibilityCategoryClient<$Result.GetResult<Prisma.$AccessibilityCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AccessibilityCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccessibilityCategoryFindUniqueOrThrowArgs} args - Arguments to find a AccessibilityCategory
     * @example
     * // Get one AccessibilityCategory
     * const accessibilityCategory = await prisma.accessibilityCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccessibilityCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, AccessibilityCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccessibilityCategoryClient<$Result.GetResult<Prisma.$AccessibilityCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccessibilityCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessibilityCategoryFindFirstArgs} args - Arguments to find a AccessibilityCategory
     * @example
     * // Get one AccessibilityCategory
     * const accessibilityCategory = await prisma.accessibilityCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccessibilityCategoryFindFirstArgs>(args?: SelectSubset<T, AccessibilityCategoryFindFirstArgs<ExtArgs>>): Prisma__AccessibilityCategoryClient<$Result.GetResult<Prisma.$AccessibilityCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccessibilityCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessibilityCategoryFindFirstOrThrowArgs} args - Arguments to find a AccessibilityCategory
     * @example
     * // Get one AccessibilityCategory
     * const accessibilityCategory = await prisma.accessibilityCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccessibilityCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, AccessibilityCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccessibilityCategoryClient<$Result.GetResult<Prisma.$AccessibilityCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccessibilityCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessibilityCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccessibilityCategories
     * const accessibilityCategories = await prisma.accessibilityCategory.findMany()
     * 
     * // Get first 10 AccessibilityCategories
     * const accessibilityCategories = await prisma.accessibilityCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accessibilityCategoryWithIdOnly = await prisma.accessibilityCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccessibilityCategoryFindManyArgs>(args?: SelectSubset<T, AccessibilityCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessibilityCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AccessibilityCategory.
     * @param {AccessibilityCategoryCreateArgs} args - Arguments to create a AccessibilityCategory.
     * @example
     * // Create one AccessibilityCategory
     * const AccessibilityCategory = await prisma.accessibilityCategory.create({
     *   data: {
     *     // ... data to create a AccessibilityCategory
     *   }
     * })
     * 
     */
    create<T extends AccessibilityCategoryCreateArgs>(args: SelectSubset<T, AccessibilityCategoryCreateArgs<ExtArgs>>): Prisma__AccessibilityCategoryClient<$Result.GetResult<Prisma.$AccessibilityCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AccessibilityCategories.
     * @param {AccessibilityCategoryCreateManyArgs} args - Arguments to create many AccessibilityCategories.
     * @example
     * // Create many AccessibilityCategories
     * const accessibilityCategory = await prisma.accessibilityCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccessibilityCategoryCreateManyArgs>(args?: SelectSubset<T, AccessibilityCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccessibilityCategories and returns the data saved in the database.
     * @param {AccessibilityCategoryCreateManyAndReturnArgs} args - Arguments to create many AccessibilityCategories.
     * @example
     * // Create many AccessibilityCategories
     * const accessibilityCategory = await prisma.accessibilityCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccessibilityCategories and only return the `id`
     * const accessibilityCategoryWithIdOnly = await prisma.accessibilityCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccessibilityCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, AccessibilityCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessibilityCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AccessibilityCategory.
     * @param {AccessibilityCategoryDeleteArgs} args - Arguments to delete one AccessibilityCategory.
     * @example
     * // Delete one AccessibilityCategory
     * const AccessibilityCategory = await prisma.accessibilityCategory.delete({
     *   where: {
     *     // ... filter to delete one AccessibilityCategory
     *   }
     * })
     * 
     */
    delete<T extends AccessibilityCategoryDeleteArgs>(args: SelectSubset<T, AccessibilityCategoryDeleteArgs<ExtArgs>>): Prisma__AccessibilityCategoryClient<$Result.GetResult<Prisma.$AccessibilityCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AccessibilityCategory.
     * @param {AccessibilityCategoryUpdateArgs} args - Arguments to update one AccessibilityCategory.
     * @example
     * // Update one AccessibilityCategory
     * const accessibilityCategory = await prisma.accessibilityCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccessibilityCategoryUpdateArgs>(args: SelectSubset<T, AccessibilityCategoryUpdateArgs<ExtArgs>>): Prisma__AccessibilityCategoryClient<$Result.GetResult<Prisma.$AccessibilityCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AccessibilityCategories.
     * @param {AccessibilityCategoryDeleteManyArgs} args - Arguments to filter AccessibilityCategories to delete.
     * @example
     * // Delete a few AccessibilityCategories
     * const { count } = await prisma.accessibilityCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccessibilityCategoryDeleteManyArgs>(args?: SelectSubset<T, AccessibilityCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccessibilityCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessibilityCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccessibilityCategories
     * const accessibilityCategory = await prisma.accessibilityCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccessibilityCategoryUpdateManyArgs>(args: SelectSubset<T, AccessibilityCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccessibilityCategories and returns the data updated in the database.
     * @param {AccessibilityCategoryUpdateManyAndReturnArgs} args - Arguments to update many AccessibilityCategories.
     * @example
     * // Update many AccessibilityCategories
     * const accessibilityCategory = await prisma.accessibilityCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AccessibilityCategories and only return the `id`
     * const accessibilityCategoryWithIdOnly = await prisma.accessibilityCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccessibilityCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, AccessibilityCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessibilityCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AccessibilityCategory.
     * @param {AccessibilityCategoryUpsertArgs} args - Arguments to update or create a AccessibilityCategory.
     * @example
     * // Update or create a AccessibilityCategory
     * const accessibilityCategory = await prisma.accessibilityCategory.upsert({
     *   create: {
     *     // ... data to create a AccessibilityCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccessibilityCategory we want to update
     *   }
     * })
     */
    upsert<T extends AccessibilityCategoryUpsertArgs>(args: SelectSubset<T, AccessibilityCategoryUpsertArgs<ExtArgs>>): Prisma__AccessibilityCategoryClient<$Result.GetResult<Prisma.$AccessibilityCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AccessibilityCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessibilityCategoryCountArgs} args - Arguments to filter AccessibilityCategories to count.
     * @example
     * // Count the number of AccessibilityCategories
     * const count = await prisma.accessibilityCategory.count({
     *   where: {
     *     // ... the filter for the AccessibilityCategories we want to count
     *   }
     * })
    **/
    count<T extends AccessibilityCategoryCountArgs>(
      args?: Subset<T, AccessibilityCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccessibilityCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccessibilityCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessibilityCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccessibilityCategoryAggregateArgs>(args: Subset<T, AccessibilityCategoryAggregateArgs>): Prisma.PrismaPromise<GetAccessibilityCategoryAggregateType<T>>

    /**
     * Group by AccessibilityCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessibilityCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccessibilityCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccessibilityCategoryGroupByArgs['orderBy'] }
        : { orderBy?: AccessibilityCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccessibilityCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccessibilityCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccessibilityCategory model
   */
  readonly fields: AccessibilityCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccessibilityCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccessibilityCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoryTopics<T extends AccessibilityCategory$categoryTopicsArgs<ExtArgs> = {}>(args?: Subset<T, AccessibilityCategory$categoryTopicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessibilityCategoryTopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    needs<T extends AccessibilityCategory$needsArgs<ExtArgs> = {}>(args?: Subset<T, AccessibilityCategory$needsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessibilityNeedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    themes<T extends AccessibilityCategory$themesArgs<ExtArgs> = {}>(args?: Subset<T, AccessibilityCategory$themesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessibilityThemePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AccessibilityCategory model
   */
  interface AccessibilityCategoryFieldRefs {
    readonly id: FieldRef<"AccessibilityCategory", 'Int'>
    readonly name: FieldRef<"AccessibilityCategory", 'String'>
    readonly description: FieldRef<"AccessibilityCategory", 'String'>
    readonly createdAt: FieldRef<"AccessibilityCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"AccessibilityCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AccessibilityCategory findUnique
   */
  export type AccessibilityCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityCategory
     */
    select?: AccessibilityCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityCategory
     */
    omit?: AccessibilityCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityCategoryInclude<ExtArgs> | null
    /**
     * Filter, which AccessibilityCategory to fetch.
     */
    where: AccessibilityCategoryWhereUniqueInput
  }

  /**
   * AccessibilityCategory findUniqueOrThrow
   */
  export type AccessibilityCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityCategory
     */
    select?: AccessibilityCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityCategory
     */
    omit?: AccessibilityCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityCategoryInclude<ExtArgs> | null
    /**
     * Filter, which AccessibilityCategory to fetch.
     */
    where: AccessibilityCategoryWhereUniqueInput
  }

  /**
   * AccessibilityCategory findFirst
   */
  export type AccessibilityCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityCategory
     */
    select?: AccessibilityCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityCategory
     */
    omit?: AccessibilityCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityCategoryInclude<ExtArgs> | null
    /**
     * Filter, which AccessibilityCategory to fetch.
     */
    where?: AccessibilityCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessibilityCategories to fetch.
     */
    orderBy?: AccessibilityCategoryOrderByWithRelationInput | AccessibilityCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessibilityCategories.
     */
    cursor?: AccessibilityCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessibilityCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessibilityCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessibilityCategories.
     */
    distinct?: AccessibilityCategoryScalarFieldEnum | AccessibilityCategoryScalarFieldEnum[]
  }

  /**
   * AccessibilityCategory findFirstOrThrow
   */
  export type AccessibilityCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityCategory
     */
    select?: AccessibilityCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityCategory
     */
    omit?: AccessibilityCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityCategoryInclude<ExtArgs> | null
    /**
     * Filter, which AccessibilityCategory to fetch.
     */
    where?: AccessibilityCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessibilityCategories to fetch.
     */
    orderBy?: AccessibilityCategoryOrderByWithRelationInput | AccessibilityCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessibilityCategories.
     */
    cursor?: AccessibilityCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessibilityCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessibilityCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessibilityCategories.
     */
    distinct?: AccessibilityCategoryScalarFieldEnum | AccessibilityCategoryScalarFieldEnum[]
  }

  /**
   * AccessibilityCategory findMany
   */
  export type AccessibilityCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityCategory
     */
    select?: AccessibilityCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityCategory
     */
    omit?: AccessibilityCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityCategoryInclude<ExtArgs> | null
    /**
     * Filter, which AccessibilityCategories to fetch.
     */
    where?: AccessibilityCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessibilityCategories to fetch.
     */
    orderBy?: AccessibilityCategoryOrderByWithRelationInput | AccessibilityCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccessibilityCategories.
     */
    cursor?: AccessibilityCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessibilityCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessibilityCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessibilityCategories.
     */
    distinct?: AccessibilityCategoryScalarFieldEnum | AccessibilityCategoryScalarFieldEnum[]
  }

  /**
   * AccessibilityCategory create
   */
  export type AccessibilityCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityCategory
     */
    select?: AccessibilityCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityCategory
     */
    omit?: AccessibilityCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a AccessibilityCategory.
     */
    data: XOR<AccessibilityCategoryCreateInput, AccessibilityCategoryUncheckedCreateInput>
  }

  /**
   * AccessibilityCategory createMany
   */
  export type AccessibilityCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccessibilityCategories.
     */
    data: AccessibilityCategoryCreateManyInput | AccessibilityCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccessibilityCategory createManyAndReturn
   */
  export type AccessibilityCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityCategory
     */
    select?: AccessibilityCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityCategory
     */
    omit?: AccessibilityCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many AccessibilityCategories.
     */
    data: AccessibilityCategoryCreateManyInput | AccessibilityCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccessibilityCategory update
   */
  export type AccessibilityCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityCategory
     */
    select?: AccessibilityCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityCategory
     */
    omit?: AccessibilityCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a AccessibilityCategory.
     */
    data: XOR<AccessibilityCategoryUpdateInput, AccessibilityCategoryUncheckedUpdateInput>
    /**
     * Choose, which AccessibilityCategory to update.
     */
    where: AccessibilityCategoryWhereUniqueInput
  }

  /**
   * AccessibilityCategory updateMany
   */
  export type AccessibilityCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccessibilityCategories.
     */
    data: XOR<AccessibilityCategoryUpdateManyMutationInput, AccessibilityCategoryUncheckedUpdateManyInput>
    /**
     * Filter which AccessibilityCategories to update
     */
    where?: AccessibilityCategoryWhereInput
    /**
     * Limit how many AccessibilityCategories to update.
     */
    limit?: number
  }

  /**
   * AccessibilityCategory updateManyAndReturn
   */
  export type AccessibilityCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityCategory
     */
    select?: AccessibilityCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityCategory
     */
    omit?: AccessibilityCategoryOmit<ExtArgs> | null
    /**
     * The data used to update AccessibilityCategories.
     */
    data: XOR<AccessibilityCategoryUpdateManyMutationInput, AccessibilityCategoryUncheckedUpdateManyInput>
    /**
     * Filter which AccessibilityCategories to update
     */
    where?: AccessibilityCategoryWhereInput
    /**
     * Limit how many AccessibilityCategories to update.
     */
    limit?: number
  }

  /**
   * AccessibilityCategory upsert
   */
  export type AccessibilityCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityCategory
     */
    select?: AccessibilityCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityCategory
     */
    omit?: AccessibilityCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the AccessibilityCategory to update in case it exists.
     */
    where: AccessibilityCategoryWhereUniqueInput
    /**
     * In case the AccessibilityCategory found by the `where` argument doesn't exist, create a new AccessibilityCategory with this data.
     */
    create: XOR<AccessibilityCategoryCreateInput, AccessibilityCategoryUncheckedCreateInput>
    /**
     * In case the AccessibilityCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccessibilityCategoryUpdateInput, AccessibilityCategoryUncheckedUpdateInput>
  }

  /**
   * AccessibilityCategory delete
   */
  export type AccessibilityCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityCategory
     */
    select?: AccessibilityCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityCategory
     */
    omit?: AccessibilityCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityCategoryInclude<ExtArgs> | null
    /**
     * Filter which AccessibilityCategory to delete.
     */
    where: AccessibilityCategoryWhereUniqueInput
  }

  /**
   * AccessibilityCategory deleteMany
   */
  export type AccessibilityCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessibilityCategories to delete
     */
    where?: AccessibilityCategoryWhereInput
    /**
     * Limit how many AccessibilityCategories to delete.
     */
    limit?: number
  }

  /**
   * AccessibilityCategory.categoryTopics
   */
  export type AccessibilityCategory$categoryTopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityCategoryTopic
     */
    select?: AccessibilityCategoryTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityCategoryTopic
     */
    omit?: AccessibilityCategoryTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityCategoryTopicInclude<ExtArgs> | null
    where?: AccessibilityCategoryTopicWhereInput
    orderBy?: AccessibilityCategoryTopicOrderByWithRelationInput | AccessibilityCategoryTopicOrderByWithRelationInput[]
    cursor?: AccessibilityCategoryTopicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccessibilityCategoryTopicScalarFieldEnum | AccessibilityCategoryTopicScalarFieldEnum[]
  }

  /**
   * AccessibilityCategory.needs
   */
  export type AccessibilityCategory$needsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityNeed
     */
    select?: AccessibilityNeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityNeed
     */
    omit?: AccessibilityNeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityNeedInclude<ExtArgs> | null
    where?: AccessibilityNeedWhereInput
    orderBy?: AccessibilityNeedOrderByWithRelationInput | AccessibilityNeedOrderByWithRelationInput[]
    cursor?: AccessibilityNeedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccessibilityNeedScalarFieldEnum | AccessibilityNeedScalarFieldEnum[]
  }

  /**
   * AccessibilityCategory.themes
   */
  export type AccessibilityCategory$themesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityTheme
     */
    select?: AccessibilityThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityTheme
     */
    omit?: AccessibilityThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityThemeInclude<ExtArgs> | null
    where?: AccessibilityThemeWhereInput
    orderBy?: AccessibilityThemeOrderByWithRelationInput | AccessibilityThemeOrderByWithRelationInput[]
    cursor?: AccessibilityThemeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccessibilityThemeScalarFieldEnum | AccessibilityThemeScalarFieldEnum[]
  }

  /**
   * AccessibilityCategory without action
   */
  export type AccessibilityCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityCategory
     */
    select?: AccessibilityCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityCategory
     */
    omit?: AccessibilityCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityCategoryInclude<ExtArgs> | null
  }


  /**
   * Model AccessibilityCategoryTopic
   */

  export type AggregateAccessibilityCategoryTopic = {
    _count: AccessibilityCategoryTopicCountAggregateOutputType | null
    _avg: AccessibilityCategoryTopicAvgAggregateOutputType | null
    _sum: AccessibilityCategoryTopicSumAggregateOutputType | null
    _min: AccessibilityCategoryTopicMinAggregateOutputType | null
    _max: AccessibilityCategoryTopicMaxAggregateOutputType | null
  }

  export type AccessibilityCategoryTopicAvgAggregateOutputType = {
    accessibilityCategoryId: number | null
    topicId: number | null
  }

  export type AccessibilityCategoryTopicSumAggregateOutputType = {
    accessibilityCategoryId: number | null
    topicId: number | null
  }

  export type AccessibilityCategoryTopicMinAggregateOutputType = {
    accessibilityCategoryId: number | null
    topicId: number | null
  }

  export type AccessibilityCategoryTopicMaxAggregateOutputType = {
    accessibilityCategoryId: number | null
    topicId: number | null
  }

  export type AccessibilityCategoryTopicCountAggregateOutputType = {
    accessibilityCategoryId: number
    topicId: number
    _all: number
  }


  export type AccessibilityCategoryTopicAvgAggregateInputType = {
    accessibilityCategoryId?: true
    topicId?: true
  }

  export type AccessibilityCategoryTopicSumAggregateInputType = {
    accessibilityCategoryId?: true
    topicId?: true
  }

  export type AccessibilityCategoryTopicMinAggregateInputType = {
    accessibilityCategoryId?: true
    topicId?: true
  }

  export type AccessibilityCategoryTopicMaxAggregateInputType = {
    accessibilityCategoryId?: true
    topicId?: true
  }

  export type AccessibilityCategoryTopicCountAggregateInputType = {
    accessibilityCategoryId?: true
    topicId?: true
    _all?: true
  }

  export type AccessibilityCategoryTopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessibilityCategoryTopic to aggregate.
     */
    where?: AccessibilityCategoryTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessibilityCategoryTopics to fetch.
     */
    orderBy?: AccessibilityCategoryTopicOrderByWithRelationInput | AccessibilityCategoryTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccessibilityCategoryTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessibilityCategoryTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessibilityCategoryTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccessibilityCategoryTopics
    **/
    _count?: true | AccessibilityCategoryTopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccessibilityCategoryTopicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccessibilityCategoryTopicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccessibilityCategoryTopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccessibilityCategoryTopicMaxAggregateInputType
  }

  export type GetAccessibilityCategoryTopicAggregateType<T extends AccessibilityCategoryTopicAggregateArgs> = {
        [P in keyof T & keyof AggregateAccessibilityCategoryTopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccessibilityCategoryTopic[P]>
      : GetScalarType<T[P], AggregateAccessibilityCategoryTopic[P]>
  }




  export type AccessibilityCategoryTopicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessibilityCategoryTopicWhereInput
    orderBy?: AccessibilityCategoryTopicOrderByWithAggregationInput | AccessibilityCategoryTopicOrderByWithAggregationInput[]
    by: AccessibilityCategoryTopicScalarFieldEnum[] | AccessibilityCategoryTopicScalarFieldEnum
    having?: AccessibilityCategoryTopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccessibilityCategoryTopicCountAggregateInputType | true
    _avg?: AccessibilityCategoryTopicAvgAggregateInputType
    _sum?: AccessibilityCategoryTopicSumAggregateInputType
    _min?: AccessibilityCategoryTopicMinAggregateInputType
    _max?: AccessibilityCategoryTopicMaxAggregateInputType
  }

  export type AccessibilityCategoryTopicGroupByOutputType = {
    accessibilityCategoryId: number
    topicId: number
    _count: AccessibilityCategoryTopicCountAggregateOutputType | null
    _avg: AccessibilityCategoryTopicAvgAggregateOutputType | null
    _sum: AccessibilityCategoryTopicSumAggregateOutputType | null
    _min: AccessibilityCategoryTopicMinAggregateOutputType | null
    _max: AccessibilityCategoryTopicMaxAggregateOutputType | null
  }

  type GetAccessibilityCategoryTopicGroupByPayload<T extends AccessibilityCategoryTopicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccessibilityCategoryTopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccessibilityCategoryTopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccessibilityCategoryTopicGroupByOutputType[P]>
            : GetScalarType<T[P], AccessibilityCategoryTopicGroupByOutputType[P]>
        }
      >
    >


  export type AccessibilityCategoryTopicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    accessibilityCategoryId?: boolean
    topicId?: boolean
    accessibilityCategory?: boolean | AccessibilityCategoryDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accessibilityCategoryTopic"]>

  export type AccessibilityCategoryTopicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    accessibilityCategoryId?: boolean
    topicId?: boolean
    accessibilityCategory?: boolean | AccessibilityCategoryDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accessibilityCategoryTopic"]>

  export type AccessibilityCategoryTopicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    accessibilityCategoryId?: boolean
    topicId?: boolean
    accessibilityCategory?: boolean | AccessibilityCategoryDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accessibilityCategoryTopic"]>

  export type AccessibilityCategoryTopicSelectScalar = {
    accessibilityCategoryId?: boolean
    topicId?: boolean
  }

  export type AccessibilityCategoryTopicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"accessibilityCategoryId" | "topicId", ExtArgs["result"]["accessibilityCategoryTopic"]>
  export type AccessibilityCategoryTopicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accessibilityCategory?: boolean | AccessibilityCategoryDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }
  export type AccessibilityCategoryTopicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accessibilityCategory?: boolean | AccessibilityCategoryDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }
  export type AccessibilityCategoryTopicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accessibilityCategory?: boolean | AccessibilityCategoryDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }

  export type $AccessibilityCategoryTopicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccessibilityCategoryTopic"
    objects: {
      accessibilityCategory: Prisma.$AccessibilityCategoryPayload<ExtArgs>
      topic: Prisma.$TopicPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      accessibilityCategoryId: number
      topicId: number
    }, ExtArgs["result"]["accessibilityCategoryTopic"]>
    composites: {}
  }

  type AccessibilityCategoryTopicGetPayload<S extends boolean | null | undefined | AccessibilityCategoryTopicDefaultArgs> = $Result.GetResult<Prisma.$AccessibilityCategoryTopicPayload, S>

  type AccessibilityCategoryTopicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccessibilityCategoryTopicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccessibilityCategoryTopicCountAggregateInputType | true
    }

  export interface AccessibilityCategoryTopicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccessibilityCategoryTopic'], meta: { name: 'AccessibilityCategoryTopic' } }
    /**
     * Find zero or one AccessibilityCategoryTopic that matches the filter.
     * @param {AccessibilityCategoryTopicFindUniqueArgs} args - Arguments to find a AccessibilityCategoryTopic
     * @example
     * // Get one AccessibilityCategoryTopic
     * const accessibilityCategoryTopic = await prisma.accessibilityCategoryTopic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccessibilityCategoryTopicFindUniqueArgs>(args: SelectSubset<T, AccessibilityCategoryTopicFindUniqueArgs<ExtArgs>>): Prisma__AccessibilityCategoryTopicClient<$Result.GetResult<Prisma.$AccessibilityCategoryTopicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AccessibilityCategoryTopic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccessibilityCategoryTopicFindUniqueOrThrowArgs} args - Arguments to find a AccessibilityCategoryTopic
     * @example
     * // Get one AccessibilityCategoryTopic
     * const accessibilityCategoryTopic = await prisma.accessibilityCategoryTopic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccessibilityCategoryTopicFindUniqueOrThrowArgs>(args: SelectSubset<T, AccessibilityCategoryTopicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccessibilityCategoryTopicClient<$Result.GetResult<Prisma.$AccessibilityCategoryTopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccessibilityCategoryTopic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessibilityCategoryTopicFindFirstArgs} args - Arguments to find a AccessibilityCategoryTopic
     * @example
     * // Get one AccessibilityCategoryTopic
     * const accessibilityCategoryTopic = await prisma.accessibilityCategoryTopic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccessibilityCategoryTopicFindFirstArgs>(args?: SelectSubset<T, AccessibilityCategoryTopicFindFirstArgs<ExtArgs>>): Prisma__AccessibilityCategoryTopicClient<$Result.GetResult<Prisma.$AccessibilityCategoryTopicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccessibilityCategoryTopic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessibilityCategoryTopicFindFirstOrThrowArgs} args - Arguments to find a AccessibilityCategoryTopic
     * @example
     * // Get one AccessibilityCategoryTopic
     * const accessibilityCategoryTopic = await prisma.accessibilityCategoryTopic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccessibilityCategoryTopicFindFirstOrThrowArgs>(args?: SelectSubset<T, AccessibilityCategoryTopicFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccessibilityCategoryTopicClient<$Result.GetResult<Prisma.$AccessibilityCategoryTopicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccessibilityCategoryTopics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessibilityCategoryTopicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccessibilityCategoryTopics
     * const accessibilityCategoryTopics = await prisma.accessibilityCategoryTopic.findMany()
     * 
     * // Get first 10 AccessibilityCategoryTopics
     * const accessibilityCategoryTopics = await prisma.accessibilityCategoryTopic.findMany({ take: 10 })
     * 
     * // Only select the `accessibilityCategoryId`
     * const accessibilityCategoryTopicWithAccessibilityCategoryIdOnly = await prisma.accessibilityCategoryTopic.findMany({ select: { accessibilityCategoryId: true } })
     * 
     */
    findMany<T extends AccessibilityCategoryTopicFindManyArgs>(args?: SelectSubset<T, AccessibilityCategoryTopicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessibilityCategoryTopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AccessibilityCategoryTopic.
     * @param {AccessibilityCategoryTopicCreateArgs} args - Arguments to create a AccessibilityCategoryTopic.
     * @example
     * // Create one AccessibilityCategoryTopic
     * const AccessibilityCategoryTopic = await prisma.accessibilityCategoryTopic.create({
     *   data: {
     *     // ... data to create a AccessibilityCategoryTopic
     *   }
     * })
     * 
     */
    create<T extends AccessibilityCategoryTopicCreateArgs>(args: SelectSubset<T, AccessibilityCategoryTopicCreateArgs<ExtArgs>>): Prisma__AccessibilityCategoryTopicClient<$Result.GetResult<Prisma.$AccessibilityCategoryTopicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AccessibilityCategoryTopics.
     * @param {AccessibilityCategoryTopicCreateManyArgs} args - Arguments to create many AccessibilityCategoryTopics.
     * @example
     * // Create many AccessibilityCategoryTopics
     * const accessibilityCategoryTopic = await prisma.accessibilityCategoryTopic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccessibilityCategoryTopicCreateManyArgs>(args?: SelectSubset<T, AccessibilityCategoryTopicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccessibilityCategoryTopics and returns the data saved in the database.
     * @param {AccessibilityCategoryTopicCreateManyAndReturnArgs} args - Arguments to create many AccessibilityCategoryTopics.
     * @example
     * // Create many AccessibilityCategoryTopics
     * const accessibilityCategoryTopic = await prisma.accessibilityCategoryTopic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccessibilityCategoryTopics and only return the `accessibilityCategoryId`
     * const accessibilityCategoryTopicWithAccessibilityCategoryIdOnly = await prisma.accessibilityCategoryTopic.createManyAndReturn({
     *   select: { accessibilityCategoryId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccessibilityCategoryTopicCreateManyAndReturnArgs>(args?: SelectSubset<T, AccessibilityCategoryTopicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessibilityCategoryTopicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AccessibilityCategoryTopic.
     * @param {AccessibilityCategoryTopicDeleteArgs} args - Arguments to delete one AccessibilityCategoryTopic.
     * @example
     * // Delete one AccessibilityCategoryTopic
     * const AccessibilityCategoryTopic = await prisma.accessibilityCategoryTopic.delete({
     *   where: {
     *     // ... filter to delete one AccessibilityCategoryTopic
     *   }
     * })
     * 
     */
    delete<T extends AccessibilityCategoryTopicDeleteArgs>(args: SelectSubset<T, AccessibilityCategoryTopicDeleteArgs<ExtArgs>>): Prisma__AccessibilityCategoryTopicClient<$Result.GetResult<Prisma.$AccessibilityCategoryTopicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AccessibilityCategoryTopic.
     * @param {AccessibilityCategoryTopicUpdateArgs} args - Arguments to update one AccessibilityCategoryTopic.
     * @example
     * // Update one AccessibilityCategoryTopic
     * const accessibilityCategoryTopic = await prisma.accessibilityCategoryTopic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccessibilityCategoryTopicUpdateArgs>(args: SelectSubset<T, AccessibilityCategoryTopicUpdateArgs<ExtArgs>>): Prisma__AccessibilityCategoryTopicClient<$Result.GetResult<Prisma.$AccessibilityCategoryTopicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AccessibilityCategoryTopics.
     * @param {AccessibilityCategoryTopicDeleteManyArgs} args - Arguments to filter AccessibilityCategoryTopics to delete.
     * @example
     * // Delete a few AccessibilityCategoryTopics
     * const { count } = await prisma.accessibilityCategoryTopic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccessibilityCategoryTopicDeleteManyArgs>(args?: SelectSubset<T, AccessibilityCategoryTopicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccessibilityCategoryTopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessibilityCategoryTopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccessibilityCategoryTopics
     * const accessibilityCategoryTopic = await prisma.accessibilityCategoryTopic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccessibilityCategoryTopicUpdateManyArgs>(args: SelectSubset<T, AccessibilityCategoryTopicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccessibilityCategoryTopics and returns the data updated in the database.
     * @param {AccessibilityCategoryTopicUpdateManyAndReturnArgs} args - Arguments to update many AccessibilityCategoryTopics.
     * @example
     * // Update many AccessibilityCategoryTopics
     * const accessibilityCategoryTopic = await prisma.accessibilityCategoryTopic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AccessibilityCategoryTopics and only return the `accessibilityCategoryId`
     * const accessibilityCategoryTopicWithAccessibilityCategoryIdOnly = await prisma.accessibilityCategoryTopic.updateManyAndReturn({
     *   select: { accessibilityCategoryId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccessibilityCategoryTopicUpdateManyAndReturnArgs>(args: SelectSubset<T, AccessibilityCategoryTopicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessibilityCategoryTopicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AccessibilityCategoryTopic.
     * @param {AccessibilityCategoryTopicUpsertArgs} args - Arguments to update or create a AccessibilityCategoryTopic.
     * @example
     * // Update or create a AccessibilityCategoryTopic
     * const accessibilityCategoryTopic = await prisma.accessibilityCategoryTopic.upsert({
     *   create: {
     *     // ... data to create a AccessibilityCategoryTopic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccessibilityCategoryTopic we want to update
     *   }
     * })
     */
    upsert<T extends AccessibilityCategoryTopicUpsertArgs>(args: SelectSubset<T, AccessibilityCategoryTopicUpsertArgs<ExtArgs>>): Prisma__AccessibilityCategoryTopicClient<$Result.GetResult<Prisma.$AccessibilityCategoryTopicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AccessibilityCategoryTopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessibilityCategoryTopicCountArgs} args - Arguments to filter AccessibilityCategoryTopics to count.
     * @example
     * // Count the number of AccessibilityCategoryTopics
     * const count = await prisma.accessibilityCategoryTopic.count({
     *   where: {
     *     // ... the filter for the AccessibilityCategoryTopics we want to count
     *   }
     * })
    **/
    count<T extends AccessibilityCategoryTopicCountArgs>(
      args?: Subset<T, AccessibilityCategoryTopicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccessibilityCategoryTopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccessibilityCategoryTopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessibilityCategoryTopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccessibilityCategoryTopicAggregateArgs>(args: Subset<T, AccessibilityCategoryTopicAggregateArgs>): Prisma.PrismaPromise<GetAccessibilityCategoryTopicAggregateType<T>>

    /**
     * Group by AccessibilityCategoryTopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessibilityCategoryTopicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccessibilityCategoryTopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccessibilityCategoryTopicGroupByArgs['orderBy'] }
        : { orderBy?: AccessibilityCategoryTopicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccessibilityCategoryTopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccessibilityCategoryTopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccessibilityCategoryTopic model
   */
  readonly fields: AccessibilityCategoryTopicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccessibilityCategoryTopic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccessibilityCategoryTopicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accessibilityCategory<T extends AccessibilityCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccessibilityCategoryDefaultArgs<ExtArgs>>): Prisma__AccessibilityCategoryClient<$Result.GetResult<Prisma.$AccessibilityCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    topic<T extends TopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicDefaultArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AccessibilityCategoryTopic model
   */
  interface AccessibilityCategoryTopicFieldRefs {
    readonly accessibilityCategoryId: FieldRef<"AccessibilityCategoryTopic", 'Int'>
    readonly topicId: FieldRef<"AccessibilityCategoryTopic", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AccessibilityCategoryTopic findUnique
   */
  export type AccessibilityCategoryTopicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityCategoryTopic
     */
    select?: AccessibilityCategoryTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityCategoryTopic
     */
    omit?: AccessibilityCategoryTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityCategoryTopicInclude<ExtArgs> | null
    /**
     * Filter, which AccessibilityCategoryTopic to fetch.
     */
    where: AccessibilityCategoryTopicWhereUniqueInput
  }

  /**
   * AccessibilityCategoryTopic findUniqueOrThrow
   */
  export type AccessibilityCategoryTopicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityCategoryTopic
     */
    select?: AccessibilityCategoryTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityCategoryTopic
     */
    omit?: AccessibilityCategoryTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityCategoryTopicInclude<ExtArgs> | null
    /**
     * Filter, which AccessibilityCategoryTopic to fetch.
     */
    where: AccessibilityCategoryTopicWhereUniqueInput
  }

  /**
   * AccessibilityCategoryTopic findFirst
   */
  export type AccessibilityCategoryTopicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityCategoryTopic
     */
    select?: AccessibilityCategoryTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityCategoryTopic
     */
    omit?: AccessibilityCategoryTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityCategoryTopicInclude<ExtArgs> | null
    /**
     * Filter, which AccessibilityCategoryTopic to fetch.
     */
    where?: AccessibilityCategoryTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessibilityCategoryTopics to fetch.
     */
    orderBy?: AccessibilityCategoryTopicOrderByWithRelationInput | AccessibilityCategoryTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessibilityCategoryTopics.
     */
    cursor?: AccessibilityCategoryTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessibilityCategoryTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessibilityCategoryTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessibilityCategoryTopics.
     */
    distinct?: AccessibilityCategoryTopicScalarFieldEnum | AccessibilityCategoryTopicScalarFieldEnum[]
  }

  /**
   * AccessibilityCategoryTopic findFirstOrThrow
   */
  export type AccessibilityCategoryTopicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityCategoryTopic
     */
    select?: AccessibilityCategoryTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityCategoryTopic
     */
    omit?: AccessibilityCategoryTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityCategoryTopicInclude<ExtArgs> | null
    /**
     * Filter, which AccessibilityCategoryTopic to fetch.
     */
    where?: AccessibilityCategoryTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessibilityCategoryTopics to fetch.
     */
    orderBy?: AccessibilityCategoryTopicOrderByWithRelationInput | AccessibilityCategoryTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessibilityCategoryTopics.
     */
    cursor?: AccessibilityCategoryTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessibilityCategoryTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessibilityCategoryTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessibilityCategoryTopics.
     */
    distinct?: AccessibilityCategoryTopicScalarFieldEnum | AccessibilityCategoryTopicScalarFieldEnum[]
  }

  /**
   * AccessibilityCategoryTopic findMany
   */
  export type AccessibilityCategoryTopicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityCategoryTopic
     */
    select?: AccessibilityCategoryTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityCategoryTopic
     */
    omit?: AccessibilityCategoryTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityCategoryTopicInclude<ExtArgs> | null
    /**
     * Filter, which AccessibilityCategoryTopics to fetch.
     */
    where?: AccessibilityCategoryTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessibilityCategoryTopics to fetch.
     */
    orderBy?: AccessibilityCategoryTopicOrderByWithRelationInput | AccessibilityCategoryTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccessibilityCategoryTopics.
     */
    cursor?: AccessibilityCategoryTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessibilityCategoryTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessibilityCategoryTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessibilityCategoryTopics.
     */
    distinct?: AccessibilityCategoryTopicScalarFieldEnum | AccessibilityCategoryTopicScalarFieldEnum[]
  }

  /**
   * AccessibilityCategoryTopic create
   */
  export type AccessibilityCategoryTopicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityCategoryTopic
     */
    select?: AccessibilityCategoryTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityCategoryTopic
     */
    omit?: AccessibilityCategoryTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityCategoryTopicInclude<ExtArgs> | null
    /**
     * The data needed to create a AccessibilityCategoryTopic.
     */
    data: XOR<AccessibilityCategoryTopicCreateInput, AccessibilityCategoryTopicUncheckedCreateInput>
  }

  /**
   * AccessibilityCategoryTopic createMany
   */
  export type AccessibilityCategoryTopicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccessibilityCategoryTopics.
     */
    data: AccessibilityCategoryTopicCreateManyInput | AccessibilityCategoryTopicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccessibilityCategoryTopic createManyAndReturn
   */
  export type AccessibilityCategoryTopicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityCategoryTopic
     */
    select?: AccessibilityCategoryTopicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityCategoryTopic
     */
    omit?: AccessibilityCategoryTopicOmit<ExtArgs> | null
    /**
     * The data used to create many AccessibilityCategoryTopics.
     */
    data: AccessibilityCategoryTopicCreateManyInput | AccessibilityCategoryTopicCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityCategoryTopicIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccessibilityCategoryTopic update
   */
  export type AccessibilityCategoryTopicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityCategoryTopic
     */
    select?: AccessibilityCategoryTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityCategoryTopic
     */
    omit?: AccessibilityCategoryTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityCategoryTopicInclude<ExtArgs> | null
    /**
     * The data needed to update a AccessibilityCategoryTopic.
     */
    data: XOR<AccessibilityCategoryTopicUpdateInput, AccessibilityCategoryTopicUncheckedUpdateInput>
    /**
     * Choose, which AccessibilityCategoryTopic to update.
     */
    where: AccessibilityCategoryTopicWhereUniqueInput
  }

  /**
   * AccessibilityCategoryTopic updateMany
   */
  export type AccessibilityCategoryTopicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccessibilityCategoryTopics.
     */
    data: XOR<AccessibilityCategoryTopicUpdateManyMutationInput, AccessibilityCategoryTopicUncheckedUpdateManyInput>
    /**
     * Filter which AccessibilityCategoryTopics to update
     */
    where?: AccessibilityCategoryTopicWhereInput
    /**
     * Limit how many AccessibilityCategoryTopics to update.
     */
    limit?: number
  }

  /**
   * AccessibilityCategoryTopic updateManyAndReturn
   */
  export type AccessibilityCategoryTopicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityCategoryTopic
     */
    select?: AccessibilityCategoryTopicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityCategoryTopic
     */
    omit?: AccessibilityCategoryTopicOmit<ExtArgs> | null
    /**
     * The data used to update AccessibilityCategoryTopics.
     */
    data: XOR<AccessibilityCategoryTopicUpdateManyMutationInput, AccessibilityCategoryTopicUncheckedUpdateManyInput>
    /**
     * Filter which AccessibilityCategoryTopics to update
     */
    where?: AccessibilityCategoryTopicWhereInput
    /**
     * Limit how many AccessibilityCategoryTopics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityCategoryTopicIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccessibilityCategoryTopic upsert
   */
  export type AccessibilityCategoryTopicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityCategoryTopic
     */
    select?: AccessibilityCategoryTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityCategoryTopic
     */
    omit?: AccessibilityCategoryTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityCategoryTopicInclude<ExtArgs> | null
    /**
     * The filter to search for the AccessibilityCategoryTopic to update in case it exists.
     */
    where: AccessibilityCategoryTopicWhereUniqueInput
    /**
     * In case the AccessibilityCategoryTopic found by the `where` argument doesn't exist, create a new AccessibilityCategoryTopic with this data.
     */
    create: XOR<AccessibilityCategoryTopicCreateInput, AccessibilityCategoryTopicUncheckedCreateInput>
    /**
     * In case the AccessibilityCategoryTopic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccessibilityCategoryTopicUpdateInput, AccessibilityCategoryTopicUncheckedUpdateInput>
  }

  /**
   * AccessibilityCategoryTopic delete
   */
  export type AccessibilityCategoryTopicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityCategoryTopic
     */
    select?: AccessibilityCategoryTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityCategoryTopic
     */
    omit?: AccessibilityCategoryTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityCategoryTopicInclude<ExtArgs> | null
    /**
     * Filter which AccessibilityCategoryTopic to delete.
     */
    where: AccessibilityCategoryTopicWhereUniqueInput
  }

  /**
   * AccessibilityCategoryTopic deleteMany
   */
  export type AccessibilityCategoryTopicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessibilityCategoryTopics to delete
     */
    where?: AccessibilityCategoryTopicWhereInput
    /**
     * Limit how many AccessibilityCategoryTopics to delete.
     */
    limit?: number
  }

  /**
   * AccessibilityCategoryTopic without action
   */
  export type AccessibilityCategoryTopicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityCategoryTopic
     */
    select?: AccessibilityCategoryTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityCategoryTopic
     */
    omit?: AccessibilityCategoryTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityCategoryTopicInclude<ExtArgs> | null
  }


  /**
   * Model AccessibilityNeed
   */

  export type AggregateAccessibilityNeed = {
    _count: AccessibilityNeedCountAggregateOutputType | null
    _avg: AccessibilityNeedAvgAggregateOutputType | null
    _sum: AccessibilityNeedSumAggregateOutputType | null
    _min: AccessibilityNeedMinAggregateOutputType | null
    _max: AccessibilityNeedMaxAggregateOutputType | null
  }

  export type AccessibilityNeedAvgAggregateOutputType = {
    id: number | null
    accessibilityCategoryId: number | null
  }

  export type AccessibilityNeedSumAggregateOutputType = {
    id: number | null
    accessibilityCategoryId: number | null
  }

  export type AccessibilityNeedMinAggregateOutputType = {
    id: number | null
    accessibilityCategoryId: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccessibilityNeedMaxAggregateOutputType = {
    id: number | null
    accessibilityCategoryId: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccessibilityNeedCountAggregateOutputType = {
    id: number
    accessibilityCategoryId: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccessibilityNeedAvgAggregateInputType = {
    id?: true
    accessibilityCategoryId?: true
  }

  export type AccessibilityNeedSumAggregateInputType = {
    id?: true
    accessibilityCategoryId?: true
  }

  export type AccessibilityNeedMinAggregateInputType = {
    id?: true
    accessibilityCategoryId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccessibilityNeedMaxAggregateInputType = {
    id?: true
    accessibilityCategoryId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccessibilityNeedCountAggregateInputType = {
    id?: true
    accessibilityCategoryId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccessibilityNeedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessibilityNeed to aggregate.
     */
    where?: AccessibilityNeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessibilityNeeds to fetch.
     */
    orderBy?: AccessibilityNeedOrderByWithRelationInput | AccessibilityNeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccessibilityNeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessibilityNeeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessibilityNeeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccessibilityNeeds
    **/
    _count?: true | AccessibilityNeedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccessibilityNeedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccessibilityNeedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccessibilityNeedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccessibilityNeedMaxAggregateInputType
  }

  export type GetAccessibilityNeedAggregateType<T extends AccessibilityNeedAggregateArgs> = {
        [P in keyof T & keyof AggregateAccessibilityNeed]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccessibilityNeed[P]>
      : GetScalarType<T[P], AggregateAccessibilityNeed[P]>
  }




  export type AccessibilityNeedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessibilityNeedWhereInput
    orderBy?: AccessibilityNeedOrderByWithAggregationInput | AccessibilityNeedOrderByWithAggregationInput[]
    by: AccessibilityNeedScalarFieldEnum[] | AccessibilityNeedScalarFieldEnum
    having?: AccessibilityNeedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccessibilityNeedCountAggregateInputType | true
    _avg?: AccessibilityNeedAvgAggregateInputType
    _sum?: AccessibilityNeedSumAggregateInputType
    _min?: AccessibilityNeedMinAggregateInputType
    _max?: AccessibilityNeedMaxAggregateInputType
  }

  export type AccessibilityNeedGroupByOutputType = {
    id: number
    accessibilityCategoryId: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: AccessibilityNeedCountAggregateOutputType | null
    _avg: AccessibilityNeedAvgAggregateOutputType | null
    _sum: AccessibilityNeedSumAggregateOutputType | null
    _min: AccessibilityNeedMinAggregateOutputType | null
    _max: AccessibilityNeedMaxAggregateOutputType | null
  }

  type GetAccessibilityNeedGroupByPayload<T extends AccessibilityNeedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccessibilityNeedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccessibilityNeedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccessibilityNeedGroupByOutputType[P]>
            : GetScalarType<T[P], AccessibilityNeedGroupByOutputType[P]>
        }
      >
    >


  export type AccessibilityNeedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accessibilityCategoryId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accessibilityCategory?: boolean | AccessibilityCategoryDefaultArgs<ExtArgs>
    themes?: boolean | AccessibilityNeed$themesArgs<ExtArgs>
    _count?: boolean | AccessibilityNeedCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accessibilityNeed"]>

  export type AccessibilityNeedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accessibilityCategoryId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accessibilityCategory?: boolean | AccessibilityCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accessibilityNeed"]>

  export type AccessibilityNeedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accessibilityCategoryId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accessibilityCategory?: boolean | AccessibilityCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accessibilityNeed"]>

  export type AccessibilityNeedSelectScalar = {
    id?: boolean
    accessibilityCategoryId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccessibilityNeedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accessibilityCategoryId" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["accessibilityNeed"]>
  export type AccessibilityNeedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accessibilityCategory?: boolean | AccessibilityCategoryDefaultArgs<ExtArgs>
    themes?: boolean | AccessibilityNeed$themesArgs<ExtArgs>
    _count?: boolean | AccessibilityNeedCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccessibilityNeedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accessibilityCategory?: boolean | AccessibilityCategoryDefaultArgs<ExtArgs>
  }
  export type AccessibilityNeedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accessibilityCategory?: boolean | AccessibilityCategoryDefaultArgs<ExtArgs>
  }

  export type $AccessibilityNeedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccessibilityNeed"
    objects: {
      accessibilityCategory: Prisma.$AccessibilityCategoryPayload<ExtArgs>
      themes: Prisma.$AccessibilityThemePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      accessibilityCategoryId: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["accessibilityNeed"]>
    composites: {}
  }

  type AccessibilityNeedGetPayload<S extends boolean | null | undefined | AccessibilityNeedDefaultArgs> = $Result.GetResult<Prisma.$AccessibilityNeedPayload, S>

  type AccessibilityNeedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccessibilityNeedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccessibilityNeedCountAggregateInputType | true
    }

  export interface AccessibilityNeedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccessibilityNeed'], meta: { name: 'AccessibilityNeed' } }
    /**
     * Find zero or one AccessibilityNeed that matches the filter.
     * @param {AccessibilityNeedFindUniqueArgs} args - Arguments to find a AccessibilityNeed
     * @example
     * // Get one AccessibilityNeed
     * const accessibilityNeed = await prisma.accessibilityNeed.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccessibilityNeedFindUniqueArgs>(args: SelectSubset<T, AccessibilityNeedFindUniqueArgs<ExtArgs>>): Prisma__AccessibilityNeedClient<$Result.GetResult<Prisma.$AccessibilityNeedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AccessibilityNeed that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccessibilityNeedFindUniqueOrThrowArgs} args - Arguments to find a AccessibilityNeed
     * @example
     * // Get one AccessibilityNeed
     * const accessibilityNeed = await prisma.accessibilityNeed.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccessibilityNeedFindUniqueOrThrowArgs>(args: SelectSubset<T, AccessibilityNeedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccessibilityNeedClient<$Result.GetResult<Prisma.$AccessibilityNeedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccessibilityNeed that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessibilityNeedFindFirstArgs} args - Arguments to find a AccessibilityNeed
     * @example
     * // Get one AccessibilityNeed
     * const accessibilityNeed = await prisma.accessibilityNeed.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccessibilityNeedFindFirstArgs>(args?: SelectSubset<T, AccessibilityNeedFindFirstArgs<ExtArgs>>): Prisma__AccessibilityNeedClient<$Result.GetResult<Prisma.$AccessibilityNeedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccessibilityNeed that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessibilityNeedFindFirstOrThrowArgs} args - Arguments to find a AccessibilityNeed
     * @example
     * // Get one AccessibilityNeed
     * const accessibilityNeed = await prisma.accessibilityNeed.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccessibilityNeedFindFirstOrThrowArgs>(args?: SelectSubset<T, AccessibilityNeedFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccessibilityNeedClient<$Result.GetResult<Prisma.$AccessibilityNeedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccessibilityNeeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessibilityNeedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccessibilityNeeds
     * const accessibilityNeeds = await prisma.accessibilityNeed.findMany()
     * 
     * // Get first 10 AccessibilityNeeds
     * const accessibilityNeeds = await prisma.accessibilityNeed.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accessibilityNeedWithIdOnly = await prisma.accessibilityNeed.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccessibilityNeedFindManyArgs>(args?: SelectSubset<T, AccessibilityNeedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessibilityNeedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AccessibilityNeed.
     * @param {AccessibilityNeedCreateArgs} args - Arguments to create a AccessibilityNeed.
     * @example
     * // Create one AccessibilityNeed
     * const AccessibilityNeed = await prisma.accessibilityNeed.create({
     *   data: {
     *     // ... data to create a AccessibilityNeed
     *   }
     * })
     * 
     */
    create<T extends AccessibilityNeedCreateArgs>(args: SelectSubset<T, AccessibilityNeedCreateArgs<ExtArgs>>): Prisma__AccessibilityNeedClient<$Result.GetResult<Prisma.$AccessibilityNeedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AccessibilityNeeds.
     * @param {AccessibilityNeedCreateManyArgs} args - Arguments to create many AccessibilityNeeds.
     * @example
     * // Create many AccessibilityNeeds
     * const accessibilityNeed = await prisma.accessibilityNeed.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccessibilityNeedCreateManyArgs>(args?: SelectSubset<T, AccessibilityNeedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccessibilityNeeds and returns the data saved in the database.
     * @param {AccessibilityNeedCreateManyAndReturnArgs} args - Arguments to create many AccessibilityNeeds.
     * @example
     * // Create many AccessibilityNeeds
     * const accessibilityNeed = await prisma.accessibilityNeed.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccessibilityNeeds and only return the `id`
     * const accessibilityNeedWithIdOnly = await prisma.accessibilityNeed.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccessibilityNeedCreateManyAndReturnArgs>(args?: SelectSubset<T, AccessibilityNeedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessibilityNeedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AccessibilityNeed.
     * @param {AccessibilityNeedDeleteArgs} args - Arguments to delete one AccessibilityNeed.
     * @example
     * // Delete one AccessibilityNeed
     * const AccessibilityNeed = await prisma.accessibilityNeed.delete({
     *   where: {
     *     // ... filter to delete one AccessibilityNeed
     *   }
     * })
     * 
     */
    delete<T extends AccessibilityNeedDeleteArgs>(args: SelectSubset<T, AccessibilityNeedDeleteArgs<ExtArgs>>): Prisma__AccessibilityNeedClient<$Result.GetResult<Prisma.$AccessibilityNeedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AccessibilityNeed.
     * @param {AccessibilityNeedUpdateArgs} args - Arguments to update one AccessibilityNeed.
     * @example
     * // Update one AccessibilityNeed
     * const accessibilityNeed = await prisma.accessibilityNeed.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccessibilityNeedUpdateArgs>(args: SelectSubset<T, AccessibilityNeedUpdateArgs<ExtArgs>>): Prisma__AccessibilityNeedClient<$Result.GetResult<Prisma.$AccessibilityNeedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AccessibilityNeeds.
     * @param {AccessibilityNeedDeleteManyArgs} args - Arguments to filter AccessibilityNeeds to delete.
     * @example
     * // Delete a few AccessibilityNeeds
     * const { count } = await prisma.accessibilityNeed.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccessibilityNeedDeleteManyArgs>(args?: SelectSubset<T, AccessibilityNeedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccessibilityNeeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessibilityNeedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccessibilityNeeds
     * const accessibilityNeed = await prisma.accessibilityNeed.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccessibilityNeedUpdateManyArgs>(args: SelectSubset<T, AccessibilityNeedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccessibilityNeeds and returns the data updated in the database.
     * @param {AccessibilityNeedUpdateManyAndReturnArgs} args - Arguments to update many AccessibilityNeeds.
     * @example
     * // Update many AccessibilityNeeds
     * const accessibilityNeed = await prisma.accessibilityNeed.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AccessibilityNeeds and only return the `id`
     * const accessibilityNeedWithIdOnly = await prisma.accessibilityNeed.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccessibilityNeedUpdateManyAndReturnArgs>(args: SelectSubset<T, AccessibilityNeedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessibilityNeedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AccessibilityNeed.
     * @param {AccessibilityNeedUpsertArgs} args - Arguments to update or create a AccessibilityNeed.
     * @example
     * // Update or create a AccessibilityNeed
     * const accessibilityNeed = await prisma.accessibilityNeed.upsert({
     *   create: {
     *     // ... data to create a AccessibilityNeed
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccessibilityNeed we want to update
     *   }
     * })
     */
    upsert<T extends AccessibilityNeedUpsertArgs>(args: SelectSubset<T, AccessibilityNeedUpsertArgs<ExtArgs>>): Prisma__AccessibilityNeedClient<$Result.GetResult<Prisma.$AccessibilityNeedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AccessibilityNeeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessibilityNeedCountArgs} args - Arguments to filter AccessibilityNeeds to count.
     * @example
     * // Count the number of AccessibilityNeeds
     * const count = await prisma.accessibilityNeed.count({
     *   where: {
     *     // ... the filter for the AccessibilityNeeds we want to count
     *   }
     * })
    **/
    count<T extends AccessibilityNeedCountArgs>(
      args?: Subset<T, AccessibilityNeedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccessibilityNeedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccessibilityNeed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessibilityNeedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccessibilityNeedAggregateArgs>(args: Subset<T, AccessibilityNeedAggregateArgs>): Prisma.PrismaPromise<GetAccessibilityNeedAggregateType<T>>

    /**
     * Group by AccessibilityNeed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessibilityNeedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccessibilityNeedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccessibilityNeedGroupByArgs['orderBy'] }
        : { orderBy?: AccessibilityNeedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccessibilityNeedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccessibilityNeedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccessibilityNeed model
   */
  readonly fields: AccessibilityNeedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccessibilityNeed.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccessibilityNeedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accessibilityCategory<T extends AccessibilityCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccessibilityCategoryDefaultArgs<ExtArgs>>): Prisma__AccessibilityCategoryClient<$Result.GetResult<Prisma.$AccessibilityCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    themes<T extends AccessibilityNeed$themesArgs<ExtArgs> = {}>(args?: Subset<T, AccessibilityNeed$themesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessibilityThemePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AccessibilityNeed model
   */
  interface AccessibilityNeedFieldRefs {
    readonly id: FieldRef<"AccessibilityNeed", 'Int'>
    readonly accessibilityCategoryId: FieldRef<"AccessibilityNeed", 'Int'>
    readonly name: FieldRef<"AccessibilityNeed", 'String'>
    readonly createdAt: FieldRef<"AccessibilityNeed", 'DateTime'>
    readonly updatedAt: FieldRef<"AccessibilityNeed", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AccessibilityNeed findUnique
   */
  export type AccessibilityNeedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityNeed
     */
    select?: AccessibilityNeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityNeed
     */
    omit?: AccessibilityNeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityNeedInclude<ExtArgs> | null
    /**
     * Filter, which AccessibilityNeed to fetch.
     */
    where: AccessibilityNeedWhereUniqueInput
  }

  /**
   * AccessibilityNeed findUniqueOrThrow
   */
  export type AccessibilityNeedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityNeed
     */
    select?: AccessibilityNeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityNeed
     */
    omit?: AccessibilityNeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityNeedInclude<ExtArgs> | null
    /**
     * Filter, which AccessibilityNeed to fetch.
     */
    where: AccessibilityNeedWhereUniqueInput
  }

  /**
   * AccessibilityNeed findFirst
   */
  export type AccessibilityNeedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityNeed
     */
    select?: AccessibilityNeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityNeed
     */
    omit?: AccessibilityNeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityNeedInclude<ExtArgs> | null
    /**
     * Filter, which AccessibilityNeed to fetch.
     */
    where?: AccessibilityNeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessibilityNeeds to fetch.
     */
    orderBy?: AccessibilityNeedOrderByWithRelationInput | AccessibilityNeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessibilityNeeds.
     */
    cursor?: AccessibilityNeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessibilityNeeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessibilityNeeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessibilityNeeds.
     */
    distinct?: AccessibilityNeedScalarFieldEnum | AccessibilityNeedScalarFieldEnum[]
  }

  /**
   * AccessibilityNeed findFirstOrThrow
   */
  export type AccessibilityNeedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityNeed
     */
    select?: AccessibilityNeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityNeed
     */
    omit?: AccessibilityNeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityNeedInclude<ExtArgs> | null
    /**
     * Filter, which AccessibilityNeed to fetch.
     */
    where?: AccessibilityNeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessibilityNeeds to fetch.
     */
    orderBy?: AccessibilityNeedOrderByWithRelationInput | AccessibilityNeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessibilityNeeds.
     */
    cursor?: AccessibilityNeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessibilityNeeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessibilityNeeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessibilityNeeds.
     */
    distinct?: AccessibilityNeedScalarFieldEnum | AccessibilityNeedScalarFieldEnum[]
  }

  /**
   * AccessibilityNeed findMany
   */
  export type AccessibilityNeedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityNeed
     */
    select?: AccessibilityNeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityNeed
     */
    omit?: AccessibilityNeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityNeedInclude<ExtArgs> | null
    /**
     * Filter, which AccessibilityNeeds to fetch.
     */
    where?: AccessibilityNeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessibilityNeeds to fetch.
     */
    orderBy?: AccessibilityNeedOrderByWithRelationInput | AccessibilityNeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccessibilityNeeds.
     */
    cursor?: AccessibilityNeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessibilityNeeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessibilityNeeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessibilityNeeds.
     */
    distinct?: AccessibilityNeedScalarFieldEnum | AccessibilityNeedScalarFieldEnum[]
  }

  /**
   * AccessibilityNeed create
   */
  export type AccessibilityNeedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityNeed
     */
    select?: AccessibilityNeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityNeed
     */
    omit?: AccessibilityNeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityNeedInclude<ExtArgs> | null
    /**
     * The data needed to create a AccessibilityNeed.
     */
    data: XOR<AccessibilityNeedCreateInput, AccessibilityNeedUncheckedCreateInput>
  }

  /**
   * AccessibilityNeed createMany
   */
  export type AccessibilityNeedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccessibilityNeeds.
     */
    data: AccessibilityNeedCreateManyInput | AccessibilityNeedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccessibilityNeed createManyAndReturn
   */
  export type AccessibilityNeedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityNeed
     */
    select?: AccessibilityNeedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityNeed
     */
    omit?: AccessibilityNeedOmit<ExtArgs> | null
    /**
     * The data used to create many AccessibilityNeeds.
     */
    data: AccessibilityNeedCreateManyInput | AccessibilityNeedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityNeedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccessibilityNeed update
   */
  export type AccessibilityNeedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityNeed
     */
    select?: AccessibilityNeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityNeed
     */
    omit?: AccessibilityNeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityNeedInclude<ExtArgs> | null
    /**
     * The data needed to update a AccessibilityNeed.
     */
    data: XOR<AccessibilityNeedUpdateInput, AccessibilityNeedUncheckedUpdateInput>
    /**
     * Choose, which AccessibilityNeed to update.
     */
    where: AccessibilityNeedWhereUniqueInput
  }

  /**
   * AccessibilityNeed updateMany
   */
  export type AccessibilityNeedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccessibilityNeeds.
     */
    data: XOR<AccessibilityNeedUpdateManyMutationInput, AccessibilityNeedUncheckedUpdateManyInput>
    /**
     * Filter which AccessibilityNeeds to update
     */
    where?: AccessibilityNeedWhereInput
    /**
     * Limit how many AccessibilityNeeds to update.
     */
    limit?: number
  }

  /**
   * AccessibilityNeed updateManyAndReturn
   */
  export type AccessibilityNeedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityNeed
     */
    select?: AccessibilityNeedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityNeed
     */
    omit?: AccessibilityNeedOmit<ExtArgs> | null
    /**
     * The data used to update AccessibilityNeeds.
     */
    data: XOR<AccessibilityNeedUpdateManyMutationInput, AccessibilityNeedUncheckedUpdateManyInput>
    /**
     * Filter which AccessibilityNeeds to update
     */
    where?: AccessibilityNeedWhereInput
    /**
     * Limit how many AccessibilityNeeds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityNeedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccessibilityNeed upsert
   */
  export type AccessibilityNeedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityNeed
     */
    select?: AccessibilityNeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityNeed
     */
    omit?: AccessibilityNeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityNeedInclude<ExtArgs> | null
    /**
     * The filter to search for the AccessibilityNeed to update in case it exists.
     */
    where: AccessibilityNeedWhereUniqueInput
    /**
     * In case the AccessibilityNeed found by the `where` argument doesn't exist, create a new AccessibilityNeed with this data.
     */
    create: XOR<AccessibilityNeedCreateInput, AccessibilityNeedUncheckedCreateInput>
    /**
     * In case the AccessibilityNeed was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccessibilityNeedUpdateInput, AccessibilityNeedUncheckedUpdateInput>
  }

  /**
   * AccessibilityNeed delete
   */
  export type AccessibilityNeedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityNeed
     */
    select?: AccessibilityNeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityNeed
     */
    omit?: AccessibilityNeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityNeedInclude<ExtArgs> | null
    /**
     * Filter which AccessibilityNeed to delete.
     */
    where: AccessibilityNeedWhereUniqueInput
  }

  /**
   * AccessibilityNeed deleteMany
   */
  export type AccessibilityNeedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessibilityNeeds to delete
     */
    where?: AccessibilityNeedWhereInput
    /**
     * Limit how many AccessibilityNeeds to delete.
     */
    limit?: number
  }

  /**
   * AccessibilityNeed.themes
   */
  export type AccessibilityNeed$themesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityTheme
     */
    select?: AccessibilityThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityTheme
     */
    omit?: AccessibilityThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityThemeInclude<ExtArgs> | null
    where?: AccessibilityThemeWhereInput
    orderBy?: AccessibilityThemeOrderByWithRelationInput | AccessibilityThemeOrderByWithRelationInput[]
    cursor?: AccessibilityThemeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccessibilityThemeScalarFieldEnum | AccessibilityThemeScalarFieldEnum[]
  }

  /**
   * AccessibilityNeed without action
   */
  export type AccessibilityNeedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityNeed
     */
    select?: AccessibilityNeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityNeed
     */
    omit?: AccessibilityNeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityNeedInclude<ExtArgs> | null
  }


  /**
   * Model AccessibilityTheme
   */

  export type AggregateAccessibilityTheme = {
    _count: AccessibilityThemeCountAggregateOutputType | null
    _avg: AccessibilityThemeAvgAggregateOutputType | null
    _sum: AccessibilityThemeSumAggregateOutputType | null
    _min: AccessibilityThemeMinAggregateOutputType | null
    _max: AccessibilityThemeMaxAggregateOutputType | null
  }

  export type AccessibilityThemeAvgAggregateOutputType = {
    id: number | null
    accessibilityCategoryId: number | null
    accessibilityNeedId: number | null
  }

  export type AccessibilityThemeSumAggregateOutputType = {
    id: number | null
    accessibilityCategoryId: number | null
    accessibilityNeedId: number | null
  }

  export type AccessibilityThemeMinAggregateOutputType = {
    id: number | null
    accessibilityCategoryId: number | null
    accessibilityNeedId: number | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccessibilityThemeMaxAggregateOutputType = {
    id: number | null
    accessibilityCategoryId: number | null
    accessibilityNeedId: number | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccessibilityThemeCountAggregateOutputType = {
    id: number
    accessibilityCategoryId: number
    accessibilityNeedId: number
    title: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccessibilityThemeAvgAggregateInputType = {
    id?: true
    accessibilityCategoryId?: true
    accessibilityNeedId?: true
  }

  export type AccessibilityThemeSumAggregateInputType = {
    id?: true
    accessibilityCategoryId?: true
    accessibilityNeedId?: true
  }

  export type AccessibilityThemeMinAggregateInputType = {
    id?: true
    accessibilityCategoryId?: true
    accessibilityNeedId?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccessibilityThemeMaxAggregateInputType = {
    id?: true
    accessibilityCategoryId?: true
    accessibilityNeedId?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccessibilityThemeCountAggregateInputType = {
    id?: true
    accessibilityCategoryId?: true
    accessibilityNeedId?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccessibilityThemeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessibilityTheme to aggregate.
     */
    where?: AccessibilityThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessibilityThemes to fetch.
     */
    orderBy?: AccessibilityThemeOrderByWithRelationInput | AccessibilityThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccessibilityThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessibilityThemes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessibilityThemes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccessibilityThemes
    **/
    _count?: true | AccessibilityThemeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccessibilityThemeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccessibilityThemeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccessibilityThemeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccessibilityThemeMaxAggregateInputType
  }

  export type GetAccessibilityThemeAggregateType<T extends AccessibilityThemeAggregateArgs> = {
        [P in keyof T & keyof AggregateAccessibilityTheme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccessibilityTheme[P]>
      : GetScalarType<T[P], AggregateAccessibilityTheme[P]>
  }




  export type AccessibilityThemeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessibilityThemeWhereInput
    orderBy?: AccessibilityThemeOrderByWithAggregationInput | AccessibilityThemeOrderByWithAggregationInput[]
    by: AccessibilityThemeScalarFieldEnum[] | AccessibilityThemeScalarFieldEnum
    having?: AccessibilityThemeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccessibilityThemeCountAggregateInputType | true
    _avg?: AccessibilityThemeAvgAggregateInputType
    _sum?: AccessibilityThemeSumAggregateInputType
    _min?: AccessibilityThemeMinAggregateInputType
    _max?: AccessibilityThemeMaxAggregateInputType
  }

  export type AccessibilityThemeGroupByOutputType = {
    id: number
    accessibilityCategoryId: number
    accessibilityNeedId: number | null
    title: string
    content: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccessibilityThemeCountAggregateOutputType | null
    _avg: AccessibilityThemeAvgAggregateOutputType | null
    _sum: AccessibilityThemeSumAggregateOutputType | null
    _min: AccessibilityThemeMinAggregateOutputType | null
    _max: AccessibilityThemeMaxAggregateOutputType | null
  }

  type GetAccessibilityThemeGroupByPayload<T extends AccessibilityThemeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccessibilityThemeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccessibilityThemeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccessibilityThemeGroupByOutputType[P]>
            : GetScalarType<T[P], AccessibilityThemeGroupByOutputType[P]>
        }
      >
    >


  export type AccessibilityThemeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accessibilityCategoryId?: boolean
    accessibilityNeedId?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accessibilityCategory?: boolean | AccessibilityCategoryDefaultArgs<ExtArgs>
    accessibilityNeed?: boolean | AccessibilityTheme$accessibilityNeedArgs<ExtArgs>
  }, ExtArgs["result"]["accessibilityTheme"]>

  export type AccessibilityThemeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accessibilityCategoryId?: boolean
    accessibilityNeedId?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accessibilityCategory?: boolean | AccessibilityCategoryDefaultArgs<ExtArgs>
    accessibilityNeed?: boolean | AccessibilityTheme$accessibilityNeedArgs<ExtArgs>
  }, ExtArgs["result"]["accessibilityTheme"]>

  export type AccessibilityThemeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accessibilityCategoryId?: boolean
    accessibilityNeedId?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accessibilityCategory?: boolean | AccessibilityCategoryDefaultArgs<ExtArgs>
    accessibilityNeed?: boolean | AccessibilityTheme$accessibilityNeedArgs<ExtArgs>
  }, ExtArgs["result"]["accessibilityTheme"]>

  export type AccessibilityThemeSelectScalar = {
    id?: boolean
    accessibilityCategoryId?: boolean
    accessibilityNeedId?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccessibilityThemeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accessibilityCategoryId" | "accessibilityNeedId" | "title" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["accessibilityTheme"]>
  export type AccessibilityThemeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accessibilityCategory?: boolean | AccessibilityCategoryDefaultArgs<ExtArgs>
    accessibilityNeed?: boolean | AccessibilityTheme$accessibilityNeedArgs<ExtArgs>
  }
  export type AccessibilityThemeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accessibilityCategory?: boolean | AccessibilityCategoryDefaultArgs<ExtArgs>
    accessibilityNeed?: boolean | AccessibilityTheme$accessibilityNeedArgs<ExtArgs>
  }
  export type AccessibilityThemeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accessibilityCategory?: boolean | AccessibilityCategoryDefaultArgs<ExtArgs>
    accessibilityNeed?: boolean | AccessibilityTheme$accessibilityNeedArgs<ExtArgs>
  }

  export type $AccessibilityThemePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccessibilityTheme"
    objects: {
      accessibilityCategory: Prisma.$AccessibilityCategoryPayload<ExtArgs>
      accessibilityNeed: Prisma.$AccessibilityNeedPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      accessibilityCategoryId: number
      accessibilityNeedId: number | null
      title: string
      content: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["accessibilityTheme"]>
    composites: {}
  }

  type AccessibilityThemeGetPayload<S extends boolean | null | undefined | AccessibilityThemeDefaultArgs> = $Result.GetResult<Prisma.$AccessibilityThemePayload, S>

  type AccessibilityThemeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccessibilityThemeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccessibilityThemeCountAggregateInputType | true
    }

  export interface AccessibilityThemeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccessibilityTheme'], meta: { name: 'AccessibilityTheme' } }
    /**
     * Find zero or one AccessibilityTheme that matches the filter.
     * @param {AccessibilityThemeFindUniqueArgs} args - Arguments to find a AccessibilityTheme
     * @example
     * // Get one AccessibilityTheme
     * const accessibilityTheme = await prisma.accessibilityTheme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccessibilityThemeFindUniqueArgs>(args: SelectSubset<T, AccessibilityThemeFindUniqueArgs<ExtArgs>>): Prisma__AccessibilityThemeClient<$Result.GetResult<Prisma.$AccessibilityThemePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AccessibilityTheme that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccessibilityThemeFindUniqueOrThrowArgs} args - Arguments to find a AccessibilityTheme
     * @example
     * // Get one AccessibilityTheme
     * const accessibilityTheme = await prisma.accessibilityTheme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccessibilityThemeFindUniqueOrThrowArgs>(args: SelectSubset<T, AccessibilityThemeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccessibilityThemeClient<$Result.GetResult<Prisma.$AccessibilityThemePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccessibilityTheme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessibilityThemeFindFirstArgs} args - Arguments to find a AccessibilityTheme
     * @example
     * // Get one AccessibilityTheme
     * const accessibilityTheme = await prisma.accessibilityTheme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccessibilityThemeFindFirstArgs>(args?: SelectSubset<T, AccessibilityThemeFindFirstArgs<ExtArgs>>): Prisma__AccessibilityThemeClient<$Result.GetResult<Prisma.$AccessibilityThemePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccessibilityTheme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessibilityThemeFindFirstOrThrowArgs} args - Arguments to find a AccessibilityTheme
     * @example
     * // Get one AccessibilityTheme
     * const accessibilityTheme = await prisma.accessibilityTheme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccessibilityThemeFindFirstOrThrowArgs>(args?: SelectSubset<T, AccessibilityThemeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccessibilityThemeClient<$Result.GetResult<Prisma.$AccessibilityThemePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccessibilityThemes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessibilityThemeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccessibilityThemes
     * const accessibilityThemes = await prisma.accessibilityTheme.findMany()
     * 
     * // Get first 10 AccessibilityThemes
     * const accessibilityThemes = await prisma.accessibilityTheme.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accessibilityThemeWithIdOnly = await prisma.accessibilityTheme.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccessibilityThemeFindManyArgs>(args?: SelectSubset<T, AccessibilityThemeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessibilityThemePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AccessibilityTheme.
     * @param {AccessibilityThemeCreateArgs} args - Arguments to create a AccessibilityTheme.
     * @example
     * // Create one AccessibilityTheme
     * const AccessibilityTheme = await prisma.accessibilityTheme.create({
     *   data: {
     *     // ... data to create a AccessibilityTheme
     *   }
     * })
     * 
     */
    create<T extends AccessibilityThemeCreateArgs>(args: SelectSubset<T, AccessibilityThemeCreateArgs<ExtArgs>>): Prisma__AccessibilityThemeClient<$Result.GetResult<Prisma.$AccessibilityThemePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AccessibilityThemes.
     * @param {AccessibilityThemeCreateManyArgs} args - Arguments to create many AccessibilityThemes.
     * @example
     * // Create many AccessibilityThemes
     * const accessibilityTheme = await prisma.accessibilityTheme.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccessibilityThemeCreateManyArgs>(args?: SelectSubset<T, AccessibilityThemeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccessibilityThemes and returns the data saved in the database.
     * @param {AccessibilityThemeCreateManyAndReturnArgs} args - Arguments to create many AccessibilityThemes.
     * @example
     * // Create many AccessibilityThemes
     * const accessibilityTheme = await prisma.accessibilityTheme.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccessibilityThemes and only return the `id`
     * const accessibilityThemeWithIdOnly = await prisma.accessibilityTheme.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccessibilityThemeCreateManyAndReturnArgs>(args?: SelectSubset<T, AccessibilityThemeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessibilityThemePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AccessibilityTheme.
     * @param {AccessibilityThemeDeleteArgs} args - Arguments to delete one AccessibilityTheme.
     * @example
     * // Delete one AccessibilityTheme
     * const AccessibilityTheme = await prisma.accessibilityTheme.delete({
     *   where: {
     *     // ... filter to delete one AccessibilityTheme
     *   }
     * })
     * 
     */
    delete<T extends AccessibilityThemeDeleteArgs>(args: SelectSubset<T, AccessibilityThemeDeleteArgs<ExtArgs>>): Prisma__AccessibilityThemeClient<$Result.GetResult<Prisma.$AccessibilityThemePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AccessibilityTheme.
     * @param {AccessibilityThemeUpdateArgs} args - Arguments to update one AccessibilityTheme.
     * @example
     * // Update one AccessibilityTheme
     * const accessibilityTheme = await prisma.accessibilityTheme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccessibilityThemeUpdateArgs>(args: SelectSubset<T, AccessibilityThemeUpdateArgs<ExtArgs>>): Prisma__AccessibilityThemeClient<$Result.GetResult<Prisma.$AccessibilityThemePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AccessibilityThemes.
     * @param {AccessibilityThemeDeleteManyArgs} args - Arguments to filter AccessibilityThemes to delete.
     * @example
     * // Delete a few AccessibilityThemes
     * const { count } = await prisma.accessibilityTheme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccessibilityThemeDeleteManyArgs>(args?: SelectSubset<T, AccessibilityThemeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccessibilityThemes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessibilityThemeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccessibilityThemes
     * const accessibilityTheme = await prisma.accessibilityTheme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccessibilityThemeUpdateManyArgs>(args: SelectSubset<T, AccessibilityThemeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccessibilityThemes and returns the data updated in the database.
     * @param {AccessibilityThemeUpdateManyAndReturnArgs} args - Arguments to update many AccessibilityThemes.
     * @example
     * // Update many AccessibilityThemes
     * const accessibilityTheme = await prisma.accessibilityTheme.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AccessibilityThemes and only return the `id`
     * const accessibilityThemeWithIdOnly = await prisma.accessibilityTheme.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccessibilityThemeUpdateManyAndReturnArgs>(args: SelectSubset<T, AccessibilityThemeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessibilityThemePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AccessibilityTheme.
     * @param {AccessibilityThemeUpsertArgs} args - Arguments to update or create a AccessibilityTheme.
     * @example
     * // Update or create a AccessibilityTheme
     * const accessibilityTheme = await prisma.accessibilityTheme.upsert({
     *   create: {
     *     // ... data to create a AccessibilityTheme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccessibilityTheme we want to update
     *   }
     * })
     */
    upsert<T extends AccessibilityThemeUpsertArgs>(args: SelectSubset<T, AccessibilityThemeUpsertArgs<ExtArgs>>): Prisma__AccessibilityThemeClient<$Result.GetResult<Prisma.$AccessibilityThemePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AccessibilityThemes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessibilityThemeCountArgs} args - Arguments to filter AccessibilityThemes to count.
     * @example
     * // Count the number of AccessibilityThemes
     * const count = await prisma.accessibilityTheme.count({
     *   where: {
     *     // ... the filter for the AccessibilityThemes we want to count
     *   }
     * })
    **/
    count<T extends AccessibilityThemeCountArgs>(
      args?: Subset<T, AccessibilityThemeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccessibilityThemeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccessibilityTheme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessibilityThemeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccessibilityThemeAggregateArgs>(args: Subset<T, AccessibilityThemeAggregateArgs>): Prisma.PrismaPromise<GetAccessibilityThemeAggregateType<T>>

    /**
     * Group by AccessibilityTheme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessibilityThemeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccessibilityThemeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccessibilityThemeGroupByArgs['orderBy'] }
        : { orderBy?: AccessibilityThemeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccessibilityThemeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccessibilityThemeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccessibilityTheme model
   */
  readonly fields: AccessibilityThemeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccessibilityTheme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccessibilityThemeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accessibilityCategory<T extends AccessibilityCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccessibilityCategoryDefaultArgs<ExtArgs>>): Prisma__AccessibilityCategoryClient<$Result.GetResult<Prisma.$AccessibilityCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    accessibilityNeed<T extends AccessibilityTheme$accessibilityNeedArgs<ExtArgs> = {}>(args?: Subset<T, AccessibilityTheme$accessibilityNeedArgs<ExtArgs>>): Prisma__AccessibilityNeedClient<$Result.GetResult<Prisma.$AccessibilityNeedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AccessibilityTheme model
   */
  interface AccessibilityThemeFieldRefs {
    readonly id: FieldRef<"AccessibilityTheme", 'Int'>
    readonly accessibilityCategoryId: FieldRef<"AccessibilityTheme", 'Int'>
    readonly accessibilityNeedId: FieldRef<"AccessibilityTheme", 'Int'>
    readonly title: FieldRef<"AccessibilityTheme", 'String'>
    readonly content: FieldRef<"AccessibilityTheme", 'String'>
    readonly createdAt: FieldRef<"AccessibilityTheme", 'DateTime'>
    readonly updatedAt: FieldRef<"AccessibilityTheme", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AccessibilityTheme findUnique
   */
  export type AccessibilityThemeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityTheme
     */
    select?: AccessibilityThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityTheme
     */
    omit?: AccessibilityThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityThemeInclude<ExtArgs> | null
    /**
     * Filter, which AccessibilityTheme to fetch.
     */
    where: AccessibilityThemeWhereUniqueInput
  }

  /**
   * AccessibilityTheme findUniqueOrThrow
   */
  export type AccessibilityThemeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityTheme
     */
    select?: AccessibilityThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityTheme
     */
    omit?: AccessibilityThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityThemeInclude<ExtArgs> | null
    /**
     * Filter, which AccessibilityTheme to fetch.
     */
    where: AccessibilityThemeWhereUniqueInput
  }

  /**
   * AccessibilityTheme findFirst
   */
  export type AccessibilityThemeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityTheme
     */
    select?: AccessibilityThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityTheme
     */
    omit?: AccessibilityThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityThemeInclude<ExtArgs> | null
    /**
     * Filter, which AccessibilityTheme to fetch.
     */
    where?: AccessibilityThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessibilityThemes to fetch.
     */
    orderBy?: AccessibilityThemeOrderByWithRelationInput | AccessibilityThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessibilityThemes.
     */
    cursor?: AccessibilityThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessibilityThemes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessibilityThemes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessibilityThemes.
     */
    distinct?: AccessibilityThemeScalarFieldEnum | AccessibilityThemeScalarFieldEnum[]
  }

  /**
   * AccessibilityTheme findFirstOrThrow
   */
  export type AccessibilityThemeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityTheme
     */
    select?: AccessibilityThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityTheme
     */
    omit?: AccessibilityThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityThemeInclude<ExtArgs> | null
    /**
     * Filter, which AccessibilityTheme to fetch.
     */
    where?: AccessibilityThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessibilityThemes to fetch.
     */
    orderBy?: AccessibilityThemeOrderByWithRelationInput | AccessibilityThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessibilityThemes.
     */
    cursor?: AccessibilityThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessibilityThemes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessibilityThemes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessibilityThemes.
     */
    distinct?: AccessibilityThemeScalarFieldEnum | AccessibilityThemeScalarFieldEnum[]
  }

  /**
   * AccessibilityTheme findMany
   */
  export type AccessibilityThemeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityTheme
     */
    select?: AccessibilityThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityTheme
     */
    omit?: AccessibilityThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityThemeInclude<ExtArgs> | null
    /**
     * Filter, which AccessibilityThemes to fetch.
     */
    where?: AccessibilityThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessibilityThemes to fetch.
     */
    orderBy?: AccessibilityThemeOrderByWithRelationInput | AccessibilityThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccessibilityThemes.
     */
    cursor?: AccessibilityThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessibilityThemes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessibilityThemes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessibilityThemes.
     */
    distinct?: AccessibilityThemeScalarFieldEnum | AccessibilityThemeScalarFieldEnum[]
  }

  /**
   * AccessibilityTheme create
   */
  export type AccessibilityThemeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityTheme
     */
    select?: AccessibilityThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityTheme
     */
    omit?: AccessibilityThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityThemeInclude<ExtArgs> | null
    /**
     * The data needed to create a AccessibilityTheme.
     */
    data: XOR<AccessibilityThemeCreateInput, AccessibilityThemeUncheckedCreateInput>
  }

  /**
   * AccessibilityTheme createMany
   */
  export type AccessibilityThemeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccessibilityThemes.
     */
    data: AccessibilityThemeCreateManyInput | AccessibilityThemeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccessibilityTheme createManyAndReturn
   */
  export type AccessibilityThemeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityTheme
     */
    select?: AccessibilityThemeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityTheme
     */
    omit?: AccessibilityThemeOmit<ExtArgs> | null
    /**
     * The data used to create many AccessibilityThemes.
     */
    data: AccessibilityThemeCreateManyInput | AccessibilityThemeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityThemeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccessibilityTheme update
   */
  export type AccessibilityThemeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityTheme
     */
    select?: AccessibilityThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityTheme
     */
    omit?: AccessibilityThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityThemeInclude<ExtArgs> | null
    /**
     * The data needed to update a AccessibilityTheme.
     */
    data: XOR<AccessibilityThemeUpdateInput, AccessibilityThemeUncheckedUpdateInput>
    /**
     * Choose, which AccessibilityTheme to update.
     */
    where: AccessibilityThemeWhereUniqueInput
  }

  /**
   * AccessibilityTheme updateMany
   */
  export type AccessibilityThemeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccessibilityThemes.
     */
    data: XOR<AccessibilityThemeUpdateManyMutationInput, AccessibilityThemeUncheckedUpdateManyInput>
    /**
     * Filter which AccessibilityThemes to update
     */
    where?: AccessibilityThemeWhereInput
    /**
     * Limit how many AccessibilityThemes to update.
     */
    limit?: number
  }

  /**
   * AccessibilityTheme updateManyAndReturn
   */
  export type AccessibilityThemeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityTheme
     */
    select?: AccessibilityThemeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityTheme
     */
    omit?: AccessibilityThemeOmit<ExtArgs> | null
    /**
     * The data used to update AccessibilityThemes.
     */
    data: XOR<AccessibilityThemeUpdateManyMutationInput, AccessibilityThemeUncheckedUpdateManyInput>
    /**
     * Filter which AccessibilityThemes to update
     */
    where?: AccessibilityThemeWhereInput
    /**
     * Limit how many AccessibilityThemes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityThemeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccessibilityTheme upsert
   */
  export type AccessibilityThemeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityTheme
     */
    select?: AccessibilityThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityTheme
     */
    omit?: AccessibilityThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityThemeInclude<ExtArgs> | null
    /**
     * The filter to search for the AccessibilityTheme to update in case it exists.
     */
    where: AccessibilityThemeWhereUniqueInput
    /**
     * In case the AccessibilityTheme found by the `where` argument doesn't exist, create a new AccessibilityTheme with this data.
     */
    create: XOR<AccessibilityThemeCreateInput, AccessibilityThemeUncheckedCreateInput>
    /**
     * In case the AccessibilityTheme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccessibilityThemeUpdateInput, AccessibilityThemeUncheckedUpdateInput>
  }

  /**
   * AccessibilityTheme delete
   */
  export type AccessibilityThemeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityTheme
     */
    select?: AccessibilityThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityTheme
     */
    omit?: AccessibilityThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityThemeInclude<ExtArgs> | null
    /**
     * Filter which AccessibilityTheme to delete.
     */
    where: AccessibilityThemeWhereUniqueInput
  }

  /**
   * AccessibilityTheme deleteMany
   */
  export type AccessibilityThemeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessibilityThemes to delete
     */
    where?: AccessibilityThemeWhereInput
    /**
     * Limit how many AccessibilityThemes to delete.
     */
    limit?: number
  }

  /**
   * AccessibilityTheme.accessibilityNeed
   */
  export type AccessibilityTheme$accessibilityNeedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityNeed
     */
    select?: AccessibilityNeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityNeed
     */
    omit?: AccessibilityNeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityNeedInclude<ExtArgs> | null
    where?: AccessibilityNeedWhereInput
  }

  /**
   * AccessibilityTheme without action
   */
  export type AccessibilityThemeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessibilityTheme
     */
    select?: AccessibilityThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessibilityTheme
     */
    omit?: AccessibilityThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessibilityThemeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    providerId: 'providerId',
    name: 'name',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChecklistScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    contentId: 'contentId',
    createdAt: 'createdAt'
  };

  export type ChecklistScalarFieldEnum = (typeof ChecklistScalarFieldEnum)[keyof typeof ChecklistScalarFieldEnum]


  export const SeriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SeriesScalarFieldEnum = (typeof SeriesScalarFieldEnum)[keyof typeof SeriesScalarFieldEnum]


  export const SubjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    seriesId: 'seriesId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum]


  export const TopicScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TopicScalarFieldEnum = (typeof TopicScalarFieldEnum)[keyof typeof TopicScalarFieldEnum]


  export const ContentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    type: 'type',
    link: 'link',
    thumbnailUrl: 'thumbnailUrl',
    pdfUrl: 'pdfUrl',
    topicId: 'topicId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContentScalarFieldEnum = (typeof ContentScalarFieldEnum)[keyof typeof ContentScalarFieldEnum]


  export const TopicSubjectScalarFieldEnum: {
    topicId: 'topicId',
    subjectId: 'subjectId'
  };

  export type TopicSubjectScalarFieldEnum = (typeof TopicSubjectScalarFieldEnum)[keyof typeof TopicSubjectScalarFieldEnum]


  export const VestibularScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VestibularScalarFieldEnum = (typeof VestibularScalarFieldEnum)[keyof typeof VestibularScalarFieldEnum]


  export const VestibularSubjectScalarFieldEnum: {
    vestibularId: 'vestibularId',
    subjectId: 'subjectId'
  };

  export type VestibularSubjectScalarFieldEnum = (typeof VestibularSubjectScalarFieldEnum)[keyof typeof VestibularSubjectScalarFieldEnum]


  export const VestibularContentScalarFieldEnum: {
    id: 'id',
    vestibularId: 'vestibularId',
    title: 'title',
    type: 'type',
    link: 'link',
    pdfUrl: 'pdfUrl',
    isShared: 'isShared',
    originalContentId: 'originalContentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VestibularContentScalarFieldEnum = (typeof VestibularContentScalarFieldEnum)[keyof typeof VestibularContentScalarFieldEnum]


  export const VestibularTopicScalarFieldEnum: {
    id: 'id',
    vestibularId: 'vestibularId',
    name: 'name',
    originalTopicId: 'originalTopicId',
    isShared: 'isShared',
    notes: 'notes',
    tags: 'tags',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VestibularTopicScalarFieldEnum = (typeof VestibularTopicScalarFieldEnum)[keyof typeof VestibularTopicScalarFieldEnum]


  export const AccessibilityCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccessibilityCategoryScalarFieldEnum = (typeof AccessibilityCategoryScalarFieldEnum)[keyof typeof AccessibilityCategoryScalarFieldEnum]


  export const AccessibilityCategoryTopicScalarFieldEnum: {
    accessibilityCategoryId: 'accessibilityCategoryId',
    topicId: 'topicId'
  };

  export type AccessibilityCategoryTopicScalarFieldEnum = (typeof AccessibilityCategoryTopicScalarFieldEnum)[keyof typeof AccessibilityCategoryTopicScalarFieldEnum]


  export const AccessibilityNeedScalarFieldEnum: {
    id: 'id',
    accessibilityCategoryId: 'accessibilityCategoryId',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccessibilityNeedScalarFieldEnum = (typeof AccessibilityNeedScalarFieldEnum)[keyof typeof AccessibilityNeedScalarFieldEnum]


  export const AccessibilityThemeScalarFieldEnum: {
    id: 'id',
    accessibilityCategoryId: 'accessibilityCategoryId',
    accessibilityNeedId: 'accessibilityNeedId',
    title: 'title',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccessibilityThemeScalarFieldEnum = (typeof AccessibilityThemeScalarFieldEnum)[keyof typeof AccessibilityThemeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    providerId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    checklists?: ChecklistListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    providerId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    checklists?: ChecklistOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    providerId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    checklists?: ChecklistListRelationFilter
  }, "id" | "providerId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    providerId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    providerId?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ChecklistWhereInput = {
    AND?: ChecklistWhereInput | ChecklistWhereInput[]
    OR?: ChecklistWhereInput[]
    NOT?: ChecklistWhereInput | ChecklistWhereInput[]
    id?: IntFilter<"Checklist"> | number
    userId?: UuidFilter<"Checklist"> | string
    contentId?: IntFilter<"Checklist"> | number
    createdAt?: DateTimeFilter<"Checklist"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
  }

  export type ChecklistOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    content?: ContentOrderByWithRelationInput
  }

  export type ChecklistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_contentId?: ChecklistUserIdContentIdCompoundUniqueInput
    AND?: ChecklistWhereInput | ChecklistWhereInput[]
    OR?: ChecklistWhereInput[]
    NOT?: ChecklistWhereInput | ChecklistWhereInput[]
    userId?: UuidFilter<"Checklist"> | string
    contentId?: IntFilter<"Checklist"> | number
    createdAt?: DateTimeFilter<"Checklist"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
  }, "id" | "userId_contentId">

  export type ChecklistOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
    _count?: ChecklistCountOrderByAggregateInput
    _avg?: ChecklistAvgOrderByAggregateInput
    _max?: ChecklistMaxOrderByAggregateInput
    _min?: ChecklistMinOrderByAggregateInput
    _sum?: ChecklistSumOrderByAggregateInput
  }

  export type ChecklistScalarWhereWithAggregatesInput = {
    AND?: ChecklistScalarWhereWithAggregatesInput | ChecklistScalarWhereWithAggregatesInput[]
    OR?: ChecklistScalarWhereWithAggregatesInput[]
    NOT?: ChecklistScalarWhereWithAggregatesInput | ChecklistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Checklist"> | number
    userId?: UuidWithAggregatesFilter<"Checklist"> | string
    contentId?: IntWithAggregatesFilter<"Checklist"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Checklist"> | Date | string
  }

  export type SeriesWhereInput = {
    AND?: SeriesWhereInput | SeriesWhereInput[]
    OR?: SeriesWhereInput[]
    NOT?: SeriesWhereInput | SeriesWhereInput[]
    id?: IntFilter<"Series"> | number
    name?: StringFilter<"Series"> | string
    createdAt?: DateTimeFilter<"Series"> | Date | string
    updatedAt?: DateTimeFilter<"Series"> | Date | string
    subjects?: SubjectListRelationFilter
  }

  export type SeriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subjects?: SubjectOrderByRelationAggregateInput
  }

  export type SeriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SeriesWhereInput | SeriesWhereInput[]
    OR?: SeriesWhereInput[]
    NOT?: SeriesWhereInput | SeriesWhereInput[]
    name?: StringFilter<"Series"> | string
    createdAt?: DateTimeFilter<"Series"> | Date | string
    updatedAt?: DateTimeFilter<"Series"> | Date | string
    subjects?: SubjectListRelationFilter
  }, "id">

  export type SeriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SeriesCountOrderByAggregateInput
    _avg?: SeriesAvgOrderByAggregateInput
    _max?: SeriesMaxOrderByAggregateInput
    _min?: SeriesMinOrderByAggregateInput
    _sum?: SeriesSumOrderByAggregateInput
  }

  export type SeriesScalarWhereWithAggregatesInput = {
    AND?: SeriesScalarWhereWithAggregatesInput | SeriesScalarWhereWithAggregatesInput[]
    OR?: SeriesScalarWhereWithAggregatesInput[]
    NOT?: SeriesScalarWhereWithAggregatesInput | SeriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Series"> | number
    name?: StringWithAggregatesFilter<"Series"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Series"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Series"> | Date | string
  }

  export type SubjectWhereInput = {
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    id?: IntFilter<"Subject"> | number
    name?: StringFilter<"Subject"> | string
    seriesId?: IntNullableFilter<"Subject"> | number | null
    createdAt?: DateTimeFilter<"Subject"> | Date | string
    updatedAt?: DateTimeFilter<"Subject"> | Date | string
    series?: XOR<SeriesNullableScalarRelationFilter, SeriesWhereInput> | null
    topicSubjects?: TopicSubjectListRelationFilter
    vestibularSubjects?: VestibularSubjectListRelationFilter
  }

  export type SubjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    seriesId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    series?: SeriesOrderByWithRelationInput
    topicSubjects?: TopicSubjectOrderByRelationAggregateInput
    vestibularSubjects?: VestibularSubjectOrderByRelationAggregateInput
  }

  export type SubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    name?: StringFilter<"Subject"> | string
    seriesId?: IntNullableFilter<"Subject"> | number | null
    createdAt?: DateTimeFilter<"Subject"> | Date | string
    updatedAt?: DateTimeFilter<"Subject"> | Date | string
    series?: XOR<SeriesNullableScalarRelationFilter, SeriesWhereInput> | null
    topicSubjects?: TopicSubjectListRelationFilter
    vestibularSubjects?: VestibularSubjectListRelationFilter
  }, "id">

  export type SubjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    seriesId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubjectCountOrderByAggregateInput
    _avg?: SubjectAvgOrderByAggregateInput
    _max?: SubjectMaxOrderByAggregateInput
    _min?: SubjectMinOrderByAggregateInput
    _sum?: SubjectSumOrderByAggregateInput
  }

  export type SubjectScalarWhereWithAggregatesInput = {
    AND?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    OR?: SubjectScalarWhereWithAggregatesInput[]
    NOT?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subject"> | number
    name?: StringWithAggregatesFilter<"Subject"> | string
    seriesId?: IntNullableWithAggregatesFilter<"Subject"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Subject"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subject"> | Date | string
  }

  export type TopicWhereInput = {
    AND?: TopicWhereInput | TopicWhereInput[]
    OR?: TopicWhereInput[]
    NOT?: TopicWhereInput | TopicWhereInput[]
    id?: IntFilter<"Topic"> | number
    name?: StringFilter<"Topic"> | string
    createdAt?: DateTimeFilter<"Topic"> | Date | string
    updatedAt?: DateTimeFilter<"Topic"> | Date | string
    contents?: ContentListRelationFilter
    topicSubjects?: TopicSubjectListRelationFilter
    accessibilityCategoryTopics?: AccessibilityCategoryTopicListRelationFilter
  }

  export type TopicOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contents?: ContentOrderByRelationAggregateInput
    topicSubjects?: TopicSubjectOrderByRelationAggregateInput
    accessibilityCategoryTopics?: AccessibilityCategoryTopicOrderByRelationAggregateInput
  }

  export type TopicWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TopicWhereInput | TopicWhereInput[]
    OR?: TopicWhereInput[]
    NOT?: TopicWhereInput | TopicWhereInput[]
    name?: StringFilter<"Topic"> | string
    createdAt?: DateTimeFilter<"Topic"> | Date | string
    updatedAt?: DateTimeFilter<"Topic"> | Date | string
    contents?: ContentListRelationFilter
    topicSubjects?: TopicSubjectListRelationFilter
    accessibilityCategoryTopics?: AccessibilityCategoryTopicListRelationFilter
  }, "id">

  export type TopicOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TopicCountOrderByAggregateInput
    _avg?: TopicAvgOrderByAggregateInput
    _max?: TopicMaxOrderByAggregateInput
    _min?: TopicMinOrderByAggregateInput
    _sum?: TopicSumOrderByAggregateInput
  }

  export type TopicScalarWhereWithAggregatesInput = {
    AND?: TopicScalarWhereWithAggregatesInput | TopicScalarWhereWithAggregatesInput[]
    OR?: TopicScalarWhereWithAggregatesInput[]
    NOT?: TopicScalarWhereWithAggregatesInput | TopicScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Topic"> | number
    name?: StringWithAggregatesFilter<"Topic"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Topic"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Topic"> | Date | string
  }

  export type ContentWhereInput = {
    AND?: ContentWhereInput | ContentWhereInput[]
    OR?: ContentWhereInput[]
    NOT?: ContentWhereInput | ContentWhereInput[]
    id?: IntFilter<"Content"> | number
    title?: StringFilter<"Content"> | string
    type?: StringFilter<"Content"> | string
    link?: StringFilter<"Content"> | string
    thumbnailUrl?: StringFilter<"Content"> | string
    pdfUrl?: StringNullableFilter<"Content"> | string | null
    topicId?: IntFilter<"Content"> | number
    createdAt?: DateTimeFilter<"Content"> | Date | string
    updatedAt?: DateTimeFilter<"Content"> | Date | string
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
    checklists?: ChecklistListRelationFilter
    vestibularContents?: VestibularContentListRelationFilter
  }

  export type ContentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    link?: SortOrder
    thumbnailUrl?: SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    topic?: TopicOrderByWithRelationInput
    checklists?: ChecklistOrderByRelationAggregateInput
    vestibularContents?: VestibularContentOrderByRelationAggregateInput
  }

  export type ContentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContentWhereInput | ContentWhereInput[]
    OR?: ContentWhereInput[]
    NOT?: ContentWhereInput | ContentWhereInput[]
    title?: StringFilter<"Content"> | string
    type?: StringFilter<"Content"> | string
    link?: StringFilter<"Content"> | string
    thumbnailUrl?: StringFilter<"Content"> | string
    pdfUrl?: StringNullableFilter<"Content"> | string | null
    topicId?: IntFilter<"Content"> | number
    createdAt?: DateTimeFilter<"Content"> | Date | string
    updatedAt?: DateTimeFilter<"Content"> | Date | string
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
    checklists?: ChecklistListRelationFilter
    vestibularContents?: VestibularContentListRelationFilter
  }, "id">

  export type ContentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    link?: SortOrder
    thumbnailUrl?: SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContentCountOrderByAggregateInput
    _avg?: ContentAvgOrderByAggregateInput
    _max?: ContentMaxOrderByAggregateInput
    _min?: ContentMinOrderByAggregateInput
    _sum?: ContentSumOrderByAggregateInput
  }

  export type ContentScalarWhereWithAggregatesInput = {
    AND?: ContentScalarWhereWithAggregatesInput | ContentScalarWhereWithAggregatesInput[]
    OR?: ContentScalarWhereWithAggregatesInput[]
    NOT?: ContentScalarWhereWithAggregatesInput | ContentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Content"> | number
    title?: StringWithAggregatesFilter<"Content"> | string
    type?: StringWithAggregatesFilter<"Content"> | string
    link?: StringWithAggregatesFilter<"Content"> | string
    thumbnailUrl?: StringWithAggregatesFilter<"Content"> | string
    pdfUrl?: StringNullableWithAggregatesFilter<"Content"> | string | null
    topicId?: IntWithAggregatesFilter<"Content"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Content"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Content"> | Date | string
  }

  export type TopicSubjectWhereInput = {
    AND?: TopicSubjectWhereInput | TopicSubjectWhereInput[]
    OR?: TopicSubjectWhereInput[]
    NOT?: TopicSubjectWhereInput | TopicSubjectWhereInput[]
    topicId?: IntFilter<"TopicSubject"> | number
    subjectId?: IntFilter<"TopicSubject"> | number
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }

  export type TopicSubjectOrderByWithRelationInput = {
    topicId?: SortOrder
    subjectId?: SortOrder
    topic?: TopicOrderByWithRelationInput
    subject?: SubjectOrderByWithRelationInput
  }

  export type TopicSubjectWhereUniqueInput = Prisma.AtLeast<{
    topicId_subjectId?: TopicSubjectTopicIdSubjectIdCompoundUniqueInput
    AND?: TopicSubjectWhereInput | TopicSubjectWhereInput[]
    OR?: TopicSubjectWhereInput[]
    NOT?: TopicSubjectWhereInput | TopicSubjectWhereInput[]
    topicId?: IntFilter<"TopicSubject"> | number
    subjectId?: IntFilter<"TopicSubject"> | number
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }, "topicId_subjectId">

  export type TopicSubjectOrderByWithAggregationInput = {
    topicId?: SortOrder
    subjectId?: SortOrder
    _count?: TopicSubjectCountOrderByAggregateInput
    _avg?: TopicSubjectAvgOrderByAggregateInput
    _max?: TopicSubjectMaxOrderByAggregateInput
    _min?: TopicSubjectMinOrderByAggregateInput
    _sum?: TopicSubjectSumOrderByAggregateInput
  }

  export type TopicSubjectScalarWhereWithAggregatesInput = {
    AND?: TopicSubjectScalarWhereWithAggregatesInput | TopicSubjectScalarWhereWithAggregatesInput[]
    OR?: TopicSubjectScalarWhereWithAggregatesInput[]
    NOT?: TopicSubjectScalarWhereWithAggregatesInput | TopicSubjectScalarWhereWithAggregatesInput[]
    topicId?: IntWithAggregatesFilter<"TopicSubject"> | number
    subjectId?: IntWithAggregatesFilter<"TopicSubject"> | number
  }

  export type VestibularWhereInput = {
    AND?: VestibularWhereInput | VestibularWhereInput[]
    OR?: VestibularWhereInput[]
    NOT?: VestibularWhereInput | VestibularWhereInput[]
    id?: IntFilter<"Vestibular"> | number
    name?: StringFilter<"Vestibular"> | string
    createdAt?: DateTimeFilter<"Vestibular"> | Date | string
    updatedAt?: DateTimeFilter<"Vestibular"> | Date | string
    vestibularSubjects?: VestibularSubjectListRelationFilter
    contents?: VestibularContentListRelationFilter
    vestibularTopics?: VestibularTopicListRelationFilter
  }

  export type VestibularOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vestibularSubjects?: VestibularSubjectOrderByRelationAggregateInput
    contents?: VestibularContentOrderByRelationAggregateInput
    vestibularTopics?: VestibularTopicOrderByRelationAggregateInput
  }

  export type VestibularWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VestibularWhereInput | VestibularWhereInput[]
    OR?: VestibularWhereInput[]
    NOT?: VestibularWhereInput | VestibularWhereInput[]
    name?: StringFilter<"Vestibular"> | string
    createdAt?: DateTimeFilter<"Vestibular"> | Date | string
    updatedAt?: DateTimeFilter<"Vestibular"> | Date | string
    vestibularSubjects?: VestibularSubjectListRelationFilter
    contents?: VestibularContentListRelationFilter
    vestibularTopics?: VestibularTopicListRelationFilter
  }, "id">

  export type VestibularOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VestibularCountOrderByAggregateInput
    _avg?: VestibularAvgOrderByAggregateInput
    _max?: VestibularMaxOrderByAggregateInput
    _min?: VestibularMinOrderByAggregateInput
    _sum?: VestibularSumOrderByAggregateInput
  }

  export type VestibularScalarWhereWithAggregatesInput = {
    AND?: VestibularScalarWhereWithAggregatesInput | VestibularScalarWhereWithAggregatesInput[]
    OR?: VestibularScalarWhereWithAggregatesInput[]
    NOT?: VestibularScalarWhereWithAggregatesInput | VestibularScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vestibular"> | number
    name?: StringWithAggregatesFilter<"Vestibular"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Vestibular"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vestibular"> | Date | string
  }

  export type VestibularSubjectWhereInput = {
    AND?: VestibularSubjectWhereInput | VestibularSubjectWhereInput[]
    OR?: VestibularSubjectWhereInput[]
    NOT?: VestibularSubjectWhereInput | VestibularSubjectWhereInput[]
    vestibularId?: IntFilter<"VestibularSubject"> | number
    subjectId?: IntFilter<"VestibularSubject"> | number
    vestibular?: XOR<VestibularScalarRelationFilter, VestibularWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }

  export type VestibularSubjectOrderByWithRelationInput = {
    vestibularId?: SortOrder
    subjectId?: SortOrder
    vestibular?: VestibularOrderByWithRelationInput
    subject?: SubjectOrderByWithRelationInput
  }

  export type VestibularSubjectWhereUniqueInput = Prisma.AtLeast<{
    vestibularId_subjectId?: VestibularSubjectVestibularIdSubjectIdCompoundUniqueInput
    AND?: VestibularSubjectWhereInput | VestibularSubjectWhereInput[]
    OR?: VestibularSubjectWhereInput[]
    NOT?: VestibularSubjectWhereInput | VestibularSubjectWhereInput[]
    vestibularId?: IntFilter<"VestibularSubject"> | number
    subjectId?: IntFilter<"VestibularSubject"> | number
    vestibular?: XOR<VestibularScalarRelationFilter, VestibularWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }, "vestibularId_subjectId">

  export type VestibularSubjectOrderByWithAggregationInput = {
    vestibularId?: SortOrder
    subjectId?: SortOrder
    _count?: VestibularSubjectCountOrderByAggregateInput
    _avg?: VestibularSubjectAvgOrderByAggregateInput
    _max?: VestibularSubjectMaxOrderByAggregateInput
    _min?: VestibularSubjectMinOrderByAggregateInput
    _sum?: VestibularSubjectSumOrderByAggregateInput
  }

  export type VestibularSubjectScalarWhereWithAggregatesInput = {
    AND?: VestibularSubjectScalarWhereWithAggregatesInput | VestibularSubjectScalarWhereWithAggregatesInput[]
    OR?: VestibularSubjectScalarWhereWithAggregatesInput[]
    NOT?: VestibularSubjectScalarWhereWithAggregatesInput | VestibularSubjectScalarWhereWithAggregatesInput[]
    vestibularId?: IntWithAggregatesFilter<"VestibularSubject"> | number
    subjectId?: IntWithAggregatesFilter<"VestibularSubject"> | number
  }

  export type VestibularContentWhereInput = {
    AND?: VestibularContentWhereInput | VestibularContentWhereInput[]
    OR?: VestibularContentWhereInput[]
    NOT?: VestibularContentWhereInput | VestibularContentWhereInput[]
    id?: IntFilter<"VestibularContent"> | number
    vestibularId?: IntFilter<"VestibularContent"> | number
    title?: StringFilter<"VestibularContent"> | string
    type?: StringNullableFilter<"VestibularContent"> | string | null
    link?: StringNullableFilter<"VestibularContent"> | string | null
    pdfUrl?: StringNullableFilter<"VestibularContent"> | string | null
    isShared?: BoolFilter<"VestibularContent"> | boolean
    originalContentId?: IntNullableFilter<"VestibularContent"> | number | null
    createdAt?: DateTimeFilter<"VestibularContent"> | Date | string
    updatedAt?: DateTimeFilter<"VestibularContent"> | Date | string
    vestibular?: XOR<VestibularScalarRelationFilter, VestibularWhereInput>
    originalContent?: XOR<ContentNullableScalarRelationFilter, ContentWhereInput> | null
  }

  export type VestibularContentOrderByWithRelationInput = {
    id?: SortOrder
    vestibularId?: SortOrder
    title?: SortOrder
    type?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    isShared?: SortOrder
    originalContentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vestibular?: VestibularOrderByWithRelationInput
    originalContent?: ContentOrderByWithRelationInput
  }

  export type VestibularContentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VestibularContentWhereInput | VestibularContentWhereInput[]
    OR?: VestibularContentWhereInput[]
    NOT?: VestibularContentWhereInput | VestibularContentWhereInput[]
    vestibularId?: IntFilter<"VestibularContent"> | number
    title?: StringFilter<"VestibularContent"> | string
    type?: StringNullableFilter<"VestibularContent"> | string | null
    link?: StringNullableFilter<"VestibularContent"> | string | null
    pdfUrl?: StringNullableFilter<"VestibularContent"> | string | null
    isShared?: BoolFilter<"VestibularContent"> | boolean
    originalContentId?: IntNullableFilter<"VestibularContent"> | number | null
    createdAt?: DateTimeFilter<"VestibularContent"> | Date | string
    updatedAt?: DateTimeFilter<"VestibularContent"> | Date | string
    vestibular?: XOR<VestibularScalarRelationFilter, VestibularWhereInput>
    originalContent?: XOR<ContentNullableScalarRelationFilter, ContentWhereInput> | null
  }, "id">

  export type VestibularContentOrderByWithAggregationInput = {
    id?: SortOrder
    vestibularId?: SortOrder
    title?: SortOrder
    type?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    isShared?: SortOrder
    originalContentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VestibularContentCountOrderByAggregateInput
    _avg?: VestibularContentAvgOrderByAggregateInput
    _max?: VestibularContentMaxOrderByAggregateInput
    _min?: VestibularContentMinOrderByAggregateInput
    _sum?: VestibularContentSumOrderByAggregateInput
  }

  export type VestibularContentScalarWhereWithAggregatesInput = {
    AND?: VestibularContentScalarWhereWithAggregatesInput | VestibularContentScalarWhereWithAggregatesInput[]
    OR?: VestibularContentScalarWhereWithAggregatesInput[]
    NOT?: VestibularContentScalarWhereWithAggregatesInput | VestibularContentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VestibularContent"> | number
    vestibularId?: IntWithAggregatesFilter<"VestibularContent"> | number
    title?: StringWithAggregatesFilter<"VestibularContent"> | string
    type?: StringNullableWithAggregatesFilter<"VestibularContent"> | string | null
    link?: StringNullableWithAggregatesFilter<"VestibularContent"> | string | null
    pdfUrl?: StringNullableWithAggregatesFilter<"VestibularContent"> | string | null
    isShared?: BoolWithAggregatesFilter<"VestibularContent"> | boolean
    originalContentId?: IntNullableWithAggregatesFilter<"VestibularContent"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"VestibularContent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VestibularContent"> | Date | string
  }

  export type VestibularTopicWhereInput = {
    AND?: VestibularTopicWhereInput | VestibularTopicWhereInput[]
    OR?: VestibularTopicWhereInput[]
    NOT?: VestibularTopicWhereInput | VestibularTopicWhereInput[]
    id?: IntFilter<"VestibularTopic"> | number
    vestibularId?: IntFilter<"VestibularTopic"> | number
    name?: StringFilter<"VestibularTopic"> | string
    originalTopicId?: IntNullableFilter<"VestibularTopic"> | number | null
    isShared?: BoolFilter<"VestibularTopic"> | boolean
    notes?: StringNullableFilter<"VestibularTopic"> | string | null
    tags?: StringNullableFilter<"VestibularTopic"> | string | null
    createdAt?: DateTimeFilter<"VestibularTopic"> | Date | string
    updatedAt?: DateTimeFilter<"VestibularTopic"> | Date | string
    vestibular?: XOR<VestibularScalarRelationFilter, VestibularWhereInput>
  }

  export type VestibularTopicOrderByWithRelationInput = {
    id?: SortOrder
    vestibularId?: SortOrder
    name?: SortOrder
    originalTopicId?: SortOrderInput | SortOrder
    isShared?: SortOrder
    notes?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vestibular?: VestibularOrderByWithRelationInput
  }

  export type VestibularTopicWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VestibularTopicWhereInput | VestibularTopicWhereInput[]
    OR?: VestibularTopicWhereInput[]
    NOT?: VestibularTopicWhereInput | VestibularTopicWhereInput[]
    vestibularId?: IntFilter<"VestibularTopic"> | number
    name?: StringFilter<"VestibularTopic"> | string
    originalTopicId?: IntNullableFilter<"VestibularTopic"> | number | null
    isShared?: BoolFilter<"VestibularTopic"> | boolean
    notes?: StringNullableFilter<"VestibularTopic"> | string | null
    tags?: StringNullableFilter<"VestibularTopic"> | string | null
    createdAt?: DateTimeFilter<"VestibularTopic"> | Date | string
    updatedAt?: DateTimeFilter<"VestibularTopic"> | Date | string
    vestibular?: XOR<VestibularScalarRelationFilter, VestibularWhereInput>
  }, "id">

  export type VestibularTopicOrderByWithAggregationInput = {
    id?: SortOrder
    vestibularId?: SortOrder
    name?: SortOrder
    originalTopicId?: SortOrderInput | SortOrder
    isShared?: SortOrder
    notes?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VestibularTopicCountOrderByAggregateInput
    _avg?: VestibularTopicAvgOrderByAggregateInput
    _max?: VestibularTopicMaxOrderByAggregateInput
    _min?: VestibularTopicMinOrderByAggregateInput
    _sum?: VestibularTopicSumOrderByAggregateInput
  }

  export type VestibularTopicScalarWhereWithAggregatesInput = {
    AND?: VestibularTopicScalarWhereWithAggregatesInput | VestibularTopicScalarWhereWithAggregatesInput[]
    OR?: VestibularTopicScalarWhereWithAggregatesInput[]
    NOT?: VestibularTopicScalarWhereWithAggregatesInput | VestibularTopicScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VestibularTopic"> | number
    vestibularId?: IntWithAggregatesFilter<"VestibularTopic"> | number
    name?: StringWithAggregatesFilter<"VestibularTopic"> | string
    originalTopicId?: IntNullableWithAggregatesFilter<"VestibularTopic"> | number | null
    isShared?: BoolWithAggregatesFilter<"VestibularTopic"> | boolean
    notes?: StringNullableWithAggregatesFilter<"VestibularTopic"> | string | null
    tags?: StringNullableWithAggregatesFilter<"VestibularTopic"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"VestibularTopic"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VestibularTopic"> | Date | string
  }

  export type AccessibilityCategoryWhereInput = {
    AND?: AccessibilityCategoryWhereInput | AccessibilityCategoryWhereInput[]
    OR?: AccessibilityCategoryWhereInput[]
    NOT?: AccessibilityCategoryWhereInput | AccessibilityCategoryWhereInput[]
    id?: IntFilter<"AccessibilityCategory"> | number
    name?: StringFilter<"AccessibilityCategory"> | string
    description?: StringNullableFilter<"AccessibilityCategory"> | string | null
    createdAt?: DateTimeFilter<"AccessibilityCategory"> | Date | string
    updatedAt?: DateTimeFilter<"AccessibilityCategory"> | Date | string
    categoryTopics?: AccessibilityCategoryTopicListRelationFilter
    needs?: AccessibilityNeedListRelationFilter
    themes?: AccessibilityThemeListRelationFilter
  }

  export type AccessibilityCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryTopics?: AccessibilityCategoryTopicOrderByRelationAggregateInput
    needs?: AccessibilityNeedOrderByRelationAggregateInput
    themes?: AccessibilityThemeOrderByRelationAggregateInput
  }

  export type AccessibilityCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AccessibilityCategoryWhereInput | AccessibilityCategoryWhereInput[]
    OR?: AccessibilityCategoryWhereInput[]
    NOT?: AccessibilityCategoryWhereInput | AccessibilityCategoryWhereInput[]
    name?: StringFilter<"AccessibilityCategory"> | string
    description?: StringNullableFilter<"AccessibilityCategory"> | string | null
    createdAt?: DateTimeFilter<"AccessibilityCategory"> | Date | string
    updatedAt?: DateTimeFilter<"AccessibilityCategory"> | Date | string
    categoryTopics?: AccessibilityCategoryTopicListRelationFilter
    needs?: AccessibilityNeedListRelationFilter
    themes?: AccessibilityThemeListRelationFilter
  }, "id">

  export type AccessibilityCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccessibilityCategoryCountOrderByAggregateInput
    _avg?: AccessibilityCategoryAvgOrderByAggregateInput
    _max?: AccessibilityCategoryMaxOrderByAggregateInput
    _min?: AccessibilityCategoryMinOrderByAggregateInput
    _sum?: AccessibilityCategorySumOrderByAggregateInput
  }

  export type AccessibilityCategoryScalarWhereWithAggregatesInput = {
    AND?: AccessibilityCategoryScalarWhereWithAggregatesInput | AccessibilityCategoryScalarWhereWithAggregatesInput[]
    OR?: AccessibilityCategoryScalarWhereWithAggregatesInput[]
    NOT?: AccessibilityCategoryScalarWhereWithAggregatesInput | AccessibilityCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AccessibilityCategory"> | number
    name?: StringWithAggregatesFilter<"AccessibilityCategory"> | string
    description?: StringNullableWithAggregatesFilter<"AccessibilityCategory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AccessibilityCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AccessibilityCategory"> | Date | string
  }

  export type AccessibilityCategoryTopicWhereInput = {
    AND?: AccessibilityCategoryTopicWhereInput | AccessibilityCategoryTopicWhereInput[]
    OR?: AccessibilityCategoryTopicWhereInput[]
    NOT?: AccessibilityCategoryTopicWhereInput | AccessibilityCategoryTopicWhereInput[]
    accessibilityCategoryId?: IntFilter<"AccessibilityCategoryTopic"> | number
    topicId?: IntFilter<"AccessibilityCategoryTopic"> | number
    accessibilityCategory?: XOR<AccessibilityCategoryScalarRelationFilter, AccessibilityCategoryWhereInput>
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
  }

  export type AccessibilityCategoryTopicOrderByWithRelationInput = {
    accessibilityCategoryId?: SortOrder
    topicId?: SortOrder
    accessibilityCategory?: AccessibilityCategoryOrderByWithRelationInput
    topic?: TopicOrderByWithRelationInput
  }

  export type AccessibilityCategoryTopicWhereUniqueInput = Prisma.AtLeast<{
    accessibilityCategoryId_topicId?: AccessibilityCategoryTopicAccessibilityCategoryIdTopicIdCompoundUniqueInput
    AND?: AccessibilityCategoryTopicWhereInput | AccessibilityCategoryTopicWhereInput[]
    OR?: AccessibilityCategoryTopicWhereInput[]
    NOT?: AccessibilityCategoryTopicWhereInput | AccessibilityCategoryTopicWhereInput[]
    accessibilityCategoryId?: IntFilter<"AccessibilityCategoryTopic"> | number
    topicId?: IntFilter<"AccessibilityCategoryTopic"> | number
    accessibilityCategory?: XOR<AccessibilityCategoryScalarRelationFilter, AccessibilityCategoryWhereInput>
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
  }, "accessibilityCategoryId_topicId">

  export type AccessibilityCategoryTopicOrderByWithAggregationInput = {
    accessibilityCategoryId?: SortOrder
    topicId?: SortOrder
    _count?: AccessibilityCategoryTopicCountOrderByAggregateInput
    _avg?: AccessibilityCategoryTopicAvgOrderByAggregateInput
    _max?: AccessibilityCategoryTopicMaxOrderByAggregateInput
    _min?: AccessibilityCategoryTopicMinOrderByAggregateInput
    _sum?: AccessibilityCategoryTopicSumOrderByAggregateInput
  }

  export type AccessibilityCategoryTopicScalarWhereWithAggregatesInput = {
    AND?: AccessibilityCategoryTopicScalarWhereWithAggregatesInput | AccessibilityCategoryTopicScalarWhereWithAggregatesInput[]
    OR?: AccessibilityCategoryTopicScalarWhereWithAggregatesInput[]
    NOT?: AccessibilityCategoryTopicScalarWhereWithAggregatesInput | AccessibilityCategoryTopicScalarWhereWithAggregatesInput[]
    accessibilityCategoryId?: IntWithAggregatesFilter<"AccessibilityCategoryTopic"> | number
    topicId?: IntWithAggregatesFilter<"AccessibilityCategoryTopic"> | number
  }

  export type AccessibilityNeedWhereInput = {
    AND?: AccessibilityNeedWhereInput | AccessibilityNeedWhereInput[]
    OR?: AccessibilityNeedWhereInput[]
    NOT?: AccessibilityNeedWhereInput | AccessibilityNeedWhereInput[]
    id?: IntFilter<"AccessibilityNeed"> | number
    accessibilityCategoryId?: IntFilter<"AccessibilityNeed"> | number
    name?: StringFilter<"AccessibilityNeed"> | string
    createdAt?: DateTimeFilter<"AccessibilityNeed"> | Date | string
    updatedAt?: DateTimeFilter<"AccessibilityNeed"> | Date | string
    accessibilityCategory?: XOR<AccessibilityCategoryScalarRelationFilter, AccessibilityCategoryWhereInput>
    themes?: AccessibilityThemeListRelationFilter
  }

  export type AccessibilityNeedOrderByWithRelationInput = {
    id?: SortOrder
    accessibilityCategoryId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accessibilityCategory?: AccessibilityCategoryOrderByWithRelationInput
    themes?: AccessibilityThemeOrderByRelationAggregateInput
  }

  export type AccessibilityNeedWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AccessibilityNeedWhereInput | AccessibilityNeedWhereInput[]
    OR?: AccessibilityNeedWhereInput[]
    NOT?: AccessibilityNeedWhereInput | AccessibilityNeedWhereInput[]
    accessibilityCategoryId?: IntFilter<"AccessibilityNeed"> | number
    name?: StringFilter<"AccessibilityNeed"> | string
    createdAt?: DateTimeFilter<"AccessibilityNeed"> | Date | string
    updatedAt?: DateTimeFilter<"AccessibilityNeed"> | Date | string
    accessibilityCategory?: XOR<AccessibilityCategoryScalarRelationFilter, AccessibilityCategoryWhereInput>
    themes?: AccessibilityThemeListRelationFilter
  }, "id">

  export type AccessibilityNeedOrderByWithAggregationInput = {
    id?: SortOrder
    accessibilityCategoryId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccessibilityNeedCountOrderByAggregateInput
    _avg?: AccessibilityNeedAvgOrderByAggregateInput
    _max?: AccessibilityNeedMaxOrderByAggregateInput
    _min?: AccessibilityNeedMinOrderByAggregateInput
    _sum?: AccessibilityNeedSumOrderByAggregateInput
  }

  export type AccessibilityNeedScalarWhereWithAggregatesInput = {
    AND?: AccessibilityNeedScalarWhereWithAggregatesInput | AccessibilityNeedScalarWhereWithAggregatesInput[]
    OR?: AccessibilityNeedScalarWhereWithAggregatesInput[]
    NOT?: AccessibilityNeedScalarWhereWithAggregatesInput | AccessibilityNeedScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AccessibilityNeed"> | number
    accessibilityCategoryId?: IntWithAggregatesFilter<"AccessibilityNeed"> | number
    name?: StringWithAggregatesFilter<"AccessibilityNeed"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AccessibilityNeed"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AccessibilityNeed"> | Date | string
  }

  export type AccessibilityThemeWhereInput = {
    AND?: AccessibilityThemeWhereInput | AccessibilityThemeWhereInput[]
    OR?: AccessibilityThemeWhereInput[]
    NOT?: AccessibilityThemeWhereInput | AccessibilityThemeWhereInput[]
    id?: IntFilter<"AccessibilityTheme"> | number
    accessibilityCategoryId?: IntFilter<"AccessibilityTheme"> | number
    accessibilityNeedId?: IntNullableFilter<"AccessibilityTheme"> | number | null
    title?: StringFilter<"AccessibilityTheme"> | string
    content?: StringNullableFilter<"AccessibilityTheme"> | string | null
    createdAt?: DateTimeFilter<"AccessibilityTheme"> | Date | string
    updatedAt?: DateTimeFilter<"AccessibilityTheme"> | Date | string
    accessibilityCategory?: XOR<AccessibilityCategoryScalarRelationFilter, AccessibilityCategoryWhereInput>
    accessibilityNeed?: XOR<AccessibilityNeedNullableScalarRelationFilter, AccessibilityNeedWhereInput> | null
  }

  export type AccessibilityThemeOrderByWithRelationInput = {
    id?: SortOrder
    accessibilityCategoryId?: SortOrder
    accessibilityNeedId?: SortOrderInput | SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accessibilityCategory?: AccessibilityCategoryOrderByWithRelationInput
    accessibilityNeed?: AccessibilityNeedOrderByWithRelationInput
  }

  export type AccessibilityThemeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AccessibilityThemeWhereInput | AccessibilityThemeWhereInput[]
    OR?: AccessibilityThemeWhereInput[]
    NOT?: AccessibilityThemeWhereInput | AccessibilityThemeWhereInput[]
    accessibilityCategoryId?: IntFilter<"AccessibilityTheme"> | number
    accessibilityNeedId?: IntNullableFilter<"AccessibilityTheme"> | number | null
    title?: StringFilter<"AccessibilityTheme"> | string
    content?: StringNullableFilter<"AccessibilityTheme"> | string | null
    createdAt?: DateTimeFilter<"AccessibilityTheme"> | Date | string
    updatedAt?: DateTimeFilter<"AccessibilityTheme"> | Date | string
    accessibilityCategory?: XOR<AccessibilityCategoryScalarRelationFilter, AccessibilityCategoryWhereInput>
    accessibilityNeed?: XOR<AccessibilityNeedNullableScalarRelationFilter, AccessibilityNeedWhereInput> | null
  }, "id">

  export type AccessibilityThemeOrderByWithAggregationInput = {
    id?: SortOrder
    accessibilityCategoryId?: SortOrder
    accessibilityNeedId?: SortOrderInput | SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccessibilityThemeCountOrderByAggregateInput
    _avg?: AccessibilityThemeAvgOrderByAggregateInput
    _max?: AccessibilityThemeMaxOrderByAggregateInput
    _min?: AccessibilityThemeMinOrderByAggregateInput
    _sum?: AccessibilityThemeSumOrderByAggregateInput
  }

  export type AccessibilityThemeScalarWhereWithAggregatesInput = {
    AND?: AccessibilityThemeScalarWhereWithAggregatesInput | AccessibilityThemeScalarWhereWithAggregatesInput[]
    OR?: AccessibilityThemeScalarWhereWithAggregatesInput[]
    NOT?: AccessibilityThemeScalarWhereWithAggregatesInput | AccessibilityThemeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AccessibilityTheme"> | number
    accessibilityCategoryId?: IntWithAggregatesFilter<"AccessibilityTheme"> | number
    accessibilityNeedId?: IntNullableWithAggregatesFilter<"AccessibilityTheme"> | number | null
    title?: StringWithAggregatesFilter<"AccessibilityTheme"> | string
    content?: StringNullableWithAggregatesFilter<"AccessibilityTheme"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AccessibilityTheme"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AccessibilityTheme"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    providerId: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    checklists?: ChecklistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    providerId: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    checklists?: ChecklistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checklists?: ChecklistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checklists?: ChecklistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    providerId: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutChecklistsInput
    content: ContentCreateNestedOneWithoutChecklistsInput
  }

  export type ChecklistUncheckedCreateInput = {
    id?: number
    userId: string
    contentId: number
    createdAt?: Date | string
  }

  export type ChecklistUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChecklistsNestedInput
    content?: ContentUpdateOneRequiredWithoutChecklistsNestedInput
  }

  export type ChecklistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    contentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistCreateManyInput = {
    id?: number
    userId: string
    contentId: number
    createdAt?: Date | string
  }

  export type ChecklistUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    contentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subjects?: SubjectCreateNestedManyWithoutSeriesInput
  }

  export type SeriesUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subjects?: SubjectUncheckedCreateNestedManyWithoutSeriesInput
  }

  export type SeriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: SubjectUpdateManyWithoutSeriesNestedInput
  }

  export type SeriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: SubjectUncheckedUpdateManyWithoutSeriesNestedInput
  }

  export type SeriesCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    series?: SeriesCreateNestedOneWithoutSubjectsInput
    topicSubjects?: TopicSubjectCreateNestedManyWithoutSubjectInput
    vestibularSubjects?: VestibularSubjectCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateInput = {
    id?: number
    name: string
    seriesId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    topicSubjects?: TopicSubjectUncheckedCreateNestedManyWithoutSubjectInput
    vestibularSubjects?: VestibularSubjectUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    series?: SeriesUpdateOneWithoutSubjectsNestedInput
    topicSubjects?: TopicSubjectUpdateManyWithoutSubjectNestedInput
    vestibularSubjects?: VestibularSubjectUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    seriesId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topicSubjects?: TopicSubjectUncheckedUpdateManyWithoutSubjectNestedInput
    vestibularSubjects?: VestibularSubjectUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectCreateManyInput = {
    id?: number
    name: string
    seriesId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    seriesId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contents?: ContentCreateNestedManyWithoutTopicInput
    topicSubjects?: TopicSubjectCreateNestedManyWithoutTopicInput
    accessibilityCategoryTopics?: AccessibilityCategoryTopicCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contents?: ContentUncheckedCreateNestedManyWithoutTopicInput
    topicSubjects?: TopicSubjectUncheckedCreateNestedManyWithoutTopicInput
    accessibilityCategoryTopics?: AccessibilityCategoryTopicUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: ContentUpdateManyWithoutTopicNestedInput
    topicSubjects?: TopicSubjectUpdateManyWithoutTopicNestedInput
    accessibilityCategoryTopics?: AccessibilityCategoryTopicUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: ContentUncheckedUpdateManyWithoutTopicNestedInput
    topicSubjects?: TopicSubjectUncheckedUpdateManyWithoutTopicNestedInput
    accessibilityCategoryTopics?: AccessibilityCategoryTopicUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TopicUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentCreateInput = {
    title: string
    type: string
    link: string
    thumbnailUrl: string
    pdfUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    topic: TopicCreateNestedOneWithoutContentsInput
    checklists?: ChecklistCreateNestedManyWithoutContentInput
    vestibularContents?: VestibularContentCreateNestedManyWithoutOriginalContentInput
  }

  export type ContentUncheckedCreateInput = {
    id?: number
    title: string
    type: string
    link: string
    thumbnailUrl: string
    pdfUrl?: string | null
    topicId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    checklists?: ChecklistUncheckedCreateNestedManyWithoutContentInput
    vestibularContents?: VestibularContentUncheckedCreateNestedManyWithoutOriginalContentInput
  }

  export type ContentUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: TopicUpdateOneRequiredWithoutContentsNestedInput
    checklists?: ChecklistUpdateManyWithoutContentNestedInput
    vestibularContents?: VestibularContentUpdateManyWithoutOriginalContentNestedInput
  }

  export type ContentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    topicId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checklists?: ChecklistUncheckedUpdateManyWithoutContentNestedInput
    vestibularContents?: VestibularContentUncheckedUpdateManyWithoutOriginalContentNestedInput
  }

  export type ContentCreateManyInput = {
    id?: number
    title: string
    type: string
    link: string
    thumbnailUrl: string
    pdfUrl?: string | null
    topicId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    topicId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicSubjectCreateInput = {
    topic: TopicCreateNestedOneWithoutTopicSubjectsInput
    subject: SubjectCreateNestedOneWithoutTopicSubjectsInput
  }

  export type TopicSubjectUncheckedCreateInput = {
    topicId: number
    subjectId: number
  }

  export type TopicSubjectUpdateInput = {
    topic?: TopicUpdateOneRequiredWithoutTopicSubjectsNestedInput
    subject?: SubjectUpdateOneRequiredWithoutTopicSubjectsNestedInput
  }

  export type TopicSubjectUncheckedUpdateInput = {
    topicId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
  }

  export type TopicSubjectCreateManyInput = {
    topicId: number
    subjectId: number
  }

  export type TopicSubjectUpdateManyMutationInput = {

  }

  export type TopicSubjectUncheckedUpdateManyInput = {
    topicId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
  }

  export type VestibularCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vestibularSubjects?: VestibularSubjectCreateNestedManyWithoutVestibularInput
    contents?: VestibularContentCreateNestedManyWithoutVestibularInput
    vestibularTopics?: VestibularTopicCreateNestedManyWithoutVestibularInput
  }

  export type VestibularUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vestibularSubjects?: VestibularSubjectUncheckedCreateNestedManyWithoutVestibularInput
    contents?: VestibularContentUncheckedCreateNestedManyWithoutVestibularInput
    vestibularTopics?: VestibularTopicUncheckedCreateNestedManyWithoutVestibularInput
  }

  export type VestibularUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vestibularSubjects?: VestibularSubjectUpdateManyWithoutVestibularNestedInput
    contents?: VestibularContentUpdateManyWithoutVestibularNestedInput
    vestibularTopics?: VestibularTopicUpdateManyWithoutVestibularNestedInput
  }

  export type VestibularUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vestibularSubjects?: VestibularSubjectUncheckedUpdateManyWithoutVestibularNestedInput
    contents?: VestibularContentUncheckedUpdateManyWithoutVestibularNestedInput
    vestibularTopics?: VestibularTopicUncheckedUpdateManyWithoutVestibularNestedInput
  }

  export type VestibularCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VestibularUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VestibularUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VestibularSubjectCreateInput = {
    vestibular: VestibularCreateNestedOneWithoutVestibularSubjectsInput
    subject: SubjectCreateNestedOneWithoutVestibularSubjectsInput
  }

  export type VestibularSubjectUncheckedCreateInput = {
    vestibularId: number
    subjectId: number
  }

  export type VestibularSubjectUpdateInput = {
    vestibular?: VestibularUpdateOneRequiredWithoutVestibularSubjectsNestedInput
    subject?: SubjectUpdateOneRequiredWithoutVestibularSubjectsNestedInput
  }

  export type VestibularSubjectUncheckedUpdateInput = {
    vestibularId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
  }

  export type VestibularSubjectCreateManyInput = {
    vestibularId: number
    subjectId: number
  }

  export type VestibularSubjectUpdateManyMutationInput = {

  }

  export type VestibularSubjectUncheckedUpdateManyInput = {
    vestibularId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
  }

  export type VestibularContentCreateInput = {
    title: string
    type?: string | null
    link?: string | null
    pdfUrl?: string | null
    isShared?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    vestibular: VestibularCreateNestedOneWithoutContentsInput
    originalContent?: ContentCreateNestedOneWithoutVestibularContentsInput
  }

  export type VestibularContentUncheckedCreateInput = {
    id?: number
    vestibularId: number
    title: string
    type?: string | null
    link?: string | null
    pdfUrl?: string | null
    isShared?: boolean
    originalContentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VestibularContentUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isShared?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vestibular?: VestibularUpdateOneRequiredWithoutContentsNestedInput
    originalContent?: ContentUpdateOneWithoutVestibularContentsNestedInput
  }

  export type VestibularContentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    vestibularId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isShared?: BoolFieldUpdateOperationsInput | boolean
    originalContentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VestibularContentCreateManyInput = {
    id?: number
    vestibularId: number
    title: string
    type?: string | null
    link?: string | null
    pdfUrl?: string | null
    isShared?: boolean
    originalContentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VestibularContentUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isShared?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VestibularContentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    vestibularId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isShared?: BoolFieldUpdateOperationsInput | boolean
    originalContentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VestibularTopicCreateInput = {
    name: string
    originalTopicId?: number | null
    isShared?: boolean
    notes?: string | null
    tags?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vestibular: VestibularCreateNestedOneWithoutVestibularTopicsInput
  }

  export type VestibularTopicUncheckedCreateInput = {
    id?: number
    vestibularId: number
    name: string
    originalTopicId?: number | null
    isShared?: boolean
    notes?: string | null
    tags?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VestibularTopicUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    originalTopicId?: NullableIntFieldUpdateOperationsInput | number | null
    isShared?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vestibular?: VestibularUpdateOneRequiredWithoutVestibularTopicsNestedInput
  }

  export type VestibularTopicUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    vestibularId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    originalTopicId?: NullableIntFieldUpdateOperationsInput | number | null
    isShared?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VestibularTopicCreateManyInput = {
    id?: number
    vestibularId: number
    name: string
    originalTopicId?: number | null
    isShared?: boolean
    notes?: string | null
    tags?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VestibularTopicUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    originalTopicId?: NullableIntFieldUpdateOperationsInput | number | null
    isShared?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VestibularTopicUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    vestibularId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    originalTopicId?: NullableIntFieldUpdateOperationsInput | number | null
    isShared?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessibilityCategoryCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryTopics?: AccessibilityCategoryTopicCreateNestedManyWithoutAccessibilityCategoryInput
    needs?: AccessibilityNeedCreateNestedManyWithoutAccessibilityCategoryInput
    themes?: AccessibilityThemeCreateNestedManyWithoutAccessibilityCategoryInput
  }

  export type AccessibilityCategoryUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryTopics?: AccessibilityCategoryTopicUncheckedCreateNestedManyWithoutAccessibilityCategoryInput
    needs?: AccessibilityNeedUncheckedCreateNestedManyWithoutAccessibilityCategoryInput
    themes?: AccessibilityThemeUncheckedCreateNestedManyWithoutAccessibilityCategoryInput
  }

  export type AccessibilityCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryTopics?: AccessibilityCategoryTopicUpdateManyWithoutAccessibilityCategoryNestedInput
    needs?: AccessibilityNeedUpdateManyWithoutAccessibilityCategoryNestedInput
    themes?: AccessibilityThemeUpdateManyWithoutAccessibilityCategoryNestedInput
  }

  export type AccessibilityCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryTopics?: AccessibilityCategoryTopicUncheckedUpdateManyWithoutAccessibilityCategoryNestedInput
    needs?: AccessibilityNeedUncheckedUpdateManyWithoutAccessibilityCategoryNestedInput
    themes?: AccessibilityThemeUncheckedUpdateManyWithoutAccessibilityCategoryNestedInput
  }

  export type AccessibilityCategoryCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccessibilityCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessibilityCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessibilityCategoryTopicCreateInput = {
    accessibilityCategory: AccessibilityCategoryCreateNestedOneWithoutCategoryTopicsInput
    topic: TopicCreateNestedOneWithoutAccessibilityCategoryTopicsInput
  }

  export type AccessibilityCategoryTopicUncheckedCreateInput = {
    accessibilityCategoryId: number
    topicId: number
  }

  export type AccessibilityCategoryTopicUpdateInput = {
    accessibilityCategory?: AccessibilityCategoryUpdateOneRequiredWithoutCategoryTopicsNestedInput
    topic?: TopicUpdateOneRequiredWithoutAccessibilityCategoryTopicsNestedInput
  }

  export type AccessibilityCategoryTopicUncheckedUpdateInput = {
    accessibilityCategoryId?: IntFieldUpdateOperationsInput | number
    topicId?: IntFieldUpdateOperationsInput | number
  }

  export type AccessibilityCategoryTopicCreateManyInput = {
    accessibilityCategoryId: number
    topicId: number
  }

  export type AccessibilityCategoryTopicUpdateManyMutationInput = {

  }

  export type AccessibilityCategoryTopicUncheckedUpdateManyInput = {
    accessibilityCategoryId?: IntFieldUpdateOperationsInput | number
    topicId?: IntFieldUpdateOperationsInput | number
  }

  export type AccessibilityNeedCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accessibilityCategory: AccessibilityCategoryCreateNestedOneWithoutNeedsInput
    themes?: AccessibilityThemeCreateNestedManyWithoutAccessibilityNeedInput
  }

  export type AccessibilityNeedUncheckedCreateInput = {
    id?: number
    accessibilityCategoryId: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    themes?: AccessibilityThemeUncheckedCreateNestedManyWithoutAccessibilityNeedInput
  }

  export type AccessibilityNeedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessibilityCategory?: AccessibilityCategoryUpdateOneRequiredWithoutNeedsNestedInput
    themes?: AccessibilityThemeUpdateManyWithoutAccessibilityNeedNestedInput
  }

  export type AccessibilityNeedUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    accessibilityCategoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    themes?: AccessibilityThemeUncheckedUpdateManyWithoutAccessibilityNeedNestedInput
  }

  export type AccessibilityNeedCreateManyInput = {
    id?: number
    accessibilityCategoryId: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccessibilityNeedUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessibilityNeedUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    accessibilityCategoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessibilityThemeCreateInput = {
    title: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accessibilityCategory: AccessibilityCategoryCreateNestedOneWithoutThemesInput
    accessibilityNeed?: AccessibilityNeedCreateNestedOneWithoutThemesInput
  }

  export type AccessibilityThemeUncheckedCreateInput = {
    id?: number
    accessibilityCategoryId: number
    accessibilityNeedId?: number | null
    title: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccessibilityThemeUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessibilityCategory?: AccessibilityCategoryUpdateOneRequiredWithoutThemesNestedInput
    accessibilityNeed?: AccessibilityNeedUpdateOneWithoutThemesNestedInput
  }

  export type AccessibilityThemeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    accessibilityCategoryId?: IntFieldUpdateOperationsInput | number
    accessibilityNeedId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessibilityThemeCreateManyInput = {
    id?: number
    accessibilityCategoryId: number
    accessibilityNeedId?: number | null
    title: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccessibilityThemeUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessibilityThemeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    accessibilityCategoryId?: IntFieldUpdateOperationsInput | number
    accessibilityNeedId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ChecklistListRelationFilter = {
    every?: ChecklistWhereInput
    some?: ChecklistWhereInput
    none?: ChecklistWhereInput
  }

  export type ChecklistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ContentScalarRelationFilter = {
    is?: ContentWhereInput
    isNot?: ContentWhereInput
  }

  export type ChecklistUserIdContentIdCompoundUniqueInput = {
    userId: string
    contentId: number
  }

  export type ChecklistCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
  }

  export type ChecklistAvgOrderByAggregateInput = {
    id?: SortOrder
    contentId?: SortOrder
  }

  export type ChecklistMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
  }

  export type ChecklistMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
  }

  export type ChecklistSumOrderByAggregateInput = {
    id?: SortOrder
    contentId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type SubjectListRelationFilter = {
    every?: SubjectWhereInput
    some?: SubjectWhereInput
    none?: SubjectWhereInput
  }

  export type SubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SeriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SeriesNullableScalarRelationFilter = {
    is?: SeriesWhereInput | null
    isNot?: SeriesWhereInput | null
  }

  export type TopicSubjectListRelationFilter = {
    every?: TopicSubjectWhereInput
    some?: TopicSubjectWhereInput
    none?: TopicSubjectWhereInput
  }

  export type VestibularSubjectListRelationFilter = {
    every?: VestibularSubjectWhereInput
    some?: VestibularSubjectWhereInput
    none?: VestibularSubjectWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TopicSubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VestibularSubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    seriesId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubjectAvgOrderByAggregateInput = {
    id?: SortOrder
    seriesId?: SortOrder
  }

  export type SubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    seriesId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    seriesId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubjectSumOrderByAggregateInput = {
    id?: SortOrder
    seriesId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ContentListRelationFilter = {
    every?: ContentWhereInput
    some?: ContentWhereInput
    none?: ContentWhereInput
  }

  export type AccessibilityCategoryTopicListRelationFilter = {
    every?: AccessibilityCategoryTopicWhereInput
    some?: AccessibilityCategoryTopicWhereInput
    none?: AccessibilityCategoryTopicWhereInput
  }

  export type ContentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccessibilityCategoryTopicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TopicCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TopicAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TopicMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TopicMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TopicSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TopicScalarRelationFilter = {
    is?: TopicWhereInput
    isNot?: TopicWhereInput
  }

  export type VestibularContentListRelationFilter = {
    every?: VestibularContentWhereInput
    some?: VestibularContentWhereInput
    none?: VestibularContentWhereInput
  }

  export type VestibularContentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    link?: SortOrder
    thumbnailUrl?: SortOrder
    pdfUrl?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentAvgOrderByAggregateInput = {
    id?: SortOrder
    topicId?: SortOrder
  }

  export type ContentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    link?: SortOrder
    thumbnailUrl?: SortOrder
    pdfUrl?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    link?: SortOrder
    thumbnailUrl?: SortOrder
    pdfUrl?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentSumOrderByAggregateInput = {
    id?: SortOrder
    topicId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type SubjectScalarRelationFilter = {
    is?: SubjectWhereInput
    isNot?: SubjectWhereInput
  }

  export type TopicSubjectTopicIdSubjectIdCompoundUniqueInput = {
    topicId: number
    subjectId: number
  }

  export type TopicSubjectCountOrderByAggregateInput = {
    topicId?: SortOrder
    subjectId?: SortOrder
  }

  export type TopicSubjectAvgOrderByAggregateInput = {
    topicId?: SortOrder
    subjectId?: SortOrder
  }

  export type TopicSubjectMaxOrderByAggregateInput = {
    topicId?: SortOrder
    subjectId?: SortOrder
  }

  export type TopicSubjectMinOrderByAggregateInput = {
    topicId?: SortOrder
    subjectId?: SortOrder
  }

  export type TopicSubjectSumOrderByAggregateInput = {
    topicId?: SortOrder
    subjectId?: SortOrder
  }

  export type VestibularTopicListRelationFilter = {
    every?: VestibularTopicWhereInput
    some?: VestibularTopicWhereInput
    none?: VestibularTopicWhereInput
  }

  export type VestibularTopicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VestibularCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VestibularAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VestibularMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VestibularMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VestibularSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VestibularScalarRelationFilter = {
    is?: VestibularWhereInput
    isNot?: VestibularWhereInput
  }

  export type VestibularSubjectVestibularIdSubjectIdCompoundUniqueInput = {
    vestibularId: number
    subjectId: number
  }

  export type VestibularSubjectCountOrderByAggregateInput = {
    vestibularId?: SortOrder
    subjectId?: SortOrder
  }

  export type VestibularSubjectAvgOrderByAggregateInput = {
    vestibularId?: SortOrder
    subjectId?: SortOrder
  }

  export type VestibularSubjectMaxOrderByAggregateInput = {
    vestibularId?: SortOrder
    subjectId?: SortOrder
  }

  export type VestibularSubjectMinOrderByAggregateInput = {
    vestibularId?: SortOrder
    subjectId?: SortOrder
  }

  export type VestibularSubjectSumOrderByAggregateInput = {
    vestibularId?: SortOrder
    subjectId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ContentNullableScalarRelationFilter = {
    is?: ContentWhereInput | null
    isNot?: ContentWhereInput | null
  }

  export type VestibularContentCountOrderByAggregateInput = {
    id?: SortOrder
    vestibularId?: SortOrder
    title?: SortOrder
    type?: SortOrder
    link?: SortOrder
    pdfUrl?: SortOrder
    isShared?: SortOrder
    originalContentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VestibularContentAvgOrderByAggregateInput = {
    id?: SortOrder
    vestibularId?: SortOrder
    originalContentId?: SortOrder
  }

  export type VestibularContentMaxOrderByAggregateInput = {
    id?: SortOrder
    vestibularId?: SortOrder
    title?: SortOrder
    type?: SortOrder
    link?: SortOrder
    pdfUrl?: SortOrder
    isShared?: SortOrder
    originalContentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VestibularContentMinOrderByAggregateInput = {
    id?: SortOrder
    vestibularId?: SortOrder
    title?: SortOrder
    type?: SortOrder
    link?: SortOrder
    pdfUrl?: SortOrder
    isShared?: SortOrder
    originalContentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VestibularContentSumOrderByAggregateInput = {
    id?: SortOrder
    vestibularId?: SortOrder
    originalContentId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type VestibularTopicCountOrderByAggregateInput = {
    id?: SortOrder
    vestibularId?: SortOrder
    name?: SortOrder
    originalTopicId?: SortOrder
    isShared?: SortOrder
    notes?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VestibularTopicAvgOrderByAggregateInput = {
    id?: SortOrder
    vestibularId?: SortOrder
    originalTopicId?: SortOrder
  }

  export type VestibularTopicMaxOrderByAggregateInput = {
    id?: SortOrder
    vestibularId?: SortOrder
    name?: SortOrder
    originalTopicId?: SortOrder
    isShared?: SortOrder
    notes?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VestibularTopicMinOrderByAggregateInput = {
    id?: SortOrder
    vestibularId?: SortOrder
    name?: SortOrder
    originalTopicId?: SortOrder
    isShared?: SortOrder
    notes?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VestibularTopicSumOrderByAggregateInput = {
    id?: SortOrder
    vestibularId?: SortOrder
    originalTopicId?: SortOrder
  }

  export type AccessibilityNeedListRelationFilter = {
    every?: AccessibilityNeedWhereInput
    some?: AccessibilityNeedWhereInput
    none?: AccessibilityNeedWhereInput
  }

  export type AccessibilityThemeListRelationFilter = {
    every?: AccessibilityThemeWhereInput
    some?: AccessibilityThemeWhereInput
    none?: AccessibilityThemeWhereInput
  }

  export type AccessibilityNeedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccessibilityThemeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccessibilityCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccessibilityCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AccessibilityCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccessibilityCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccessibilityCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AccessibilityCategoryScalarRelationFilter = {
    is?: AccessibilityCategoryWhereInput
    isNot?: AccessibilityCategoryWhereInput
  }

  export type AccessibilityCategoryTopicAccessibilityCategoryIdTopicIdCompoundUniqueInput = {
    accessibilityCategoryId: number
    topicId: number
  }

  export type AccessibilityCategoryTopicCountOrderByAggregateInput = {
    accessibilityCategoryId?: SortOrder
    topicId?: SortOrder
  }

  export type AccessibilityCategoryTopicAvgOrderByAggregateInput = {
    accessibilityCategoryId?: SortOrder
    topicId?: SortOrder
  }

  export type AccessibilityCategoryTopicMaxOrderByAggregateInput = {
    accessibilityCategoryId?: SortOrder
    topicId?: SortOrder
  }

  export type AccessibilityCategoryTopicMinOrderByAggregateInput = {
    accessibilityCategoryId?: SortOrder
    topicId?: SortOrder
  }

  export type AccessibilityCategoryTopicSumOrderByAggregateInput = {
    accessibilityCategoryId?: SortOrder
    topicId?: SortOrder
  }

  export type AccessibilityNeedCountOrderByAggregateInput = {
    id?: SortOrder
    accessibilityCategoryId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccessibilityNeedAvgOrderByAggregateInput = {
    id?: SortOrder
    accessibilityCategoryId?: SortOrder
  }

  export type AccessibilityNeedMaxOrderByAggregateInput = {
    id?: SortOrder
    accessibilityCategoryId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccessibilityNeedMinOrderByAggregateInput = {
    id?: SortOrder
    accessibilityCategoryId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccessibilityNeedSumOrderByAggregateInput = {
    id?: SortOrder
    accessibilityCategoryId?: SortOrder
  }

  export type AccessibilityNeedNullableScalarRelationFilter = {
    is?: AccessibilityNeedWhereInput | null
    isNot?: AccessibilityNeedWhereInput | null
  }

  export type AccessibilityThemeCountOrderByAggregateInput = {
    id?: SortOrder
    accessibilityCategoryId?: SortOrder
    accessibilityNeedId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccessibilityThemeAvgOrderByAggregateInput = {
    id?: SortOrder
    accessibilityCategoryId?: SortOrder
    accessibilityNeedId?: SortOrder
  }

  export type AccessibilityThemeMaxOrderByAggregateInput = {
    id?: SortOrder
    accessibilityCategoryId?: SortOrder
    accessibilityNeedId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccessibilityThemeMinOrderByAggregateInput = {
    id?: SortOrder
    accessibilityCategoryId?: SortOrder
    accessibilityNeedId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccessibilityThemeSumOrderByAggregateInput = {
    id?: SortOrder
    accessibilityCategoryId?: SortOrder
    accessibilityNeedId?: SortOrder
  }

  export type ChecklistCreateNestedManyWithoutUserInput = {
    create?: XOR<ChecklistCreateWithoutUserInput, ChecklistUncheckedCreateWithoutUserInput> | ChecklistCreateWithoutUserInput[] | ChecklistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutUserInput | ChecklistCreateOrConnectWithoutUserInput[]
    createMany?: ChecklistCreateManyUserInputEnvelope
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
  }

  export type ChecklistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChecklistCreateWithoutUserInput, ChecklistUncheckedCreateWithoutUserInput> | ChecklistCreateWithoutUserInput[] | ChecklistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutUserInput | ChecklistCreateOrConnectWithoutUserInput[]
    createMany?: ChecklistCreateManyUserInputEnvelope
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ChecklistUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChecklistCreateWithoutUserInput, ChecklistUncheckedCreateWithoutUserInput> | ChecklistCreateWithoutUserInput[] | ChecklistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutUserInput | ChecklistCreateOrConnectWithoutUserInput[]
    upsert?: ChecklistUpsertWithWhereUniqueWithoutUserInput | ChecklistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChecklistCreateManyUserInputEnvelope
    set?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    disconnect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    delete?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    update?: ChecklistUpdateWithWhereUniqueWithoutUserInput | ChecklistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChecklistUpdateManyWithWhereWithoutUserInput | ChecklistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChecklistScalarWhereInput | ChecklistScalarWhereInput[]
  }

  export type ChecklistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChecklistCreateWithoutUserInput, ChecklistUncheckedCreateWithoutUserInput> | ChecklistCreateWithoutUserInput[] | ChecklistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutUserInput | ChecklistCreateOrConnectWithoutUserInput[]
    upsert?: ChecklistUpsertWithWhereUniqueWithoutUserInput | ChecklistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChecklistCreateManyUserInputEnvelope
    set?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    disconnect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    delete?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    update?: ChecklistUpdateWithWhereUniqueWithoutUserInput | ChecklistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChecklistUpdateManyWithWhereWithoutUserInput | ChecklistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChecklistScalarWhereInput | ChecklistScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutChecklistsInput = {
    create?: XOR<UserCreateWithoutChecklistsInput, UserUncheckedCreateWithoutChecklistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChecklistsInput
    connect?: UserWhereUniqueInput
  }

  export type ContentCreateNestedOneWithoutChecklistsInput = {
    create?: XOR<ContentCreateWithoutChecklistsInput, ContentUncheckedCreateWithoutChecklistsInput>
    connectOrCreate?: ContentCreateOrConnectWithoutChecklistsInput
    connect?: ContentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutChecklistsNestedInput = {
    create?: XOR<UserCreateWithoutChecklistsInput, UserUncheckedCreateWithoutChecklistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChecklistsInput
    upsert?: UserUpsertWithoutChecklistsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChecklistsInput, UserUpdateWithoutChecklistsInput>, UserUncheckedUpdateWithoutChecklistsInput>
  }

  export type ContentUpdateOneRequiredWithoutChecklistsNestedInput = {
    create?: XOR<ContentCreateWithoutChecklistsInput, ContentUncheckedCreateWithoutChecklistsInput>
    connectOrCreate?: ContentCreateOrConnectWithoutChecklistsInput
    upsert?: ContentUpsertWithoutChecklistsInput
    connect?: ContentWhereUniqueInput
    update?: XOR<XOR<ContentUpdateToOneWithWhereWithoutChecklistsInput, ContentUpdateWithoutChecklistsInput>, ContentUncheckedUpdateWithoutChecklistsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubjectCreateNestedManyWithoutSeriesInput = {
    create?: XOR<SubjectCreateWithoutSeriesInput, SubjectUncheckedCreateWithoutSeriesInput> | SubjectCreateWithoutSeriesInput[] | SubjectUncheckedCreateWithoutSeriesInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutSeriesInput | SubjectCreateOrConnectWithoutSeriesInput[]
    createMany?: SubjectCreateManySeriesInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type SubjectUncheckedCreateNestedManyWithoutSeriesInput = {
    create?: XOR<SubjectCreateWithoutSeriesInput, SubjectUncheckedCreateWithoutSeriesInput> | SubjectCreateWithoutSeriesInput[] | SubjectUncheckedCreateWithoutSeriesInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutSeriesInput | SubjectCreateOrConnectWithoutSeriesInput[]
    createMany?: SubjectCreateManySeriesInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type SubjectUpdateManyWithoutSeriesNestedInput = {
    create?: XOR<SubjectCreateWithoutSeriesInput, SubjectUncheckedCreateWithoutSeriesInput> | SubjectCreateWithoutSeriesInput[] | SubjectUncheckedCreateWithoutSeriesInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutSeriesInput | SubjectCreateOrConnectWithoutSeriesInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutSeriesInput | SubjectUpsertWithWhereUniqueWithoutSeriesInput[]
    createMany?: SubjectCreateManySeriesInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutSeriesInput | SubjectUpdateWithWhereUniqueWithoutSeriesInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutSeriesInput | SubjectUpdateManyWithWhereWithoutSeriesInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type SubjectUncheckedUpdateManyWithoutSeriesNestedInput = {
    create?: XOR<SubjectCreateWithoutSeriesInput, SubjectUncheckedCreateWithoutSeriesInput> | SubjectCreateWithoutSeriesInput[] | SubjectUncheckedCreateWithoutSeriesInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutSeriesInput | SubjectCreateOrConnectWithoutSeriesInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutSeriesInput | SubjectUpsertWithWhereUniqueWithoutSeriesInput[]
    createMany?: SubjectCreateManySeriesInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutSeriesInput | SubjectUpdateWithWhereUniqueWithoutSeriesInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutSeriesInput | SubjectUpdateManyWithWhereWithoutSeriesInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type SeriesCreateNestedOneWithoutSubjectsInput = {
    create?: XOR<SeriesCreateWithoutSubjectsInput, SeriesUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: SeriesCreateOrConnectWithoutSubjectsInput
    connect?: SeriesWhereUniqueInput
  }

  export type TopicSubjectCreateNestedManyWithoutSubjectInput = {
    create?: XOR<TopicSubjectCreateWithoutSubjectInput, TopicSubjectUncheckedCreateWithoutSubjectInput> | TopicSubjectCreateWithoutSubjectInput[] | TopicSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TopicSubjectCreateOrConnectWithoutSubjectInput | TopicSubjectCreateOrConnectWithoutSubjectInput[]
    createMany?: TopicSubjectCreateManySubjectInputEnvelope
    connect?: TopicSubjectWhereUniqueInput | TopicSubjectWhereUniqueInput[]
  }

  export type VestibularSubjectCreateNestedManyWithoutSubjectInput = {
    create?: XOR<VestibularSubjectCreateWithoutSubjectInput, VestibularSubjectUncheckedCreateWithoutSubjectInput> | VestibularSubjectCreateWithoutSubjectInput[] | VestibularSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: VestibularSubjectCreateOrConnectWithoutSubjectInput | VestibularSubjectCreateOrConnectWithoutSubjectInput[]
    createMany?: VestibularSubjectCreateManySubjectInputEnvelope
    connect?: VestibularSubjectWhereUniqueInput | VestibularSubjectWhereUniqueInput[]
  }

  export type TopicSubjectUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<TopicSubjectCreateWithoutSubjectInput, TopicSubjectUncheckedCreateWithoutSubjectInput> | TopicSubjectCreateWithoutSubjectInput[] | TopicSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TopicSubjectCreateOrConnectWithoutSubjectInput | TopicSubjectCreateOrConnectWithoutSubjectInput[]
    createMany?: TopicSubjectCreateManySubjectInputEnvelope
    connect?: TopicSubjectWhereUniqueInput | TopicSubjectWhereUniqueInput[]
  }

  export type VestibularSubjectUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<VestibularSubjectCreateWithoutSubjectInput, VestibularSubjectUncheckedCreateWithoutSubjectInput> | VestibularSubjectCreateWithoutSubjectInput[] | VestibularSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: VestibularSubjectCreateOrConnectWithoutSubjectInput | VestibularSubjectCreateOrConnectWithoutSubjectInput[]
    createMany?: VestibularSubjectCreateManySubjectInputEnvelope
    connect?: VestibularSubjectWhereUniqueInput | VestibularSubjectWhereUniqueInput[]
  }

  export type SeriesUpdateOneWithoutSubjectsNestedInput = {
    create?: XOR<SeriesCreateWithoutSubjectsInput, SeriesUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: SeriesCreateOrConnectWithoutSubjectsInput
    upsert?: SeriesUpsertWithoutSubjectsInput
    disconnect?: SeriesWhereInput | boolean
    delete?: SeriesWhereInput | boolean
    connect?: SeriesWhereUniqueInput
    update?: XOR<XOR<SeriesUpdateToOneWithWhereWithoutSubjectsInput, SeriesUpdateWithoutSubjectsInput>, SeriesUncheckedUpdateWithoutSubjectsInput>
  }

  export type TopicSubjectUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<TopicSubjectCreateWithoutSubjectInput, TopicSubjectUncheckedCreateWithoutSubjectInput> | TopicSubjectCreateWithoutSubjectInput[] | TopicSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TopicSubjectCreateOrConnectWithoutSubjectInput | TopicSubjectCreateOrConnectWithoutSubjectInput[]
    upsert?: TopicSubjectUpsertWithWhereUniqueWithoutSubjectInput | TopicSubjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: TopicSubjectCreateManySubjectInputEnvelope
    set?: TopicSubjectWhereUniqueInput | TopicSubjectWhereUniqueInput[]
    disconnect?: TopicSubjectWhereUniqueInput | TopicSubjectWhereUniqueInput[]
    delete?: TopicSubjectWhereUniqueInput | TopicSubjectWhereUniqueInput[]
    connect?: TopicSubjectWhereUniqueInput | TopicSubjectWhereUniqueInput[]
    update?: TopicSubjectUpdateWithWhereUniqueWithoutSubjectInput | TopicSubjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: TopicSubjectUpdateManyWithWhereWithoutSubjectInput | TopicSubjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: TopicSubjectScalarWhereInput | TopicSubjectScalarWhereInput[]
  }

  export type VestibularSubjectUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<VestibularSubjectCreateWithoutSubjectInput, VestibularSubjectUncheckedCreateWithoutSubjectInput> | VestibularSubjectCreateWithoutSubjectInput[] | VestibularSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: VestibularSubjectCreateOrConnectWithoutSubjectInput | VestibularSubjectCreateOrConnectWithoutSubjectInput[]
    upsert?: VestibularSubjectUpsertWithWhereUniqueWithoutSubjectInput | VestibularSubjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: VestibularSubjectCreateManySubjectInputEnvelope
    set?: VestibularSubjectWhereUniqueInput | VestibularSubjectWhereUniqueInput[]
    disconnect?: VestibularSubjectWhereUniqueInput | VestibularSubjectWhereUniqueInput[]
    delete?: VestibularSubjectWhereUniqueInput | VestibularSubjectWhereUniqueInput[]
    connect?: VestibularSubjectWhereUniqueInput | VestibularSubjectWhereUniqueInput[]
    update?: VestibularSubjectUpdateWithWhereUniqueWithoutSubjectInput | VestibularSubjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: VestibularSubjectUpdateManyWithWhereWithoutSubjectInput | VestibularSubjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: VestibularSubjectScalarWhereInput | VestibularSubjectScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TopicSubjectUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<TopicSubjectCreateWithoutSubjectInput, TopicSubjectUncheckedCreateWithoutSubjectInput> | TopicSubjectCreateWithoutSubjectInput[] | TopicSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TopicSubjectCreateOrConnectWithoutSubjectInput | TopicSubjectCreateOrConnectWithoutSubjectInput[]
    upsert?: TopicSubjectUpsertWithWhereUniqueWithoutSubjectInput | TopicSubjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: TopicSubjectCreateManySubjectInputEnvelope
    set?: TopicSubjectWhereUniqueInput | TopicSubjectWhereUniqueInput[]
    disconnect?: TopicSubjectWhereUniqueInput | TopicSubjectWhereUniqueInput[]
    delete?: TopicSubjectWhereUniqueInput | TopicSubjectWhereUniqueInput[]
    connect?: TopicSubjectWhereUniqueInput | TopicSubjectWhereUniqueInput[]
    update?: TopicSubjectUpdateWithWhereUniqueWithoutSubjectInput | TopicSubjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: TopicSubjectUpdateManyWithWhereWithoutSubjectInput | TopicSubjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: TopicSubjectScalarWhereInput | TopicSubjectScalarWhereInput[]
  }

  export type VestibularSubjectUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<VestibularSubjectCreateWithoutSubjectInput, VestibularSubjectUncheckedCreateWithoutSubjectInput> | VestibularSubjectCreateWithoutSubjectInput[] | VestibularSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: VestibularSubjectCreateOrConnectWithoutSubjectInput | VestibularSubjectCreateOrConnectWithoutSubjectInput[]
    upsert?: VestibularSubjectUpsertWithWhereUniqueWithoutSubjectInput | VestibularSubjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: VestibularSubjectCreateManySubjectInputEnvelope
    set?: VestibularSubjectWhereUniqueInput | VestibularSubjectWhereUniqueInput[]
    disconnect?: VestibularSubjectWhereUniqueInput | VestibularSubjectWhereUniqueInput[]
    delete?: VestibularSubjectWhereUniqueInput | VestibularSubjectWhereUniqueInput[]
    connect?: VestibularSubjectWhereUniqueInput | VestibularSubjectWhereUniqueInput[]
    update?: VestibularSubjectUpdateWithWhereUniqueWithoutSubjectInput | VestibularSubjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: VestibularSubjectUpdateManyWithWhereWithoutSubjectInput | VestibularSubjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: VestibularSubjectScalarWhereInput | VestibularSubjectScalarWhereInput[]
  }

  export type ContentCreateNestedManyWithoutTopicInput = {
    create?: XOR<ContentCreateWithoutTopicInput, ContentUncheckedCreateWithoutTopicInput> | ContentCreateWithoutTopicInput[] | ContentUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutTopicInput | ContentCreateOrConnectWithoutTopicInput[]
    createMany?: ContentCreateManyTopicInputEnvelope
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
  }

  export type TopicSubjectCreateNestedManyWithoutTopicInput = {
    create?: XOR<TopicSubjectCreateWithoutTopicInput, TopicSubjectUncheckedCreateWithoutTopicInput> | TopicSubjectCreateWithoutTopicInput[] | TopicSubjectUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: TopicSubjectCreateOrConnectWithoutTopicInput | TopicSubjectCreateOrConnectWithoutTopicInput[]
    createMany?: TopicSubjectCreateManyTopicInputEnvelope
    connect?: TopicSubjectWhereUniqueInput | TopicSubjectWhereUniqueInput[]
  }

  export type AccessibilityCategoryTopicCreateNestedManyWithoutTopicInput = {
    create?: XOR<AccessibilityCategoryTopicCreateWithoutTopicInput, AccessibilityCategoryTopicUncheckedCreateWithoutTopicInput> | AccessibilityCategoryTopicCreateWithoutTopicInput[] | AccessibilityCategoryTopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: AccessibilityCategoryTopicCreateOrConnectWithoutTopicInput | AccessibilityCategoryTopicCreateOrConnectWithoutTopicInput[]
    createMany?: AccessibilityCategoryTopicCreateManyTopicInputEnvelope
    connect?: AccessibilityCategoryTopicWhereUniqueInput | AccessibilityCategoryTopicWhereUniqueInput[]
  }

  export type ContentUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<ContentCreateWithoutTopicInput, ContentUncheckedCreateWithoutTopicInput> | ContentCreateWithoutTopicInput[] | ContentUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutTopicInput | ContentCreateOrConnectWithoutTopicInput[]
    createMany?: ContentCreateManyTopicInputEnvelope
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
  }

  export type TopicSubjectUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<TopicSubjectCreateWithoutTopicInput, TopicSubjectUncheckedCreateWithoutTopicInput> | TopicSubjectCreateWithoutTopicInput[] | TopicSubjectUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: TopicSubjectCreateOrConnectWithoutTopicInput | TopicSubjectCreateOrConnectWithoutTopicInput[]
    createMany?: TopicSubjectCreateManyTopicInputEnvelope
    connect?: TopicSubjectWhereUniqueInput | TopicSubjectWhereUniqueInput[]
  }

  export type AccessibilityCategoryTopicUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<AccessibilityCategoryTopicCreateWithoutTopicInput, AccessibilityCategoryTopicUncheckedCreateWithoutTopicInput> | AccessibilityCategoryTopicCreateWithoutTopicInput[] | AccessibilityCategoryTopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: AccessibilityCategoryTopicCreateOrConnectWithoutTopicInput | AccessibilityCategoryTopicCreateOrConnectWithoutTopicInput[]
    createMany?: AccessibilityCategoryTopicCreateManyTopicInputEnvelope
    connect?: AccessibilityCategoryTopicWhereUniqueInput | AccessibilityCategoryTopicWhereUniqueInput[]
  }

  export type ContentUpdateManyWithoutTopicNestedInput = {
    create?: XOR<ContentCreateWithoutTopicInput, ContentUncheckedCreateWithoutTopicInput> | ContentCreateWithoutTopicInput[] | ContentUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutTopicInput | ContentCreateOrConnectWithoutTopicInput[]
    upsert?: ContentUpsertWithWhereUniqueWithoutTopicInput | ContentUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: ContentCreateManyTopicInputEnvelope
    set?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    disconnect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    delete?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    update?: ContentUpdateWithWhereUniqueWithoutTopicInput | ContentUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: ContentUpdateManyWithWhereWithoutTopicInput | ContentUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: ContentScalarWhereInput | ContentScalarWhereInput[]
  }

  export type TopicSubjectUpdateManyWithoutTopicNestedInput = {
    create?: XOR<TopicSubjectCreateWithoutTopicInput, TopicSubjectUncheckedCreateWithoutTopicInput> | TopicSubjectCreateWithoutTopicInput[] | TopicSubjectUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: TopicSubjectCreateOrConnectWithoutTopicInput | TopicSubjectCreateOrConnectWithoutTopicInput[]
    upsert?: TopicSubjectUpsertWithWhereUniqueWithoutTopicInput | TopicSubjectUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: TopicSubjectCreateManyTopicInputEnvelope
    set?: TopicSubjectWhereUniqueInput | TopicSubjectWhereUniqueInput[]
    disconnect?: TopicSubjectWhereUniqueInput | TopicSubjectWhereUniqueInput[]
    delete?: TopicSubjectWhereUniqueInput | TopicSubjectWhereUniqueInput[]
    connect?: TopicSubjectWhereUniqueInput | TopicSubjectWhereUniqueInput[]
    update?: TopicSubjectUpdateWithWhereUniqueWithoutTopicInput | TopicSubjectUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: TopicSubjectUpdateManyWithWhereWithoutTopicInput | TopicSubjectUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: TopicSubjectScalarWhereInput | TopicSubjectScalarWhereInput[]
  }

  export type AccessibilityCategoryTopicUpdateManyWithoutTopicNestedInput = {
    create?: XOR<AccessibilityCategoryTopicCreateWithoutTopicInput, AccessibilityCategoryTopicUncheckedCreateWithoutTopicInput> | AccessibilityCategoryTopicCreateWithoutTopicInput[] | AccessibilityCategoryTopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: AccessibilityCategoryTopicCreateOrConnectWithoutTopicInput | AccessibilityCategoryTopicCreateOrConnectWithoutTopicInput[]
    upsert?: AccessibilityCategoryTopicUpsertWithWhereUniqueWithoutTopicInput | AccessibilityCategoryTopicUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: AccessibilityCategoryTopicCreateManyTopicInputEnvelope
    set?: AccessibilityCategoryTopicWhereUniqueInput | AccessibilityCategoryTopicWhereUniqueInput[]
    disconnect?: AccessibilityCategoryTopicWhereUniqueInput | AccessibilityCategoryTopicWhereUniqueInput[]
    delete?: AccessibilityCategoryTopicWhereUniqueInput | AccessibilityCategoryTopicWhereUniqueInput[]
    connect?: AccessibilityCategoryTopicWhereUniqueInput | AccessibilityCategoryTopicWhereUniqueInput[]
    update?: AccessibilityCategoryTopicUpdateWithWhereUniqueWithoutTopicInput | AccessibilityCategoryTopicUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: AccessibilityCategoryTopicUpdateManyWithWhereWithoutTopicInput | AccessibilityCategoryTopicUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: AccessibilityCategoryTopicScalarWhereInput | AccessibilityCategoryTopicScalarWhereInput[]
  }

  export type ContentUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<ContentCreateWithoutTopicInput, ContentUncheckedCreateWithoutTopicInput> | ContentCreateWithoutTopicInput[] | ContentUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutTopicInput | ContentCreateOrConnectWithoutTopicInput[]
    upsert?: ContentUpsertWithWhereUniqueWithoutTopicInput | ContentUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: ContentCreateManyTopicInputEnvelope
    set?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    disconnect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    delete?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    update?: ContentUpdateWithWhereUniqueWithoutTopicInput | ContentUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: ContentUpdateManyWithWhereWithoutTopicInput | ContentUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: ContentScalarWhereInput | ContentScalarWhereInput[]
  }

  export type TopicSubjectUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<TopicSubjectCreateWithoutTopicInput, TopicSubjectUncheckedCreateWithoutTopicInput> | TopicSubjectCreateWithoutTopicInput[] | TopicSubjectUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: TopicSubjectCreateOrConnectWithoutTopicInput | TopicSubjectCreateOrConnectWithoutTopicInput[]
    upsert?: TopicSubjectUpsertWithWhereUniqueWithoutTopicInput | TopicSubjectUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: TopicSubjectCreateManyTopicInputEnvelope
    set?: TopicSubjectWhereUniqueInput | TopicSubjectWhereUniqueInput[]
    disconnect?: TopicSubjectWhereUniqueInput | TopicSubjectWhereUniqueInput[]
    delete?: TopicSubjectWhereUniqueInput | TopicSubjectWhereUniqueInput[]
    connect?: TopicSubjectWhereUniqueInput | TopicSubjectWhereUniqueInput[]
    update?: TopicSubjectUpdateWithWhereUniqueWithoutTopicInput | TopicSubjectUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: TopicSubjectUpdateManyWithWhereWithoutTopicInput | TopicSubjectUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: TopicSubjectScalarWhereInput | TopicSubjectScalarWhereInput[]
  }

  export type AccessibilityCategoryTopicUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<AccessibilityCategoryTopicCreateWithoutTopicInput, AccessibilityCategoryTopicUncheckedCreateWithoutTopicInput> | AccessibilityCategoryTopicCreateWithoutTopicInput[] | AccessibilityCategoryTopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: AccessibilityCategoryTopicCreateOrConnectWithoutTopicInput | AccessibilityCategoryTopicCreateOrConnectWithoutTopicInput[]
    upsert?: AccessibilityCategoryTopicUpsertWithWhereUniqueWithoutTopicInput | AccessibilityCategoryTopicUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: AccessibilityCategoryTopicCreateManyTopicInputEnvelope
    set?: AccessibilityCategoryTopicWhereUniqueInput | AccessibilityCategoryTopicWhereUniqueInput[]
    disconnect?: AccessibilityCategoryTopicWhereUniqueInput | AccessibilityCategoryTopicWhereUniqueInput[]
    delete?: AccessibilityCategoryTopicWhereUniqueInput | AccessibilityCategoryTopicWhereUniqueInput[]
    connect?: AccessibilityCategoryTopicWhereUniqueInput | AccessibilityCategoryTopicWhereUniqueInput[]
    update?: AccessibilityCategoryTopicUpdateWithWhereUniqueWithoutTopicInput | AccessibilityCategoryTopicUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: AccessibilityCategoryTopicUpdateManyWithWhereWithoutTopicInput | AccessibilityCategoryTopicUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: AccessibilityCategoryTopicScalarWhereInput | AccessibilityCategoryTopicScalarWhereInput[]
  }

  export type TopicCreateNestedOneWithoutContentsInput = {
    create?: XOR<TopicCreateWithoutContentsInput, TopicUncheckedCreateWithoutContentsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutContentsInput
    connect?: TopicWhereUniqueInput
  }

  export type ChecklistCreateNestedManyWithoutContentInput = {
    create?: XOR<ChecklistCreateWithoutContentInput, ChecklistUncheckedCreateWithoutContentInput> | ChecklistCreateWithoutContentInput[] | ChecklistUncheckedCreateWithoutContentInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutContentInput | ChecklistCreateOrConnectWithoutContentInput[]
    createMany?: ChecklistCreateManyContentInputEnvelope
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
  }

  export type VestibularContentCreateNestedManyWithoutOriginalContentInput = {
    create?: XOR<VestibularContentCreateWithoutOriginalContentInput, VestibularContentUncheckedCreateWithoutOriginalContentInput> | VestibularContentCreateWithoutOriginalContentInput[] | VestibularContentUncheckedCreateWithoutOriginalContentInput[]
    connectOrCreate?: VestibularContentCreateOrConnectWithoutOriginalContentInput | VestibularContentCreateOrConnectWithoutOriginalContentInput[]
    createMany?: VestibularContentCreateManyOriginalContentInputEnvelope
    connect?: VestibularContentWhereUniqueInput | VestibularContentWhereUniqueInput[]
  }

  export type ChecklistUncheckedCreateNestedManyWithoutContentInput = {
    create?: XOR<ChecklistCreateWithoutContentInput, ChecklistUncheckedCreateWithoutContentInput> | ChecklistCreateWithoutContentInput[] | ChecklistUncheckedCreateWithoutContentInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutContentInput | ChecklistCreateOrConnectWithoutContentInput[]
    createMany?: ChecklistCreateManyContentInputEnvelope
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
  }

  export type VestibularContentUncheckedCreateNestedManyWithoutOriginalContentInput = {
    create?: XOR<VestibularContentCreateWithoutOriginalContentInput, VestibularContentUncheckedCreateWithoutOriginalContentInput> | VestibularContentCreateWithoutOriginalContentInput[] | VestibularContentUncheckedCreateWithoutOriginalContentInput[]
    connectOrCreate?: VestibularContentCreateOrConnectWithoutOriginalContentInput | VestibularContentCreateOrConnectWithoutOriginalContentInput[]
    createMany?: VestibularContentCreateManyOriginalContentInputEnvelope
    connect?: VestibularContentWhereUniqueInput | VestibularContentWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TopicUpdateOneRequiredWithoutContentsNestedInput = {
    create?: XOR<TopicCreateWithoutContentsInput, TopicUncheckedCreateWithoutContentsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutContentsInput
    upsert?: TopicUpsertWithoutContentsInput
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutContentsInput, TopicUpdateWithoutContentsInput>, TopicUncheckedUpdateWithoutContentsInput>
  }

  export type ChecklistUpdateManyWithoutContentNestedInput = {
    create?: XOR<ChecklistCreateWithoutContentInput, ChecklistUncheckedCreateWithoutContentInput> | ChecklistCreateWithoutContentInput[] | ChecklistUncheckedCreateWithoutContentInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutContentInput | ChecklistCreateOrConnectWithoutContentInput[]
    upsert?: ChecklistUpsertWithWhereUniqueWithoutContentInput | ChecklistUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: ChecklistCreateManyContentInputEnvelope
    set?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    disconnect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    delete?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    update?: ChecklistUpdateWithWhereUniqueWithoutContentInput | ChecklistUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: ChecklistUpdateManyWithWhereWithoutContentInput | ChecklistUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: ChecklistScalarWhereInput | ChecklistScalarWhereInput[]
  }

  export type VestibularContentUpdateManyWithoutOriginalContentNestedInput = {
    create?: XOR<VestibularContentCreateWithoutOriginalContentInput, VestibularContentUncheckedCreateWithoutOriginalContentInput> | VestibularContentCreateWithoutOriginalContentInput[] | VestibularContentUncheckedCreateWithoutOriginalContentInput[]
    connectOrCreate?: VestibularContentCreateOrConnectWithoutOriginalContentInput | VestibularContentCreateOrConnectWithoutOriginalContentInput[]
    upsert?: VestibularContentUpsertWithWhereUniqueWithoutOriginalContentInput | VestibularContentUpsertWithWhereUniqueWithoutOriginalContentInput[]
    createMany?: VestibularContentCreateManyOriginalContentInputEnvelope
    set?: VestibularContentWhereUniqueInput | VestibularContentWhereUniqueInput[]
    disconnect?: VestibularContentWhereUniqueInput | VestibularContentWhereUniqueInput[]
    delete?: VestibularContentWhereUniqueInput | VestibularContentWhereUniqueInput[]
    connect?: VestibularContentWhereUniqueInput | VestibularContentWhereUniqueInput[]
    update?: VestibularContentUpdateWithWhereUniqueWithoutOriginalContentInput | VestibularContentUpdateWithWhereUniqueWithoutOriginalContentInput[]
    updateMany?: VestibularContentUpdateManyWithWhereWithoutOriginalContentInput | VestibularContentUpdateManyWithWhereWithoutOriginalContentInput[]
    deleteMany?: VestibularContentScalarWhereInput | VestibularContentScalarWhereInput[]
  }

  export type ChecklistUncheckedUpdateManyWithoutContentNestedInput = {
    create?: XOR<ChecklistCreateWithoutContentInput, ChecklistUncheckedCreateWithoutContentInput> | ChecklistCreateWithoutContentInput[] | ChecklistUncheckedCreateWithoutContentInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutContentInput | ChecklistCreateOrConnectWithoutContentInput[]
    upsert?: ChecklistUpsertWithWhereUniqueWithoutContentInput | ChecklistUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: ChecklistCreateManyContentInputEnvelope
    set?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    disconnect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    delete?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    update?: ChecklistUpdateWithWhereUniqueWithoutContentInput | ChecklistUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: ChecklistUpdateManyWithWhereWithoutContentInput | ChecklistUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: ChecklistScalarWhereInput | ChecklistScalarWhereInput[]
  }

  export type VestibularContentUncheckedUpdateManyWithoutOriginalContentNestedInput = {
    create?: XOR<VestibularContentCreateWithoutOriginalContentInput, VestibularContentUncheckedCreateWithoutOriginalContentInput> | VestibularContentCreateWithoutOriginalContentInput[] | VestibularContentUncheckedCreateWithoutOriginalContentInput[]
    connectOrCreate?: VestibularContentCreateOrConnectWithoutOriginalContentInput | VestibularContentCreateOrConnectWithoutOriginalContentInput[]
    upsert?: VestibularContentUpsertWithWhereUniqueWithoutOriginalContentInput | VestibularContentUpsertWithWhereUniqueWithoutOriginalContentInput[]
    createMany?: VestibularContentCreateManyOriginalContentInputEnvelope
    set?: VestibularContentWhereUniqueInput | VestibularContentWhereUniqueInput[]
    disconnect?: VestibularContentWhereUniqueInput | VestibularContentWhereUniqueInput[]
    delete?: VestibularContentWhereUniqueInput | VestibularContentWhereUniqueInput[]
    connect?: VestibularContentWhereUniqueInput | VestibularContentWhereUniqueInput[]
    update?: VestibularContentUpdateWithWhereUniqueWithoutOriginalContentInput | VestibularContentUpdateWithWhereUniqueWithoutOriginalContentInput[]
    updateMany?: VestibularContentUpdateManyWithWhereWithoutOriginalContentInput | VestibularContentUpdateManyWithWhereWithoutOriginalContentInput[]
    deleteMany?: VestibularContentScalarWhereInput | VestibularContentScalarWhereInput[]
  }

  export type TopicCreateNestedOneWithoutTopicSubjectsInput = {
    create?: XOR<TopicCreateWithoutTopicSubjectsInput, TopicUncheckedCreateWithoutTopicSubjectsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutTopicSubjectsInput
    connect?: TopicWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutTopicSubjectsInput = {
    create?: XOR<SubjectCreateWithoutTopicSubjectsInput, SubjectUncheckedCreateWithoutTopicSubjectsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutTopicSubjectsInput
    connect?: SubjectWhereUniqueInput
  }

  export type TopicUpdateOneRequiredWithoutTopicSubjectsNestedInput = {
    create?: XOR<TopicCreateWithoutTopicSubjectsInput, TopicUncheckedCreateWithoutTopicSubjectsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutTopicSubjectsInput
    upsert?: TopicUpsertWithoutTopicSubjectsInput
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutTopicSubjectsInput, TopicUpdateWithoutTopicSubjectsInput>, TopicUncheckedUpdateWithoutTopicSubjectsInput>
  }

  export type SubjectUpdateOneRequiredWithoutTopicSubjectsNestedInput = {
    create?: XOR<SubjectCreateWithoutTopicSubjectsInput, SubjectUncheckedCreateWithoutTopicSubjectsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutTopicSubjectsInput
    upsert?: SubjectUpsertWithoutTopicSubjectsInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutTopicSubjectsInput, SubjectUpdateWithoutTopicSubjectsInput>, SubjectUncheckedUpdateWithoutTopicSubjectsInput>
  }

  export type VestibularSubjectCreateNestedManyWithoutVestibularInput = {
    create?: XOR<VestibularSubjectCreateWithoutVestibularInput, VestibularSubjectUncheckedCreateWithoutVestibularInput> | VestibularSubjectCreateWithoutVestibularInput[] | VestibularSubjectUncheckedCreateWithoutVestibularInput[]
    connectOrCreate?: VestibularSubjectCreateOrConnectWithoutVestibularInput | VestibularSubjectCreateOrConnectWithoutVestibularInput[]
    createMany?: VestibularSubjectCreateManyVestibularInputEnvelope
    connect?: VestibularSubjectWhereUniqueInput | VestibularSubjectWhereUniqueInput[]
  }

  export type VestibularContentCreateNestedManyWithoutVestibularInput = {
    create?: XOR<VestibularContentCreateWithoutVestibularInput, VestibularContentUncheckedCreateWithoutVestibularInput> | VestibularContentCreateWithoutVestibularInput[] | VestibularContentUncheckedCreateWithoutVestibularInput[]
    connectOrCreate?: VestibularContentCreateOrConnectWithoutVestibularInput | VestibularContentCreateOrConnectWithoutVestibularInput[]
    createMany?: VestibularContentCreateManyVestibularInputEnvelope
    connect?: VestibularContentWhereUniqueInput | VestibularContentWhereUniqueInput[]
  }

  export type VestibularTopicCreateNestedManyWithoutVestibularInput = {
    create?: XOR<VestibularTopicCreateWithoutVestibularInput, VestibularTopicUncheckedCreateWithoutVestibularInput> | VestibularTopicCreateWithoutVestibularInput[] | VestibularTopicUncheckedCreateWithoutVestibularInput[]
    connectOrCreate?: VestibularTopicCreateOrConnectWithoutVestibularInput | VestibularTopicCreateOrConnectWithoutVestibularInput[]
    createMany?: VestibularTopicCreateManyVestibularInputEnvelope
    connect?: VestibularTopicWhereUniqueInput | VestibularTopicWhereUniqueInput[]
  }

  export type VestibularSubjectUncheckedCreateNestedManyWithoutVestibularInput = {
    create?: XOR<VestibularSubjectCreateWithoutVestibularInput, VestibularSubjectUncheckedCreateWithoutVestibularInput> | VestibularSubjectCreateWithoutVestibularInput[] | VestibularSubjectUncheckedCreateWithoutVestibularInput[]
    connectOrCreate?: VestibularSubjectCreateOrConnectWithoutVestibularInput | VestibularSubjectCreateOrConnectWithoutVestibularInput[]
    createMany?: VestibularSubjectCreateManyVestibularInputEnvelope
    connect?: VestibularSubjectWhereUniqueInput | VestibularSubjectWhereUniqueInput[]
  }

  export type VestibularContentUncheckedCreateNestedManyWithoutVestibularInput = {
    create?: XOR<VestibularContentCreateWithoutVestibularInput, VestibularContentUncheckedCreateWithoutVestibularInput> | VestibularContentCreateWithoutVestibularInput[] | VestibularContentUncheckedCreateWithoutVestibularInput[]
    connectOrCreate?: VestibularContentCreateOrConnectWithoutVestibularInput | VestibularContentCreateOrConnectWithoutVestibularInput[]
    createMany?: VestibularContentCreateManyVestibularInputEnvelope
    connect?: VestibularContentWhereUniqueInput | VestibularContentWhereUniqueInput[]
  }

  export type VestibularTopicUncheckedCreateNestedManyWithoutVestibularInput = {
    create?: XOR<VestibularTopicCreateWithoutVestibularInput, VestibularTopicUncheckedCreateWithoutVestibularInput> | VestibularTopicCreateWithoutVestibularInput[] | VestibularTopicUncheckedCreateWithoutVestibularInput[]
    connectOrCreate?: VestibularTopicCreateOrConnectWithoutVestibularInput | VestibularTopicCreateOrConnectWithoutVestibularInput[]
    createMany?: VestibularTopicCreateManyVestibularInputEnvelope
    connect?: VestibularTopicWhereUniqueInput | VestibularTopicWhereUniqueInput[]
  }

  export type VestibularSubjectUpdateManyWithoutVestibularNestedInput = {
    create?: XOR<VestibularSubjectCreateWithoutVestibularInput, VestibularSubjectUncheckedCreateWithoutVestibularInput> | VestibularSubjectCreateWithoutVestibularInput[] | VestibularSubjectUncheckedCreateWithoutVestibularInput[]
    connectOrCreate?: VestibularSubjectCreateOrConnectWithoutVestibularInput | VestibularSubjectCreateOrConnectWithoutVestibularInput[]
    upsert?: VestibularSubjectUpsertWithWhereUniqueWithoutVestibularInput | VestibularSubjectUpsertWithWhereUniqueWithoutVestibularInput[]
    createMany?: VestibularSubjectCreateManyVestibularInputEnvelope
    set?: VestibularSubjectWhereUniqueInput | VestibularSubjectWhereUniqueInput[]
    disconnect?: VestibularSubjectWhereUniqueInput | VestibularSubjectWhereUniqueInput[]
    delete?: VestibularSubjectWhereUniqueInput | VestibularSubjectWhereUniqueInput[]
    connect?: VestibularSubjectWhereUniqueInput | VestibularSubjectWhereUniqueInput[]
    update?: VestibularSubjectUpdateWithWhereUniqueWithoutVestibularInput | VestibularSubjectUpdateWithWhereUniqueWithoutVestibularInput[]
    updateMany?: VestibularSubjectUpdateManyWithWhereWithoutVestibularInput | VestibularSubjectUpdateManyWithWhereWithoutVestibularInput[]
    deleteMany?: VestibularSubjectScalarWhereInput | VestibularSubjectScalarWhereInput[]
  }

  export type VestibularContentUpdateManyWithoutVestibularNestedInput = {
    create?: XOR<VestibularContentCreateWithoutVestibularInput, VestibularContentUncheckedCreateWithoutVestibularInput> | VestibularContentCreateWithoutVestibularInput[] | VestibularContentUncheckedCreateWithoutVestibularInput[]
    connectOrCreate?: VestibularContentCreateOrConnectWithoutVestibularInput | VestibularContentCreateOrConnectWithoutVestibularInput[]
    upsert?: VestibularContentUpsertWithWhereUniqueWithoutVestibularInput | VestibularContentUpsertWithWhereUniqueWithoutVestibularInput[]
    createMany?: VestibularContentCreateManyVestibularInputEnvelope
    set?: VestibularContentWhereUniqueInput | VestibularContentWhereUniqueInput[]
    disconnect?: VestibularContentWhereUniqueInput | VestibularContentWhereUniqueInput[]
    delete?: VestibularContentWhereUniqueInput | VestibularContentWhereUniqueInput[]
    connect?: VestibularContentWhereUniqueInput | VestibularContentWhereUniqueInput[]
    update?: VestibularContentUpdateWithWhereUniqueWithoutVestibularInput | VestibularContentUpdateWithWhereUniqueWithoutVestibularInput[]
    updateMany?: VestibularContentUpdateManyWithWhereWithoutVestibularInput | VestibularContentUpdateManyWithWhereWithoutVestibularInput[]
    deleteMany?: VestibularContentScalarWhereInput | VestibularContentScalarWhereInput[]
  }

  export type VestibularTopicUpdateManyWithoutVestibularNestedInput = {
    create?: XOR<VestibularTopicCreateWithoutVestibularInput, VestibularTopicUncheckedCreateWithoutVestibularInput> | VestibularTopicCreateWithoutVestibularInput[] | VestibularTopicUncheckedCreateWithoutVestibularInput[]
    connectOrCreate?: VestibularTopicCreateOrConnectWithoutVestibularInput | VestibularTopicCreateOrConnectWithoutVestibularInput[]
    upsert?: VestibularTopicUpsertWithWhereUniqueWithoutVestibularInput | VestibularTopicUpsertWithWhereUniqueWithoutVestibularInput[]
    createMany?: VestibularTopicCreateManyVestibularInputEnvelope
    set?: VestibularTopicWhereUniqueInput | VestibularTopicWhereUniqueInput[]
    disconnect?: VestibularTopicWhereUniqueInput | VestibularTopicWhereUniqueInput[]
    delete?: VestibularTopicWhereUniqueInput | VestibularTopicWhereUniqueInput[]
    connect?: VestibularTopicWhereUniqueInput | VestibularTopicWhereUniqueInput[]
    update?: VestibularTopicUpdateWithWhereUniqueWithoutVestibularInput | VestibularTopicUpdateWithWhereUniqueWithoutVestibularInput[]
    updateMany?: VestibularTopicUpdateManyWithWhereWithoutVestibularInput | VestibularTopicUpdateManyWithWhereWithoutVestibularInput[]
    deleteMany?: VestibularTopicScalarWhereInput | VestibularTopicScalarWhereInput[]
  }

  export type VestibularSubjectUncheckedUpdateManyWithoutVestibularNestedInput = {
    create?: XOR<VestibularSubjectCreateWithoutVestibularInput, VestibularSubjectUncheckedCreateWithoutVestibularInput> | VestibularSubjectCreateWithoutVestibularInput[] | VestibularSubjectUncheckedCreateWithoutVestibularInput[]
    connectOrCreate?: VestibularSubjectCreateOrConnectWithoutVestibularInput | VestibularSubjectCreateOrConnectWithoutVestibularInput[]
    upsert?: VestibularSubjectUpsertWithWhereUniqueWithoutVestibularInput | VestibularSubjectUpsertWithWhereUniqueWithoutVestibularInput[]
    createMany?: VestibularSubjectCreateManyVestibularInputEnvelope
    set?: VestibularSubjectWhereUniqueInput | VestibularSubjectWhereUniqueInput[]
    disconnect?: VestibularSubjectWhereUniqueInput | VestibularSubjectWhereUniqueInput[]
    delete?: VestibularSubjectWhereUniqueInput | VestibularSubjectWhereUniqueInput[]
    connect?: VestibularSubjectWhereUniqueInput | VestibularSubjectWhereUniqueInput[]
    update?: VestibularSubjectUpdateWithWhereUniqueWithoutVestibularInput | VestibularSubjectUpdateWithWhereUniqueWithoutVestibularInput[]
    updateMany?: VestibularSubjectUpdateManyWithWhereWithoutVestibularInput | VestibularSubjectUpdateManyWithWhereWithoutVestibularInput[]
    deleteMany?: VestibularSubjectScalarWhereInput | VestibularSubjectScalarWhereInput[]
  }

  export type VestibularContentUncheckedUpdateManyWithoutVestibularNestedInput = {
    create?: XOR<VestibularContentCreateWithoutVestibularInput, VestibularContentUncheckedCreateWithoutVestibularInput> | VestibularContentCreateWithoutVestibularInput[] | VestibularContentUncheckedCreateWithoutVestibularInput[]
    connectOrCreate?: VestibularContentCreateOrConnectWithoutVestibularInput | VestibularContentCreateOrConnectWithoutVestibularInput[]
    upsert?: VestibularContentUpsertWithWhereUniqueWithoutVestibularInput | VestibularContentUpsertWithWhereUniqueWithoutVestibularInput[]
    createMany?: VestibularContentCreateManyVestibularInputEnvelope
    set?: VestibularContentWhereUniqueInput | VestibularContentWhereUniqueInput[]
    disconnect?: VestibularContentWhereUniqueInput | VestibularContentWhereUniqueInput[]
    delete?: VestibularContentWhereUniqueInput | VestibularContentWhereUniqueInput[]
    connect?: VestibularContentWhereUniqueInput | VestibularContentWhereUniqueInput[]
    update?: VestibularContentUpdateWithWhereUniqueWithoutVestibularInput | VestibularContentUpdateWithWhereUniqueWithoutVestibularInput[]
    updateMany?: VestibularContentUpdateManyWithWhereWithoutVestibularInput | VestibularContentUpdateManyWithWhereWithoutVestibularInput[]
    deleteMany?: VestibularContentScalarWhereInput | VestibularContentScalarWhereInput[]
  }

  export type VestibularTopicUncheckedUpdateManyWithoutVestibularNestedInput = {
    create?: XOR<VestibularTopicCreateWithoutVestibularInput, VestibularTopicUncheckedCreateWithoutVestibularInput> | VestibularTopicCreateWithoutVestibularInput[] | VestibularTopicUncheckedCreateWithoutVestibularInput[]
    connectOrCreate?: VestibularTopicCreateOrConnectWithoutVestibularInput | VestibularTopicCreateOrConnectWithoutVestibularInput[]
    upsert?: VestibularTopicUpsertWithWhereUniqueWithoutVestibularInput | VestibularTopicUpsertWithWhereUniqueWithoutVestibularInput[]
    createMany?: VestibularTopicCreateManyVestibularInputEnvelope
    set?: VestibularTopicWhereUniqueInput | VestibularTopicWhereUniqueInput[]
    disconnect?: VestibularTopicWhereUniqueInput | VestibularTopicWhereUniqueInput[]
    delete?: VestibularTopicWhereUniqueInput | VestibularTopicWhereUniqueInput[]
    connect?: VestibularTopicWhereUniqueInput | VestibularTopicWhereUniqueInput[]
    update?: VestibularTopicUpdateWithWhereUniqueWithoutVestibularInput | VestibularTopicUpdateWithWhereUniqueWithoutVestibularInput[]
    updateMany?: VestibularTopicUpdateManyWithWhereWithoutVestibularInput | VestibularTopicUpdateManyWithWhereWithoutVestibularInput[]
    deleteMany?: VestibularTopicScalarWhereInput | VestibularTopicScalarWhereInput[]
  }

  export type VestibularCreateNestedOneWithoutVestibularSubjectsInput = {
    create?: XOR<VestibularCreateWithoutVestibularSubjectsInput, VestibularUncheckedCreateWithoutVestibularSubjectsInput>
    connectOrCreate?: VestibularCreateOrConnectWithoutVestibularSubjectsInput
    connect?: VestibularWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutVestibularSubjectsInput = {
    create?: XOR<SubjectCreateWithoutVestibularSubjectsInput, SubjectUncheckedCreateWithoutVestibularSubjectsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutVestibularSubjectsInput
    connect?: SubjectWhereUniqueInput
  }

  export type VestibularUpdateOneRequiredWithoutVestibularSubjectsNestedInput = {
    create?: XOR<VestibularCreateWithoutVestibularSubjectsInput, VestibularUncheckedCreateWithoutVestibularSubjectsInput>
    connectOrCreate?: VestibularCreateOrConnectWithoutVestibularSubjectsInput
    upsert?: VestibularUpsertWithoutVestibularSubjectsInput
    connect?: VestibularWhereUniqueInput
    update?: XOR<XOR<VestibularUpdateToOneWithWhereWithoutVestibularSubjectsInput, VestibularUpdateWithoutVestibularSubjectsInput>, VestibularUncheckedUpdateWithoutVestibularSubjectsInput>
  }

  export type SubjectUpdateOneRequiredWithoutVestibularSubjectsNestedInput = {
    create?: XOR<SubjectCreateWithoutVestibularSubjectsInput, SubjectUncheckedCreateWithoutVestibularSubjectsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutVestibularSubjectsInput
    upsert?: SubjectUpsertWithoutVestibularSubjectsInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutVestibularSubjectsInput, SubjectUpdateWithoutVestibularSubjectsInput>, SubjectUncheckedUpdateWithoutVestibularSubjectsInput>
  }

  export type VestibularCreateNestedOneWithoutContentsInput = {
    create?: XOR<VestibularCreateWithoutContentsInput, VestibularUncheckedCreateWithoutContentsInput>
    connectOrCreate?: VestibularCreateOrConnectWithoutContentsInput
    connect?: VestibularWhereUniqueInput
  }

  export type ContentCreateNestedOneWithoutVestibularContentsInput = {
    create?: XOR<ContentCreateWithoutVestibularContentsInput, ContentUncheckedCreateWithoutVestibularContentsInput>
    connectOrCreate?: ContentCreateOrConnectWithoutVestibularContentsInput
    connect?: ContentWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type VestibularUpdateOneRequiredWithoutContentsNestedInput = {
    create?: XOR<VestibularCreateWithoutContentsInput, VestibularUncheckedCreateWithoutContentsInput>
    connectOrCreate?: VestibularCreateOrConnectWithoutContentsInput
    upsert?: VestibularUpsertWithoutContentsInput
    connect?: VestibularWhereUniqueInput
    update?: XOR<XOR<VestibularUpdateToOneWithWhereWithoutContentsInput, VestibularUpdateWithoutContentsInput>, VestibularUncheckedUpdateWithoutContentsInput>
  }

  export type ContentUpdateOneWithoutVestibularContentsNestedInput = {
    create?: XOR<ContentCreateWithoutVestibularContentsInput, ContentUncheckedCreateWithoutVestibularContentsInput>
    connectOrCreate?: ContentCreateOrConnectWithoutVestibularContentsInput
    upsert?: ContentUpsertWithoutVestibularContentsInput
    disconnect?: ContentWhereInput | boolean
    delete?: ContentWhereInput | boolean
    connect?: ContentWhereUniqueInput
    update?: XOR<XOR<ContentUpdateToOneWithWhereWithoutVestibularContentsInput, ContentUpdateWithoutVestibularContentsInput>, ContentUncheckedUpdateWithoutVestibularContentsInput>
  }

  export type VestibularCreateNestedOneWithoutVestibularTopicsInput = {
    create?: XOR<VestibularCreateWithoutVestibularTopicsInput, VestibularUncheckedCreateWithoutVestibularTopicsInput>
    connectOrCreate?: VestibularCreateOrConnectWithoutVestibularTopicsInput
    connect?: VestibularWhereUniqueInput
  }

  export type VestibularUpdateOneRequiredWithoutVestibularTopicsNestedInput = {
    create?: XOR<VestibularCreateWithoutVestibularTopicsInput, VestibularUncheckedCreateWithoutVestibularTopicsInput>
    connectOrCreate?: VestibularCreateOrConnectWithoutVestibularTopicsInput
    upsert?: VestibularUpsertWithoutVestibularTopicsInput
    connect?: VestibularWhereUniqueInput
    update?: XOR<XOR<VestibularUpdateToOneWithWhereWithoutVestibularTopicsInput, VestibularUpdateWithoutVestibularTopicsInput>, VestibularUncheckedUpdateWithoutVestibularTopicsInput>
  }

  export type AccessibilityCategoryTopicCreateNestedManyWithoutAccessibilityCategoryInput = {
    create?: XOR<AccessibilityCategoryTopicCreateWithoutAccessibilityCategoryInput, AccessibilityCategoryTopicUncheckedCreateWithoutAccessibilityCategoryInput> | AccessibilityCategoryTopicCreateWithoutAccessibilityCategoryInput[] | AccessibilityCategoryTopicUncheckedCreateWithoutAccessibilityCategoryInput[]
    connectOrCreate?: AccessibilityCategoryTopicCreateOrConnectWithoutAccessibilityCategoryInput | AccessibilityCategoryTopicCreateOrConnectWithoutAccessibilityCategoryInput[]
    createMany?: AccessibilityCategoryTopicCreateManyAccessibilityCategoryInputEnvelope
    connect?: AccessibilityCategoryTopicWhereUniqueInput | AccessibilityCategoryTopicWhereUniqueInput[]
  }

  export type AccessibilityNeedCreateNestedManyWithoutAccessibilityCategoryInput = {
    create?: XOR<AccessibilityNeedCreateWithoutAccessibilityCategoryInput, AccessibilityNeedUncheckedCreateWithoutAccessibilityCategoryInput> | AccessibilityNeedCreateWithoutAccessibilityCategoryInput[] | AccessibilityNeedUncheckedCreateWithoutAccessibilityCategoryInput[]
    connectOrCreate?: AccessibilityNeedCreateOrConnectWithoutAccessibilityCategoryInput | AccessibilityNeedCreateOrConnectWithoutAccessibilityCategoryInput[]
    createMany?: AccessibilityNeedCreateManyAccessibilityCategoryInputEnvelope
    connect?: AccessibilityNeedWhereUniqueInput | AccessibilityNeedWhereUniqueInput[]
  }

  export type AccessibilityThemeCreateNestedManyWithoutAccessibilityCategoryInput = {
    create?: XOR<AccessibilityThemeCreateWithoutAccessibilityCategoryInput, AccessibilityThemeUncheckedCreateWithoutAccessibilityCategoryInput> | AccessibilityThemeCreateWithoutAccessibilityCategoryInput[] | AccessibilityThemeUncheckedCreateWithoutAccessibilityCategoryInput[]
    connectOrCreate?: AccessibilityThemeCreateOrConnectWithoutAccessibilityCategoryInput | AccessibilityThemeCreateOrConnectWithoutAccessibilityCategoryInput[]
    createMany?: AccessibilityThemeCreateManyAccessibilityCategoryInputEnvelope
    connect?: AccessibilityThemeWhereUniqueInput | AccessibilityThemeWhereUniqueInput[]
  }

  export type AccessibilityCategoryTopicUncheckedCreateNestedManyWithoutAccessibilityCategoryInput = {
    create?: XOR<AccessibilityCategoryTopicCreateWithoutAccessibilityCategoryInput, AccessibilityCategoryTopicUncheckedCreateWithoutAccessibilityCategoryInput> | AccessibilityCategoryTopicCreateWithoutAccessibilityCategoryInput[] | AccessibilityCategoryTopicUncheckedCreateWithoutAccessibilityCategoryInput[]
    connectOrCreate?: AccessibilityCategoryTopicCreateOrConnectWithoutAccessibilityCategoryInput | AccessibilityCategoryTopicCreateOrConnectWithoutAccessibilityCategoryInput[]
    createMany?: AccessibilityCategoryTopicCreateManyAccessibilityCategoryInputEnvelope
    connect?: AccessibilityCategoryTopicWhereUniqueInput | AccessibilityCategoryTopicWhereUniqueInput[]
  }

  export type AccessibilityNeedUncheckedCreateNestedManyWithoutAccessibilityCategoryInput = {
    create?: XOR<AccessibilityNeedCreateWithoutAccessibilityCategoryInput, AccessibilityNeedUncheckedCreateWithoutAccessibilityCategoryInput> | AccessibilityNeedCreateWithoutAccessibilityCategoryInput[] | AccessibilityNeedUncheckedCreateWithoutAccessibilityCategoryInput[]
    connectOrCreate?: AccessibilityNeedCreateOrConnectWithoutAccessibilityCategoryInput | AccessibilityNeedCreateOrConnectWithoutAccessibilityCategoryInput[]
    createMany?: AccessibilityNeedCreateManyAccessibilityCategoryInputEnvelope
    connect?: AccessibilityNeedWhereUniqueInput | AccessibilityNeedWhereUniqueInput[]
  }

  export type AccessibilityThemeUncheckedCreateNestedManyWithoutAccessibilityCategoryInput = {
    create?: XOR<AccessibilityThemeCreateWithoutAccessibilityCategoryInput, AccessibilityThemeUncheckedCreateWithoutAccessibilityCategoryInput> | AccessibilityThemeCreateWithoutAccessibilityCategoryInput[] | AccessibilityThemeUncheckedCreateWithoutAccessibilityCategoryInput[]
    connectOrCreate?: AccessibilityThemeCreateOrConnectWithoutAccessibilityCategoryInput | AccessibilityThemeCreateOrConnectWithoutAccessibilityCategoryInput[]
    createMany?: AccessibilityThemeCreateManyAccessibilityCategoryInputEnvelope
    connect?: AccessibilityThemeWhereUniqueInput | AccessibilityThemeWhereUniqueInput[]
  }

  export type AccessibilityCategoryTopicUpdateManyWithoutAccessibilityCategoryNestedInput = {
    create?: XOR<AccessibilityCategoryTopicCreateWithoutAccessibilityCategoryInput, AccessibilityCategoryTopicUncheckedCreateWithoutAccessibilityCategoryInput> | AccessibilityCategoryTopicCreateWithoutAccessibilityCategoryInput[] | AccessibilityCategoryTopicUncheckedCreateWithoutAccessibilityCategoryInput[]
    connectOrCreate?: AccessibilityCategoryTopicCreateOrConnectWithoutAccessibilityCategoryInput | AccessibilityCategoryTopicCreateOrConnectWithoutAccessibilityCategoryInput[]
    upsert?: AccessibilityCategoryTopicUpsertWithWhereUniqueWithoutAccessibilityCategoryInput | AccessibilityCategoryTopicUpsertWithWhereUniqueWithoutAccessibilityCategoryInput[]
    createMany?: AccessibilityCategoryTopicCreateManyAccessibilityCategoryInputEnvelope
    set?: AccessibilityCategoryTopicWhereUniqueInput | AccessibilityCategoryTopicWhereUniqueInput[]
    disconnect?: AccessibilityCategoryTopicWhereUniqueInput | AccessibilityCategoryTopicWhereUniqueInput[]
    delete?: AccessibilityCategoryTopicWhereUniqueInput | AccessibilityCategoryTopicWhereUniqueInput[]
    connect?: AccessibilityCategoryTopicWhereUniqueInput | AccessibilityCategoryTopicWhereUniqueInput[]
    update?: AccessibilityCategoryTopicUpdateWithWhereUniqueWithoutAccessibilityCategoryInput | AccessibilityCategoryTopicUpdateWithWhereUniqueWithoutAccessibilityCategoryInput[]
    updateMany?: AccessibilityCategoryTopicUpdateManyWithWhereWithoutAccessibilityCategoryInput | AccessibilityCategoryTopicUpdateManyWithWhereWithoutAccessibilityCategoryInput[]
    deleteMany?: AccessibilityCategoryTopicScalarWhereInput | AccessibilityCategoryTopicScalarWhereInput[]
  }

  export type AccessibilityNeedUpdateManyWithoutAccessibilityCategoryNestedInput = {
    create?: XOR<AccessibilityNeedCreateWithoutAccessibilityCategoryInput, AccessibilityNeedUncheckedCreateWithoutAccessibilityCategoryInput> | AccessibilityNeedCreateWithoutAccessibilityCategoryInput[] | AccessibilityNeedUncheckedCreateWithoutAccessibilityCategoryInput[]
    connectOrCreate?: AccessibilityNeedCreateOrConnectWithoutAccessibilityCategoryInput | AccessibilityNeedCreateOrConnectWithoutAccessibilityCategoryInput[]
    upsert?: AccessibilityNeedUpsertWithWhereUniqueWithoutAccessibilityCategoryInput | AccessibilityNeedUpsertWithWhereUniqueWithoutAccessibilityCategoryInput[]
    createMany?: AccessibilityNeedCreateManyAccessibilityCategoryInputEnvelope
    set?: AccessibilityNeedWhereUniqueInput | AccessibilityNeedWhereUniqueInput[]
    disconnect?: AccessibilityNeedWhereUniqueInput | AccessibilityNeedWhereUniqueInput[]
    delete?: AccessibilityNeedWhereUniqueInput | AccessibilityNeedWhereUniqueInput[]
    connect?: AccessibilityNeedWhereUniqueInput | AccessibilityNeedWhereUniqueInput[]
    update?: AccessibilityNeedUpdateWithWhereUniqueWithoutAccessibilityCategoryInput | AccessibilityNeedUpdateWithWhereUniqueWithoutAccessibilityCategoryInput[]
    updateMany?: AccessibilityNeedUpdateManyWithWhereWithoutAccessibilityCategoryInput | AccessibilityNeedUpdateManyWithWhereWithoutAccessibilityCategoryInput[]
    deleteMany?: AccessibilityNeedScalarWhereInput | AccessibilityNeedScalarWhereInput[]
  }

  export type AccessibilityThemeUpdateManyWithoutAccessibilityCategoryNestedInput = {
    create?: XOR<AccessibilityThemeCreateWithoutAccessibilityCategoryInput, AccessibilityThemeUncheckedCreateWithoutAccessibilityCategoryInput> | AccessibilityThemeCreateWithoutAccessibilityCategoryInput[] | AccessibilityThemeUncheckedCreateWithoutAccessibilityCategoryInput[]
    connectOrCreate?: AccessibilityThemeCreateOrConnectWithoutAccessibilityCategoryInput | AccessibilityThemeCreateOrConnectWithoutAccessibilityCategoryInput[]
    upsert?: AccessibilityThemeUpsertWithWhereUniqueWithoutAccessibilityCategoryInput | AccessibilityThemeUpsertWithWhereUniqueWithoutAccessibilityCategoryInput[]
    createMany?: AccessibilityThemeCreateManyAccessibilityCategoryInputEnvelope
    set?: AccessibilityThemeWhereUniqueInput | AccessibilityThemeWhereUniqueInput[]
    disconnect?: AccessibilityThemeWhereUniqueInput | AccessibilityThemeWhereUniqueInput[]
    delete?: AccessibilityThemeWhereUniqueInput | AccessibilityThemeWhereUniqueInput[]
    connect?: AccessibilityThemeWhereUniqueInput | AccessibilityThemeWhereUniqueInput[]
    update?: AccessibilityThemeUpdateWithWhereUniqueWithoutAccessibilityCategoryInput | AccessibilityThemeUpdateWithWhereUniqueWithoutAccessibilityCategoryInput[]
    updateMany?: AccessibilityThemeUpdateManyWithWhereWithoutAccessibilityCategoryInput | AccessibilityThemeUpdateManyWithWhereWithoutAccessibilityCategoryInput[]
    deleteMany?: AccessibilityThemeScalarWhereInput | AccessibilityThemeScalarWhereInput[]
  }

  export type AccessibilityCategoryTopicUncheckedUpdateManyWithoutAccessibilityCategoryNestedInput = {
    create?: XOR<AccessibilityCategoryTopicCreateWithoutAccessibilityCategoryInput, AccessibilityCategoryTopicUncheckedCreateWithoutAccessibilityCategoryInput> | AccessibilityCategoryTopicCreateWithoutAccessibilityCategoryInput[] | AccessibilityCategoryTopicUncheckedCreateWithoutAccessibilityCategoryInput[]
    connectOrCreate?: AccessibilityCategoryTopicCreateOrConnectWithoutAccessibilityCategoryInput | AccessibilityCategoryTopicCreateOrConnectWithoutAccessibilityCategoryInput[]
    upsert?: AccessibilityCategoryTopicUpsertWithWhereUniqueWithoutAccessibilityCategoryInput | AccessibilityCategoryTopicUpsertWithWhereUniqueWithoutAccessibilityCategoryInput[]
    createMany?: AccessibilityCategoryTopicCreateManyAccessibilityCategoryInputEnvelope
    set?: AccessibilityCategoryTopicWhereUniqueInput | AccessibilityCategoryTopicWhereUniqueInput[]
    disconnect?: AccessibilityCategoryTopicWhereUniqueInput | AccessibilityCategoryTopicWhereUniqueInput[]
    delete?: AccessibilityCategoryTopicWhereUniqueInput | AccessibilityCategoryTopicWhereUniqueInput[]
    connect?: AccessibilityCategoryTopicWhereUniqueInput | AccessibilityCategoryTopicWhereUniqueInput[]
    update?: AccessibilityCategoryTopicUpdateWithWhereUniqueWithoutAccessibilityCategoryInput | AccessibilityCategoryTopicUpdateWithWhereUniqueWithoutAccessibilityCategoryInput[]
    updateMany?: AccessibilityCategoryTopicUpdateManyWithWhereWithoutAccessibilityCategoryInput | AccessibilityCategoryTopicUpdateManyWithWhereWithoutAccessibilityCategoryInput[]
    deleteMany?: AccessibilityCategoryTopicScalarWhereInput | AccessibilityCategoryTopicScalarWhereInput[]
  }

  export type AccessibilityNeedUncheckedUpdateManyWithoutAccessibilityCategoryNestedInput = {
    create?: XOR<AccessibilityNeedCreateWithoutAccessibilityCategoryInput, AccessibilityNeedUncheckedCreateWithoutAccessibilityCategoryInput> | AccessibilityNeedCreateWithoutAccessibilityCategoryInput[] | AccessibilityNeedUncheckedCreateWithoutAccessibilityCategoryInput[]
    connectOrCreate?: AccessibilityNeedCreateOrConnectWithoutAccessibilityCategoryInput | AccessibilityNeedCreateOrConnectWithoutAccessibilityCategoryInput[]
    upsert?: AccessibilityNeedUpsertWithWhereUniqueWithoutAccessibilityCategoryInput | AccessibilityNeedUpsertWithWhereUniqueWithoutAccessibilityCategoryInput[]
    createMany?: AccessibilityNeedCreateManyAccessibilityCategoryInputEnvelope
    set?: AccessibilityNeedWhereUniqueInput | AccessibilityNeedWhereUniqueInput[]
    disconnect?: AccessibilityNeedWhereUniqueInput | AccessibilityNeedWhereUniqueInput[]
    delete?: AccessibilityNeedWhereUniqueInput | AccessibilityNeedWhereUniqueInput[]
    connect?: AccessibilityNeedWhereUniqueInput | AccessibilityNeedWhereUniqueInput[]
    update?: AccessibilityNeedUpdateWithWhereUniqueWithoutAccessibilityCategoryInput | AccessibilityNeedUpdateWithWhereUniqueWithoutAccessibilityCategoryInput[]
    updateMany?: AccessibilityNeedUpdateManyWithWhereWithoutAccessibilityCategoryInput | AccessibilityNeedUpdateManyWithWhereWithoutAccessibilityCategoryInput[]
    deleteMany?: AccessibilityNeedScalarWhereInput | AccessibilityNeedScalarWhereInput[]
  }

  export type AccessibilityThemeUncheckedUpdateManyWithoutAccessibilityCategoryNestedInput = {
    create?: XOR<AccessibilityThemeCreateWithoutAccessibilityCategoryInput, AccessibilityThemeUncheckedCreateWithoutAccessibilityCategoryInput> | AccessibilityThemeCreateWithoutAccessibilityCategoryInput[] | AccessibilityThemeUncheckedCreateWithoutAccessibilityCategoryInput[]
    connectOrCreate?: AccessibilityThemeCreateOrConnectWithoutAccessibilityCategoryInput | AccessibilityThemeCreateOrConnectWithoutAccessibilityCategoryInput[]
    upsert?: AccessibilityThemeUpsertWithWhereUniqueWithoutAccessibilityCategoryInput | AccessibilityThemeUpsertWithWhereUniqueWithoutAccessibilityCategoryInput[]
    createMany?: AccessibilityThemeCreateManyAccessibilityCategoryInputEnvelope
    set?: AccessibilityThemeWhereUniqueInput | AccessibilityThemeWhereUniqueInput[]
    disconnect?: AccessibilityThemeWhereUniqueInput | AccessibilityThemeWhereUniqueInput[]
    delete?: AccessibilityThemeWhereUniqueInput | AccessibilityThemeWhereUniqueInput[]
    connect?: AccessibilityThemeWhereUniqueInput | AccessibilityThemeWhereUniqueInput[]
    update?: AccessibilityThemeUpdateWithWhereUniqueWithoutAccessibilityCategoryInput | AccessibilityThemeUpdateWithWhereUniqueWithoutAccessibilityCategoryInput[]
    updateMany?: AccessibilityThemeUpdateManyWithWhereWithoutAccessibilityCategoryInput | AccessibilityThemeUpdateManyWithWhereWithoutAccessibilityCategoryInput[]
    deleteMany?: AccessibilityThemeScalarWhereInput | AccessibilityThemeScalarWhereInput[]
  }

  export type AccessibilityCategoryCreateNestedOneWithoutCategoryTopicsInput = {
    create?: XOR<AccessibilityCategoryCreateWithoutCategoryTopicsInput, AccessibilityCategoryUncheckedCreateWithoutCategoryTopicsInput>
    connectOrCreate?: AccessibilityCategoryCreateOrConnectWithoutCategoryTopicsInput
    connect?: AccessibilityCategoryWhereUniqueInput
  }

  export type TopicCreateNestedOneWithoutAccessibilityCategoryTopicsInput = {
    create?: XOR<TopicCreateWithoutAccessibilityCategoryTopicsInput, TopicUncheckedCreateWithoutAccessibilityCategoryTopicsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutAccessibilityCategoryTopicsInput
    connect?: TopicWhereUniqueInput
  }

  export type AccessibilityCategoryUpdateOneRequiredWithoutCategoryTopicsNestedInput = {
    create?: XOR<AccessibilityCategoryCreateWithoutCategoryTopicsInput, AccessibilityCategoryUncheckedCreateWithoutCategoryTopicsInput>
    connectOrCreate?: AccessibilityCategoryCreateOrConnectWithoutCategoryTopicsInput
    upsert?: AccessibilityCategoryUpsertWithoutCategoryTopicsInput
    connect?: AccessibilityCategoryWhereUniqueInput
    update?: XOR<XOR<AccessibilityCategoryUpdateToOneWithWhereWithoutCategoryTopicsInput, AccessibilityCategoryUpdateWithoutCategoryTopicsInput>, AccessibilityCategoryUncheckedUpdateWithoutCategoryTopicsInput>
  }

  export type TopicUpdateOneRequiredWithoutAccessibilityCategoryTopicsNestedInput = {
    create?: XOR<TopicCreateWithoutAccessibilityCategoryTopicsInput, TopicUncheckedCreateWithoutAccessibilityCategoryTopicsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutAccessibilityCategoryTopicsInput
    upsert?: TopicUpsertWithoutAccessibilityCategoryTopicsInput
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutAccessibilityCategoryTopicsInput, TopicUpdateWithoutAccessibilityCategoryTopicsInput>, TopicUncheckedUpdateWithoutAccessibilityCategoryTopicsInput>
  }

  export type AccessibilityCategoryCreateNestedOneWithoutNeedsInput = {
    create?: XOR<AccessibilityCategoryCreateWithoutNeedsInput, AccessibilityCategoryUncheckedCreateWithoutNeedsInput>
    connectOrCreate?: AccessibilityCategoryCreateOrConnectWithoutNeedsInput
    connect?: AccessibilityCategoryWhereUniqueInput
  }

  export type AccessibilityThemeCreateNestedManyWithoutAccessibilityNeedInput = {
    create?: XOR<AccessibilityThemeCreateWithoutAccessibilityNeedInput, AccessibilityThemeUncheckedCreateWithoutAccessibilityNeedInput> | AccessibilityThemeCreateWithoutAccessibilityNeedInput[] | AccessibilityThemeUncheckedCreateWithoutAccessibilityNeedInput[]
    connectOrCreate?: AccessibilityThemeCreateOrConnectWithoutAccessibilityNeedInput | AccessibilityThemeCreateOrConnectWithoutAccessibilityNeedInput[]
    createMany?: AccessibilityThemeCreateManyAccessibilityNeedInputEnvelope
    connect?: AccessibilityThemeWhereUniqueInput | AccessibilityThemeWhereUniqueInput[]
  }

  export type AccessibilityThemeUncheckedCreateNestedManyWithoutAccessibilityNeedInput = {
    create?: XOR<AccessibilityThemeCreateWithoutAccessibilityNeedInput, AccessibilityThemeUncheckedCreateWithoutAccessibilityNeedInput> | AccessibilityThemeCreateWithoutAccessibilityNeedInput[] | AccessibilityThemeUncheckedCreateWithoutAccessibilityNeedInput[]
    connectOrCreate?: AccessibilityThemeCreateOrConnectWithoutAccessibilityNeedInput | AccessibilityThemeCreateOrConnectWithoutAccessibilityNeedInput[]
    createMany?: AccessibilityThemeCreateManyAccessibilityNeedInputEnvelope
    connect?: AccessibilityThemeWhereUniqueInput | AccessibilityThemeWhereUniqueInput[]
  }

  export type AccessibilityCategoryUpdateOneRequiredWithoutNeedsNestedInput = {
    create?: XOR<AccessibilityCategoryCreateWithoutNeedsInput, AccessibilityCategoryUncheckedCreateWithoutNeedsInput>
    connectOrCreate?: AccessibilityCategoryCreateOrConnectWithoutNeedsInput
    upsert?: AccessibilityCategoryUpsertWithoutNeedsInput
    connect?: AccessibilityCategoryWhereUniqueInput
    update?: XOR<XOR<AccessibilityCategoryUpdateToOneWithWhereWithoutNeedsInput, AccessibilityCategoryUpdateWithoutNeedsInput>, AccessibilityCategoryUncheckedUpdateWithoutNeedsInput>
  }

  export type AccessibilityThemeUpdateManyWithoutAccessibilityNeedNestedInput = {
    create?: XOR<AccessibilityThemeCreateWithoutAccessibilityNeedInput, AccessibilityThemeUncheckedCreateWithoutAccessibilityNeedInput> | AccessibilityThemeCreateWithoutAccessibilityNeedInput[] | AccessibilityThemeUncheckedCreateWithoutAccessibilityNeedInput[]
    connectOrCreate?: AccessibilityThemeCreateOrConnectWithoutAccessibilityNeedInput | AccessibilityThemeCreateOrConnectWithoutAccessibilityNeedInput[]
    upsert?: AccessibilityThemeUpsertWithWhereUniqueWithoutAccessibilityNeedInput | AccessibilityThemeUpsertWithWhereUniqueWithoutAccessibilityNeedInput[]
    createMany?: AccessibilityThemeCreateManyAccessibilityNeedInputEnvelope
    set?: AccessibilityThemeWhereUniqueInput | AccessibilityThemeWhereUniqueInput[]
    disconnect?: AccessibilityThemeWhereUniqueInput | AccessibilityThemeWhereUniqueInput[]
    delete?: AccessibilityThemeWhereUniqueInput | AccessibilityThemeWhereUniqueInput[]
    connect?: AccessibilityThemeWhereUniqueInput | AccessibilityThemeWhereUniqueInput[]
    update?: AccessibilityThemeUpdateWithWhereUniqueWithoutAccessibilityNeedInput | AccessibilityThemeUpdateWithWhereUniqueWithoutAccessibilityNeedInput[]
    updateMany?: AccessibilityThemeUpdateManyWithWhereWithoutAccessibilityNeedInput | AccessibilityThemeUpdateManyWithWhereWithoutAccessibilityNeedInput[]
    deleteMany?: AccessibilityThemeScalarWhereInput | AccessibilityThemeScalarWhereInput[]
  }

  export type AccessibilityThemeUncheckedUpdateManyWithoutAccessibilityNeedNestedInput = {
    create?: XOR<AccessibilityThemeCreateWithoutAccessibilityNeedInput, AccessibilityThemeUncheckedCreateWithoutAccessibilityNeedInput> | AccessibilityThemeCreateWithoutAccessibilityNeedInput[] | AccessibilityThemeUncheckedCreateWithoutAccessibilityNeedInput[]
    connectOrCreate?: AccessibilityThemeCreateOrConnectWithoutAccessibilityNeedInput | AccessibilityThemeCreateOrConnectWithoutAccessibilityNeedInput[]
    upsert?: AccessibilityThemeUpsertWithWhereUniqueWithoutAccessibilityNeedInput | AccessibilityThemeUpsertWithWhereUniqueWithoutAccessibilityNeedInput[]
    createMany?: AccessibilityThemeCreateManyAccessibilityNeedInputEnvelope
    set?: AccessibilityThemeWhereUniqueInput | AccessibilityThemeWhereUniqueInput[]
    disconnect?: AccessibilityThemeWhereUniqueInput | AccessibilityThemeWhereUniqueInput[]
    delete?: AccessibilityThemeWhereUniqueInput | AccessibilityThemeWhereUniqueInput[]
    connect?: AccessibilityThemeWhereUniqueInput | AccessibilityThemeWhereUniqueInput[]
    update?: AccessibilityThemeUpdateWithWhereUniqueWithoutAccessibilityNeedInput | AccessibilityThemeUpdateWithWhereUniqueWithoutAccessibilityNeedInput[]
    updateMany?: AccessibilityThemeUpdateManyWithWhereWithoutAccessibilityNeedInput | AccessibilityThemeUpdateManyWithWhereWithoutAccessibilityNeedInput[]
    deleteMany?: AccessibilityThemeScalarWhereInput | AccessibilityThemeScalarWhereInput[]
  }

  export type AccessibilityCategoryCreateNestedOneWithoutThemesInput = {
    create?: XOR<AccessibilityCategoryCreateWithoutThemesInput, AccessibilityCategoryUncheckedCreateWithoutThemesInput>
    connectOrCreate?: AccessibilityCategoryCreateOrConnectWithoutThemesInput
    connect?: AccessibilityCategoryWhereUniqueInput
  }

  export type AccessibilityNeedCreateNestedOneWithoutThemesInput = {
    create?: XOR<AccessibilityNeedCreateWithoutThemesInput, AccessibilityNeedUncheckedCreateWithoutThemesInput>
    connectOrCreate?: AccessibilityNeedCreateOrConnectWithoutThemesInput
    connect?: AccessibilityNeedWhereUniqueInput
  }

  export type AccessibilityCategoryUpdateOneRequiredWithoutThemesNestedInput = {
    create?: XOR<AccessibilityCategoryCreateWithoutThemesInput, AccessibilityCategoryUncheckedCreateWithoutThemesInput>
    connectOrCreate?: AccessibilityCategoryCreateOrConnectWithoutThemesInput
    upsert?: AccessibilityCategoryUpsertWithoutThemesInput
    connect?: AccessibilityCategoryWhereUniqueInput
    update?: XOR<XOR<AccessibilityCategoryUpdateToOneWithWhereWithoutThemesInput, AccessibilityCategoryUpdateWithoutThemesInput>, AccessibilityCategoryUncheckedUpdateWithoutThemesInput>
  }

  export type AccessibilityNeedUpdateOneWithoutThemesNestedInput = {
    create?: XOR<AccessibilityNeedCreateWithoutThemesInput, AccessibilityNeedUncheckedCreateWithoutThemesInput>
    connectOrCreate?: AccessibilityNeedCreateOrConnectWithoutThemesInput
    upsert?: AccessibilityNeedUpsertWithoutThemesInput
    disconnect?: AccessibilityNeedWhereInput | boolean
    delete?: AccessibilityNeedWhereInput | boolean
    connect?: AccessibilityNeedWhereUniqueInput
    update?: XOR<XOR<AccessibilityNeedUpdateToOneWithWhereWithoutThemesInput, AccessibilityNeedUpdateWithoutThemesInput>, AccessibilityNeedUncheckedUpdateWithoutThemesInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ChecklistCreateWithoutUserInput = {
    createdAt?: Date | string
    content: ContentCreateNestedOneWithoutChecklistsInput
  }

  export type ChecklistUncheckedCreateWithoutUserInput = {
    id?: number
    contentId: number
    createdAt?: Date | string
  }

  export type ChecklistCreateOrConnectWithoutUserInput = {
    where: ChecklistWhereUniqueInput
    create: XOR<ChecklistCreateWithoutUserInput, ChecklistUncheckedCreateWithoutUserInput>
  }

  export type ChecklistCreateManyUserInputEnvelope = {
    data: ChecklistCreateManyUserInput | ChecklistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChecklistUpsertWithWhereUniqueWithoutUserInput = {
    where: ChecklistWhereUniqueInput
    update: XOR<ChecklistUpdateWithoutUserInput, ChecklistUncheckedUpdateWithoutUserInput>
    create: XOR<ChecklistCreateWithoutUserInput, ChecklistUncheckedCreateWithoutUserInput>
  }

  export type ChecklistUpdateWithWhereUniqueWithoutUserInput = {
    where: ChecklistWhereUniqueInput
    data: XOR<ChecklistUpdateWithoutUserInput, ChecklistUncheckedUpdateWithoutUserInput>
  }

  export type ChecklistUpdateManyWithWhereWithoutUserInput = {
    where: ChecklistScalarWhereInput
    data: XOR<ChecklistUpdateManyMutationInput, ChecklistUncheckedUpdateManyWithoutUserInput>
  }

  export type ChecklistScalarWhereInput = {
    AND?: ChecklistScalarWhereInput | ChecklistScalarWhereInput[]
    OR?: ChecklistScalarWhereInput[]
    NOT?: ChecklistScalarWhereInput | ChecklistScalarWhereInput[]
    id?: IntFilter<"Checklist"> | number
    userId?: UuidFilter<"Checklist"> | string
    contentId?: IntFilter<"Checklist"> | number
    createdAt?: DateTimeFilter<"Checklist"> | Date | string
  }

  export type UserCreateWithoutChecklistsInput = {
    id?: string
    providerId: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutChecklistsInput = {
    id?: string
    providerId: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutChecklistsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChecklistsInput, UserUncheckedCreateWithoutChecklistsInput>
  }

  export type ContentCreateWithoutChecklistsInput = {
    title: string
    type: string
    link: string
    thumbnailUrl: string
    pdfUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    topic: TopicCreateNestedOneWithoutContentsInput
    vestibularContents?: VestibularContentCreateNestedManyWithoutOriginalContentInput
  }

  export type ContentUncheckedCreateWithoutChecklistsInput = {
    id?: number
    title: string
    type: string
    link: string
    thumbnailUrl: string
    pdfUrl?: string | null
    topicId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vestibularContents?: VestibularContentUncheckedCreateNestedManyWithoutOriginalContentInput
  }

  export type ContentCreateOrConnectWithoutChecklistsInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutChecklistsInput, ContentUncheckedCreateWithoutChecklistsInput>
  }

  export type UserUpsertWithoutChecklistsInput = {
    update: XOR<UserUpdateWithoutChecklistsInput, UserUncheckedUpdateWithoutChecklistsInput>
    create: XOR<UserCreateWithoutChecklistsInput, UserUncheckedCreateWithoutChecklistsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChecklistsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChecklistsInput, UserUncheckedUpdateWithoutChecklistsInput>
  }

  export type UserUpdateWithoutChecklistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutChecklistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentUpsertWithoutChecklistsInput = {
    update: XOR<ContentUpdateWithoutChecklistsInput, ContentUncheckedUpdateWithoutChecklistsInput>
    create: XOR<ContentCreateWithoutChecklistsInput, ContentUncheckedCreateWithoutChecklistsInput>
    where?: ContentWhereInput
  }

  export type ContentUpdateToOneWithWhereWithoutChecklistsInput = {
    where?: ContentWhereInput
    data: XOR<ContentUpdateWithoutChecklistsInput, ContentUncheckedUpdateWithoutChecklistsInput>
  }

  export type ContentUpdateWithoutChecklistsInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: TopicUpdateOneRequiredWithoutContentsNestedInput
    vestibularContents?: VestibularContentUpdateManyWithoutOriginalContentNestedInput
  }

  export type ContentUncheckedUpdateWithoutChecklistsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    topicId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vestibularContents?: VestibularContentUncheckedUpdateManyWithoutOriginalContentNestedInput
  }

  export type SubjectCreateWithoutSeriesInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    topicSubjects?: TopicSubjectCreateNestedManyWithoutSubjectInput
    vestibularSubjects?: VestibularSubjectCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutSeriesInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    topicSubjects?: TopicSubjectUncheckedCreateNestedManyWithoutSubjectInput
    vestibularSubjects?: VestibularSubjectUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutSeriesInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutSeriesInput, SubjectUncheckedCreateWithoutSeriesInput>
  }

  export type SubjectCreateManySeriesInputEnvelope = {
    data: SubjectCreateManySeriesInput | SubjectCreateManySeriesInput[]
    skipDuplicates?: boolean
  }

  export type SubjectUpsertWithWhereUniqueWithoutSeriesInput = {
    where: SubjectWhereUniqueInput
    update: XOR<SubjectUpdateWithoutSeriesInput, SubjectUncheckedUpdateWithoutSeriesInput>
    create: XOR<SubjectCreateWithoutSeriesInput, SubjectUncheckedCreateWithoutSeriesInput>
  }

  export type SubjectUpdateWithWhereUniqueWithoutSeriesInput = {
    where: SubjectWhereUniqueInput
    data: XOR<SubjectUpdateWithoutSeriesInput, SubjectUncheckedUpdateWithoutSeriesInput>
  }

  export type SubjectUpdateManyWithWhereWithoutSeriesInput = {
    where: SubjectScalarWhereInput
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyWithoutSeriesInput>
  }

  export type SubjectScalarWhereInput = {
    AND?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
    OR?: SubjectScalarWhereInput[]
    NOT?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
    id?: IntFilter<"Subject"> | number
    name?: StringFilter<"Subject"> | string
    seriesId?: IntNullableFilter<"Subject"> | number | null
    createdAt?: DateTimeFilter<"Subject"> | Date | string
    updatedAt?: DateTimeFilter<"Subject"> | Date | string
  }

  export type SeriesCreateWithoutSubjectsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeriesUncheckedCreateWithoutSubjectsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeriesCreateOrConnectWithoutSubjectsInput = {
    where: SeriesWhereUniqueInput
    create: XOR<SeriesCreateWithoutSubjectsInput, SeriesUncheckedCreateWithoutSubjectsInput>
  }

  export type TopicSubjectCreateWithoutSubjectInput = {
    topic: TopicCreateNestedOneWithoutTopicSubjectsInput
  }

  export type TopicSubjectUncheckedCreateWithoutSubjectInput = {
    topicId: number
  }

  export type TopicSubjectCreateOrConnectWithoutSubjectInput = {
    where: TopicSubjectWhereUniqueInput
    create: XOR<TopicSubjectCreateWithoutSubjectInput, TopicSubjectUncheckedCreateWithoutSubjectInput>
  }

  export type TopicSubjectCreateManySubjectInputEnvelope = {
    data: TopicSubjectCreateManySubjectInput | TopicSubjectCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type VestibularSubjectCreateWithoutSubjectInput = {
    vestibular: VestibularCreateNestedOneWithoutVestibularSubjectsInput
  }

  export type VestibularSubjectUncheckedCreateWithoutSubjectInput = {
    vestibularId: number
  }

  export type VestibularSubjectCreateOrConnectWithoutSubjectInput = {
    where: VestibularSubjectWhereUniqueInput
    create: XOR<VestibularSubjectCreateWithoutSubjectInput, VestibularSubjectUncheckedCreateWithoutSubjectInput>
  }

  export type VestibularSubjectCreateManySubjectInputEnvelope = {
    data: VestibularSubjectCreateManySubjectInput | VestibularSubjectCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type SeriesUpsertWithoutSubjectsInput = {
    update: XOR<SeriesUpdateWithoutSubjectsInput, SeriesUncheckedUpdateWithoutSubjectsInput>
    create: XOR<SeriesCreateWithoutSubjectsInput, SeriesUncheckedCreateWithoutSubjectsInput>
    where?: SeriesWhereInput
  }

  export type SeriesUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: SeriesWhereInput
    data: XOR<SeriesUpdateWithoutSubjectsInput, SeriesUncheckedUpdateWithoutSubjectsInput>
  }

  export type SeriesUpdateWithoutSubjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesUncheckedUpdateWithoutSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicSubjectUpsertWithWhereUniqueWithoutSubjectInput = {
    where: TopicSubjectWhereUniqueInput
    update: XOR<TopicSubjectUpdateWithoutSubjectInput, TopicSubjectUncheckedUpdateWithoutSubjectInput>
    create: XOR<TopicSubjectCreateWithoutSubjectInput, TopicSubjectUncheckedCreateWithoutSubjectInput>
  }

  export type TopicSubjectUpdateWithWhereUniqueWithoutSubjectInput = {
    where: TopicSubjectWhereUniqueInput
    data: XOR<TopicSubjectUpdateWithoutSubjectInput, TopicSubjectUncheckedUpdateWithoutSubjectInput>
  }

  export type TopicSubjectUpdateManyWithWhereWithoutSubjectInput = {
    where: TopicSubjectScalarWhereInput
    data: XOR<TopicSubjectUpdateManyMutationInput, TopicSubjectUncheckedUpdateManyWithoutSubjectInput>
  }

  export type TopicSubjectScalarWhereInput = {
    AND?: TopicSubjectScalarWhereInput | TopicSubjectScalarWhereInput[]
    OR?: TopicSubjectScalarWhereInput[]
    NOT?: TopicSubjectScalarWhereInput | TopicSubjectScalarWhereInput[]
    topicId?: IntFilter<"TopicSubject"> | number
    subjectId?: IntFilter<"TopicSubject"> | number
  }

  export type VestibularSubjectUpsertWithWhereUniqueWithoutSubjectInput = {
    where: VestibularSubjectWhereUniqueInput
    update: XOR<VestibularSubjectUpdateWithoutSubjectInput, VestibularSubjectUncheckedUpdateWithoutSubjectInput>
    create: XOR<VestibularSubjectCreateWithoutSubjectInput, VestibularSubjectUncheckedCreateWithoutSubjectInput>
  }

  export type VestibularSubjectUpdateWithWhereUniqueWithoutSubjectInput = {
    where: VestibularSubjectWhereUniqueInput
    data: XOR<VestibularSubjectUpdateWithoutSubjectInput, VestibularSubjectUncheckedUpdateWithoutSubjectInput>
  }

  export type VestibularSubjectUpdateManyWithWhereWithoutSubjectInput = {
    where: VestibularSubjectScalarWhereInput
    data: XOR<VestibularSubjectUpdateManyMutationInput, VestibularSubjectUncheckedUpdateManyWithoutSubjectInput>
  }

  export type VestibularSubjectScalarWhereInput = {
    AND?: VestibularSubjectScalarWhereInput | VestibularSubjectScalarWhereInput[]
    OR?: VestibularSubjectScalarWhereInput[]
    NOT?: VestibularSubjectScalarWhereInput | VestibularSubjectScalarWhereInput[]
    vestibularId?: IntFilter<"VestibularSubject"> | number
    subjectId?: IntFilter<"VestibularSubject"> | number
  }

  export type ContentCreateWithoutTopicInput = {
    title: string
    type: string
    link: string
    thumbnailUrl: string
    pdfUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    checklists?: ChecklistCreateNestedManyWithoutContentInput
    vestibularContents?: VestibularContentCreateNestedManyWithoutOriginalContentInput
  }

  export type ContentUncheckedCreateWithoutTopicInput = {
    id?: number
    title: string
    type: string
    link: string
    thumbnailUrl: string
    pdfUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    checklists?: ChecklistUncheckedCreateNestedManyWithoutContentInput
    vestibularContents?: VestibularContentUncheckedCreateNestedManyWithoutOriginalContentInput
  }

  export type ContentCreateOrConnectWithoutTopicInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutTopicInput, ContentUncheckedCreateWithoutTopicInput>
  }

  export type ContentCreateManyTopicInputEnvelope = {
    data: ContentCreateManyTopicInput | ContentCreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type TopicSubjectCreateWithoutTopicInput = {
    subject: SubjectCreateNestedOneWithoutTopicSubjectsInput
  }

  export type TopicSubjectUncheckedCreateWithoutTopicInput = {
    subjectId: number
  }

  export type TopicSubjectCreateOrConnectWithoutTopicInput = {
    where: TopicSubjectWhereUniqueInput
    create: XOR<TopicSubjectCreateWithoutTopicInput, TopicSubjectUncheckedCreateWithoutTopicInput>
  }

  export type TopicSubjectCreateManyTopicInputEnvelope = {
    data: TopicSubjectCreateManyTopicInput | TopicSubjectCreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type AccessibilityCategoryTopicCreateWithoutTopicInput = {
    accessibilityCategory: AccessibilityCategoryCreateNestedOneWithoutCategoryTopicsInput
  }

  export type AccessibilityCategoryTopicUncheckedCreateWithoutTopicInput = {
    accessibilityCategoryId: number
  }

  export type AccessibilityCategoryTopicCreateOrConnectWithoutTopicInput = {
    where: AccessibilityCategoryTopicWhereUniqueInput
    create: XOR<AccessibilityCategoryTopicCreateWithoutTopicInput, AccessibilityCategoryTopicUncheckedCreateWithoutTopicInput>
  }

  export type AccessibilityCategoryTopicCreateManyTopicInputEnvelope = {
    data: AccessibilityCategoryTopicCreateManyTopicInput | AccessibilityCategoryTopicCreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type ContentUpsertWithWhereUniqueWithoutTopicInput = {
    where: ContentWhereUniqueInput
    update: XOR<ContentUpdateWithoutTopicInput, ContentUncheckedUpdateWithoutTopicInput>
    create: XOR<ContentCreateWithoutTopicInput, ContentUncheckedCreateWithoutTopicInput>
  }

  export type ContentUpdateWithWhereUniqueWithoutTopicInput = {
    where: ContentWhereUniqueInput
    data: XOR<ContentUpdateWithoutTopicInput, ContentUncheckedUpdateWithoutTopicInput>
  }

  export type ContentUpdateManyWithWhereWithoutTopicInput = {
    where: ContentScalarWhereInput
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyWithoutTopicInput>
  }

  export type ContentScalarWhereInput = {
    AND?: ContentScalarWhereInput | ContentScalarWhereInput[]
    OR?: ContentScalarWhereInput[]
    NOT?: ContentScalarWhereInput | ContentScalarWhereInput[]
    id?: IntFilter<"Content"> | number
    title?: StringFilter<"Content"> | string
    type?: StringFilter<"Content"> | string
    link?: StringFilter<"Content"> | string
    thumbnailUrl?: StringFilter<"Content"> | string
    pdfUrl?: StringNullableFilter<"Content"> | string | null
    topicId?: IntFilter<"Content"> | number
    createdAt?: DateTimeFilter<"Content"> | Date | string
    updatedAt?: DateTimeFilter<"Content"> | Date | string
  }

  export type TopicSubjectUpsertWithWhereUniqueWithoutTopicInput = {
    where: TopicSubjectWhereUniqueInput
    update: XOR<TopicSubjectUpdateWithoutTopicInput, TopicSubjectUncheckedUpdateWithoutTopicInput>
    create: XOR<TopicSubjectCreateWithoutTopicInput, TopicSubjectUncheckedCreateWithoutTopicInput>
  }

  export type TopicSubjectUpdateWithWhereUniqueWithoutTopicInput = {
    where: TopicSubjectWhereUniqueInput
    data: XOR<TopicSubjectUpdateWithoutTopicInput, TopicSubjectUncheckedUpdateWithoutTopicInput>
  }

  export type TopicSubjectUpdateManyWithWhereWithoutTopicInput = {
    where: TopicSubjectScalarWhereInput
    data: XOR<TopicSubjectUpdateManyMutationInput, TopicSubjectUncheckedUpdateManyWithoutTopicInput>
  }

  export type AccessibilityCategoryTopicUpsertWithWhereUniqueWithoutTopicInput = {
    where: AccessibilityCategoryTopicWhereUniqueInput
    update: XOR<AccessibilityCategoryTopicUpdateWithoutTopicInput, AccessibilityCategoryTopicUncheckedUpdateWithoutTopicInput>
    create: XOR<AccessibilityCategoryTopicCreateWithoutTopicInput, AccessibilityCategoryTopicUncheckedCreateWithoutTopicInput>
  }

  export type AccessibilityCategoryTopicUpdateWithWhereUniqueWithoutTopicInput = {
    where: AccessibilityCategoryTopicWhereUniqueInput
    data: XOR<AccessibilityCategoryTopicUpdateWithoutTopicInput, AccessibilityCategoryTopicUncheckedUpdateWithoutTopicInput>
  }

  export type AccessibilityCategoryTopicUpdateManyWithWhereWithoutTopicInput = {
    where: AccessibilityCategoryTopicScalarWhereInput
    data: XOR<AccessibilityCategoryTopicUpdateManyMutationInput, AccessibilityCategoryTopicUncheckedUpdateManyWithoutTopicInput>
  }

  export type AccessibilityCategoryTopicScalarWhereInput = {
    AND?: AccessibilityCategoryTopicScalarWhereInput | AccessibilityCategoryTopicScalarWhereInput[]
    OR?: AccessibilityCategoryTopicScalarWhereInput[]
    NOT?: AccessibilityCategoryTopicScalarWhereInput | AccessibilityCategoryTopicScalarWhereInput[]
    accessibilityCategoryId?: IntFilter<"AccessibilityCategoryTopic"> | number
    topicId?: IntFilter<"AccessibilityCategoryTopic"> | number
  }

  export type TopicCreateWithoutContentsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    topicSubjects?: TopicSubjectCreateNestedManyWithoutTopicInput
    accessibilityCategoryTopics?: AccessibilityCategoryTopicCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutContentsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    topicSubjects?: TopicSubjectUncheckedCreateNestedManyWithoutTopicInput
    accessibilityCategoryTopics?: AccessibilityCategoryTopicUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutContentsInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutContentsInput, TopicUncheckedCreateWithoutContentsInput>
  }

  export type ChecklistCreateWithoutContentInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutChecklistsInput
  }

  export type ChecklistUncheckedCreateWithoutContentInput = {
    id?: number
    userId: string
    createdAt?: Date | string
  }

  export type ChecklistCreateOrConnectWithoutContentInput = {
    where: ChecklistWhereUniqueInput
    create: XOR<ChecklistCreateWithoutContentInput, ChecklistUncheckedCreateWithoutContentInput>
  }

  export type ChecklistCreateManyContentInputEnvelope = {
    data: ChecklistCreateManyContentInput | ChecklistCreateManyContentInput[]
    skipDuplicates?: boolean
  }

  export type VestibularContentCreateWithoutOriginalContentInput = {
    title: string
    type?: string | null
    link?: string | null
    pdfUrl?: string | null
    isShared?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    vestibular: VestibularCreateNestedOneWithoutContentsInput
  }

  export type VestibularContentUncheckedCreateWithoutOriginalContentInput = {
    id?: number
    vestibularId: number
    title: string
    type?: string | null
    link?: string | null
    pdfUrl?: string | null
    isShared?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VestibularContentCreateOrConnectWithoutOriginalContentInput = {
    where: VestibularContentWhereUniqueInput
    create: XOR<VestibularContentCreateWithoutOriginalContentInput, VestibularContentUncheckedCreateWithoutOriginalContentInput>
  }

  export type VestibularContentCreateManyOriginalContentInputEnvelope = {
    data: VestibularContentCreateManyOriginalContentInput | VestibularContentCreateManyOriginalContentInput[]
    skipDuplicates?: boolean
  }

  export type TopicUpsertWithoutContentsInput = {
    update: XOR<TopicUpdateWithoutContentsInput, TopicUncheckedUpdateWithoutContentsInput>
    create: XOR<TopicCreateWithoutContentsInput, TopicUncheckedCreateWithoutContentsInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutContentsInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutContentsInput, TopicUncheckedUpdateWithoutContentsInput>
  }

  export type TopicUpdateWithoutContentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topicSubjects?: TopicSubjectUpdateManyWithoutTopicNestedInput
    accessibilityCategoryTopics?: AccessibilityCategoryTopicUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutContentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topicSubjects?: TopicSubjectUncheckedUpdateManyWithoutTopicNestedInput
    accessibilityCategoryTopics?: AccessibilityCategoryTopicUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type ChecklistUpsertWithWhereUniqueWithoutContentInput = {
    where: ChecklistWhereUniqueInput
    update: XOR<ChecklistUpdateWithoutContentInput, ChecklistUncheckedUpdateWithoutContentInput>
    create: XOR<ChecklistCreateWithoutContentInput, ChecklistUncheckedCreateWithoutContentInput>
  }

  export type ChecklistUpdateWithWhereUniqueWithoutContentInput = {
    where: ChecklistWhereUniqueInput
    data: XOR<ChecklistUpdateWithoutContentInput, ChecklistUncheckedUpdateWithoutContentInput>
  }

  export type ChecklistUpdateManyWithWhereWithoutContentInput = {
    where: ChecklistScalarWhereInput
    data: XOR<ChecklistUpdateManyMutationInput, ChecklistUncheckedUpdateManyWithoutContentInput>
  }

  export type VestibularContentUpsertWithWhereUniqueWithoutOriginalContentInput = {
    where: VestibularContentWhereUniqueInput
    update: XOR<VestibularContentUpdateWithoutOriginalContentInput, VestibularContentUncheckedUpdateWithoutOriginalContentInput>
    create: XOR<VestibularContentCreateWithoutOriginalContentInput, VestibularContentUncheckedCreateWithoutOriginalContentInput>
  }

  export type VestibularContentUpdateWithWhereUniqueWithoutOriginalContentInput = {
    where: VestibularContentWhereUniqueInput
    data: XOR<VestibularContentUpdateWithoutOriginalContentInput, VestibularContentUncheckedUpdateWithoutOriginalContentInput>
  }

  export type VestibularContentUpdateManyWithWhereWithoutOriginalContentInput = {
    where: VestibularContentScalarWhereInput
    data: XOR<VestibularContentUpdateManyMutationInput, VestibularContentUncheckedUpdateManyWithoutOriginalContentInput>
  }

  export type VestibularContentScalarWhereInput = {
    AND?: VestibularContentScalarWhereInput | VestibularContentScalarWhereInput[]
    OR?: VestibularContentScalarWhereInput[]
    NOT?: VestibularContentScalarWhereInput | VestibularContentScalarWhereInput[]
    id?: IntFilter<"VestibularContent"> | number
    vestibularId?: IntFilter<"VestibularContent"> | number
    title?: StringFilter<"VestibularContent"> | string
    type?: StringNullableFilter<"VestibularContent"> | string | null
    link?: StringNullableFilter<"VestibularContent"> | string | null
    pdfUrl?: StringNullableFilter<"VestibularContent"> | string | null
    isShared?: BoolFilter<"VestibularContent"> | boolean
    originalContentId?: IntNullableFilter<"VestibularContent"> | number | null
    createdAt?: DateTimeFilter<"VestibularContent"> | Date | string
    updatedAt?: DateTimeFilter<"VestibularContent"> | Date | string
  }

  export type TopicCreateWithoutTopicSubjectsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contents?: ContentCreateNestedManyWithoutTopicInput
    accessibilityCategoryTopics?: AccessibilityCategoryTopicCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutTopicSubjectsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contents?: ContentUncheckedCreateNestedManyWithoutTopicInput
    accessibilityCategoryTopics?: AccessibilityCategoryTopicUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutTopicSubjectsInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutTopicSubjectsInput, TopicUncheckedCreateWithoutTopicSubjectsInput>
  }

  export type SubjectCreateWithoutTopicSubjectsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    series?: SeriesCreateNestedOneWithoutSubjectsInput
    vestibularSubjects?: VestibularSubjectCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutTopicSubjectsInput = {
    id?: number
    name: string
    seriesId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vestibularSubjects?: VestibularSubjectUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutTopicSubjectsInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutTopicSubjectsInput, SubjectUncheckedCreateWithoutTopicSubjectsInput>
  }

  export type TopicUpsertWithoutTopicSubjectsInput = {
    update: XOR<TopicUpdateWithoutTopicSubjectsInput, TopicUncheckedUpdateWithoutTopicSubjectsInput>
    create: XOR<TopicCreateWithoutTopicSubjectsInput, TopicUncheckedCreateWithoutTopicSubjectsInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutTopicSubjectsInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutTopicSubjectsInput, TopicUncheckedUpdateWithoutTopicSubjectsInput>
  }

  export type TopicUpdateWithoutTopicSubjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: ContentUpdateManyWithoutTopicNestedInput
    accessibilityCategoryTopics?: AccessibilityCategoryTopicUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutTopicSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: ContentUncheckedUpdateManyWithoutTopicNestedInput
    accessibilityCategoryTopics?: AccessibilityCategoryTopicUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type SubjectUpsertWithoutTopicSubjectsInput = {
    update: XOR<SubjectUpdateWithoutTopicSubjectsInput, SubjectUncheckedUpdateWithoutTopicSubjectsInput>
    create: XOR<SubjectCreateWithoutTopicSubjectsInput, SubjectUncheckedCreateWithoutTopicSubjectsInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutTopicSubjectsInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutTopicSubjectsInput, SubjectUncheckedUpdateWithoutTopicSubjectsInput>
  }

  export type SubjectUpdateWithoutTopicSubjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    series?: SeriesUpdateOneWithoutSubjectsNestedInput
    vestibularSubjects?: VestibularSubjectUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutTopicSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    seriesId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vestibularSubjects?: VestibularSubjectUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type VestibularSubjectCreateWithoutVestibularInput = {
    subject: SubjectCreateNestedOneWithoutVestibularSubjectsInput
  }

  export type VestibularSubjectUncheckedCreateWithoutVestibularInput = {
    subjectId: number
  }

  export type VestibularSubjectCreateOrConnectWithoutVestibularInput = {
    where: VestibularSubjectWhereUniqueInput
    create: XOR<VestibularSubjectCreateWithoutVestibularInput, VestibularSubjectUncheckedCreateWithoutVestibularInput>
  }

  export type VestibularSubjectCreateManyVestibularInputEnvelope = {
    data: VestibularSubjectCreateManyVestibularInput | VestibularSubjectCreateManyVestibularInput[]
    skipDuplicates?: boolean
  }

  export type VestibularContentCreateWithoutVestibularInput = {
    title: string
    type?: string | null
    link?: string | null
    pdfUrl?: string | null
    isShared?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    originalContent?: ContentCreateNestedOneWithoutVestibularContentsInput
  }

  export type VestibularContentUncheckedCreateWithoutVestibularInput = {
    id?: number
    title: string
    type?: string | null
    link?: string | null
    pdfUrl?: string | null
    isShared?: boolean
    originalContentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VestibularContentCreateOrConnectWithoutVestibularInput = {
    where: VestibularContentWhereUniqueInput
    create: XOR<VestibularContentCreateWithoutVestibularInput, VestibularContentUncheckedCreateWithoutVestibularInput>
  }

  export type VestibularContentCreateManyVestibularInputEnvelope = {
    data: VestibularContentCreateManyVestibularInput | VestibularContentCreateManyVestibularInput[]
    skipDuplicates?: boolean
  }

  export type VestibularTopicCreateWithoutVestibularInput = {
    name: string
    originalTopicId?: number | null
    isShared?: boolean
    notes?: string | null
    tags?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VestibularTopicUncheckedCreateWithoutVestibularInput = {
    id?: number
    name: string
    originalTopicId?: number | null
    isShared?: boolean
    notes?: string | null
    tags?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VestibularTopicCreateOrConnectWithoutVestibularInput = {
    where: VestibularTopicWhereUniqueInput
    create: XOR<VestibularTopicCreateWithoutVestibularInput, VestibularTopicUncheckedCreateWithoutVestibularInput>
  }

  export type VestibularTopicCreateManyVestibularInputEnvelope = {
    data: VestibularTopicCreateManyVestibularInput | VestibularTopicCreateManyVestibularInput[]
    skipDuplicates?: boolean
  }

  export type VestibularSubjectUpsertWithWhereUniqueWithoutVestibularInput = {
    where: VestibularSubjectWhereUniqueInput
    update: XOR<VestibularSubjectUpdateWithoutVestibularInput, VestibularSubjectUncheckedUpdateWithoutVestibularInput>
    create: XOR<VestibularSubjectCreateWithoutVestibularInput, VestibularSubjectUncheckedCreateWithoutVestibularInput>
  }

  export type VestibularSubjectUpdateWithWhereUniqueWithoutVestibularInput = {
    where: VestibularSubjectWhereUniqueInput
    data: XOR<VestibularSubjectUpdateWithoutVestibularInput, VestibularSubjectUncheckedUpdateWithoutVestibularInput>
  }

  export type VestibularSubjectUpdateManyWithWhereWithoutVestibularInput = {
    where: VestibularSubjectScalarWhereInput
    data: XOR<VestibularSubjectUpdateManyMutationInput, VestibularSubjectUncheckedUpdateManyWithoutVestibularInput>
  }

  export type VestibularContentUpsertWithWhereUniqueWithoutVestibularInput = {
    where: VestibularContentWhereUniqueInput
    update: XOR<VestibularContentUpdateWithoutVestibularInput, VestibularContentUncheckedUpdateWithoutVestibularInput>
    create: XOR<VestibularContentCreateWithoutVestibularInput, VestibularContentUncheckedCreateWithoutVestibularInput>
  }

  export type VestibularContentUpdateWithWhereUniqueWithoutVestibularInput = {
    where: VestibularContentWhereUniqueInput
    data: XOR<VestibularContentUpdateWithoutVestibularInput, VestibularContentUncheckedUpdateWithoutVestibularInput>
  }

  export type VestibularContentUpdateManyWithWhereWithoutVestibularInput = {
    where: VestibularContentScalarWhereInput
    data: XOR<VestibularContentUpdateManyMutationInput, VestibularContentUncheckedUpdateManyWithoutVestibularInput>
  }

  export type VestibularTopicUpsertWithWhereUniqueWithoutVestibularInput = {
    where: VestibularTopicWhereUniqueInput
    update: XOR<VestibularTopicUpdateWithoutVestibularInput, VestibularTopicUncheckedUpdateWithoutVestibularInput>
    create: XOR<VestibularTopicCreateWithoutVestibularInput, VestibularTopicUncheckedCreateWithoutVestibularInput>
  }

  export type VestibularTopicUpdateWithWhereUniqueWithoutVestibularInput = {
    where: VestibularTopicWhereUniqueInput
    data: XOR<VestibularTopicUpdateWithoutVestibularInput, VestibularTopicUncheckedUpdateWithoutVestibularInput>
  }

  export type VestibularTopicUpdateManyWithWhereWithoutVestibularInput = {
    where: VestibularTopicScalarWhereInput
    data: XOR<VestibularTopicUpdateManyMutationInput, VestibularTopicUncheckedUpdateManyWithoutVestibularInput>
  }

  export type VestibularTopicScalarWhereInput = {
    AND?: VestibularTopicScalarWhereInput | VestibularTopicScalarWhereInput[]
    OR?: VestibularTopicScalarWhereInput[]
    NOT?: VestibularTopicScalarWhereInput | VestibularTopicScalarWhereInput[]
    id?: IntFilter<"VestibularTopic"> | number
    vestibularId?: IntFilter<"VestibularTopic"> | number
    name?: StringFilter<"VestibularTopic"> | string
    originalTopicId?: IntNullableFilter<"VestibularTopic"> | number | null
    isShared?: BoolFilter<"VestibularTopic"> | boolean
    notes?: StringNullableFilter<"VestibularTopic"> | string | null
    tags?: StringNullableFilter<"VestibularTopic"> | string | null
    createdAt?: DateTimeFilter<"VestibularTopic"> | Date | string
    updatedAt?: DateTimeFilter<"VestibularTopic"> | Date | string
  }

  export type VestibularCreateWithoutVestibularSubjectsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contents?: VestibularContentCreateNestedManyWithoutVestibularInput
    vestibularTopics?: VestibularTopicCreateNestedManyWithoutVestibularInput
  }

  export type VestibularUncheckedCreateWithoutVestibularSubjectsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contents?: VestibularContentUncheckedCreateNestedManyWithoutVestibularInput
    vestibularTopics?: VestibularTopicUncheckedCreateNestedManyWithoutVestibularInput
  }

  export type VestibularCreateOrConnectWithoutVestibularSubjectsInput = {
    where: VestibularWhereUniqueInput
    create: XOR<VestibularCreateWithoutVestibularSubjectsInput, VestibularUncheckedCreateWithoutVestibularSubjectsInput>
  }

  export type SubjectCreateWithoutVestibularSubjectsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    series?: SeriesCreateNestedOneWithoutSubjectsInput
    topicSubjects?: TopicSubjectCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutVestibularSubjectsInput = {
    id?: number
    name: string
    seriesId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    topicSubjects?: TopicSubjectUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutVestibularSubjectsInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutVestibularSubjectsInput, SubjectUncheckedCreateWithoutVestibularSubjectsInput>
  }

  export type VestibularUpsertWithoutVestibularSubjectsInput = {
    update: XOR<VestibularUpdateWithoutVestibularSubjectsInput, VestibularUncheckedUpdateWithoutVestibularSubjectsInput>
    create: XOR<VestibularCreateWithoutVestibularSubjectsInput, VestibularUncheckedCreateWithoutVestibularSubjectsInput>
    where?: VestibularWhereInput
  }

  export type VestibularUpdateToOneWithWhereWithoutVestibularSubjectsInput = {
    where?: VestibularWhereInput
    data: XOR<VestibularUpdateWithoutVestibularSubjectsInput, VestibularUncheckedUpdateWithoutVestibularSubjectsInput>
  }

  export type VestibularUpdateWithoutVestibularSubjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: VestibularContentUpdateManyWithoutVestibularNestedInput
    vestibularTopics?: VestibularTopicUpdateManyWithoutVestibularNestedInput
  }

  export type VestibularUncheckedUpdateWithoutVestibularSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: VestibularContentUncheckedUpdateManyWithoutVestibularNestedInput
    vestibularTopics?: VestibularTopicUncheckedUpdateManyWithoutVestibularNestedInput
  }

  export type SubjectUpsertWithoutVestibularSubjectsInput = {
    update: XOR<SubjectUpdateWithoutVestibularSubjectsInput, SubjectUncheckedUpdateWithoutVestibularSubjectsInput>
    create: XOR<SubjectCreateWithoutVestibularSubjectsInput, SubjectUncheckedCreateWithoutVestibularSubjectsInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutVestibularSubjectsInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutVestibularSubjectsInput, SubjectUncheckedUpdateWithoutVestibularSubjectsInput>
  }

  export type SubjectUpdateWithoutVestibularSubjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    series?: SeriesUpdateOneWithoutSubjectsNestedInput
    topicSubjects?: TopicSubjectUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutVestibularSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    seriesId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topicSubjects?: TopicSubjectUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type VestibularCreateWithoutContentsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vestibularSubjects?: VestibularSubjectCreateNestedManyWithoutVestibularInput
    vestibularTopics?: VestibularTopicCreateNestedManyWithoutVestibularInput
  }

  export type VestibularUncheckedCreateWithoutContentsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vestibularSubjects?: VestibularSubjectUncheckedCreateNestedManyWithoutVestibularInput
    vestibularTopics?: VestibularTopicUncheckedCreateNestedManyWithoutVestibularInput
  }

  export type VestibularCreateOrConnectWithoutContentsInput = {
    where: VestibularWhereUniqueInput
    create: XOR<VestibularCreateWithoutContentsInput, VestibularUncheckedCreateWithoutContentsInput>
  }

  export type ContentCreateWithoutVestibularContentsInput = {
    title: string
    type: string
    link: string
    thumbnailUrl: string
    pdfUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    topic: TopicCreateNestedOneWithoutContentsInput
    checklists?: ChecklistCreateNestedManyWithoutContentInput
  }

  export type ContentUncheckedCreateWithoutVestibularContentsInput = {
    id?: number
    title: string
    type: string
    link: string
    thumbnailUrl: string
    pdfUrl?: string | null
    topicId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    checklists?: ChecklistUncheckedCreateNestedManyWithoutContentInput
  }

  export type ContentCreateOrConnectWithoutVestibularContentsInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutVestibularContentsInput, ContentUncheckedCreateWithoutVestibularContentsInput>
  }

  export type VestibularUpsertWithoutContentsInput = {
    update: XOR<VestibularUpdateWithoutContentsInput, VestibularUncheckedUpdateWithoutContentsInput>
    create: XOR<VestibularCreateWithoutContentsInput, VestibularUncheckedCreateWithoutContentsInput>
    where?: VestibularWhereInput
  }

  export type VestibularUpdateToOneWithWhereWithoutContentsInput = {
    where?: VestibularWhereInput
    data: XOR<VestibularUpdateWithoutContentsInput, VestibularUncheckedUpdateWithoutContentsInput>
  }

  export type VestibularUpdateWithoutContentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vestibularSubjects?: VestibularSubjectUpdateManyWithoutVestibularNestedInput
    vestibularTopics?: VestibularTopicUpdateManyWithoutVestibularNestedInput
  }

  export type VestibularUncheckedUpdateWithoutContentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vestibularSubjects?: VestibularSubjectUncheckedUpdateManyWithoutVestibularNestedInput
    vestibularTopics?: VestibularTopicUncheckedUpdateManyWithoutVestibularNestedInput
  }

  export type ContentUpsertWithoutVestibularContentsInput = {
    update: XOR<ContentUpdateWithoutVestibularContentsInput, ContentUncheckedUpdateWithoutVestibularContentsInput>
    create: XOR<ContentCreateWithoutVestibularContentsInput, ContentUncheckedCreateWithoutVestibularContentsInput>
    where?: ContentWhereInput
  }

  export type ContentUpdateToOneWithWhereWithoutVestibularContentsInput = {
    where?: ContentWhereInput
    data: XOR<ContentUpdateWithoutVestibularContentsInput, ContentUncheckedUpdateWithoutVestibularContentsInput>
  }

  export type ContentUpdateWithoutVestibularContentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: TopicUpdateOneRequiredWithoutContentsNestedInput
    checklists?: ChecklistUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateWithoutVestibularContentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    topicId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checklists?: ChecklistUncheckedUpdateManyWithoutContentNestedInput
  }

  export type VestibularCreateWithoutVestibularTopicsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vestibularSubjects?: VestibularSubjectCreateNestedManyWithoutVestibularInput
    contents?: VestibularContentCreateNestedManyWithoutVestibularInput
  }

  export type VestibularUncheckedCreateWithoutVestibularTopicsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vestibularSubjects?: VestibularSubjectUncheckedCreateNestedManyWithoutVestibularInput
    contents?: VestibularContentUncheckedCreateNestedManyWithoutVestibularInput
  }

  export type VestibularCreateOrConnectWithoutVestibularTopicsInput = {
    where: VestibularWhereUniqueInput
    create: XOR<VestibularCreateWithoutVestibularTopicsInput, VestibularUncheckedCreateWithoutVestibularTopicsInput>
  }

  export type VestibularUpsertWithoutVestibularTopicsInput = {
    update: XOR<VestibularUpdateWithoutVestibularTopicsInput, VestibularUncheckedUpdateWithoutVestibularTopicsInput>
    create: XOR<VestibularCreateWithoutVestibularTopicsInput, VestibularUncheckedCreateWithoutVestibularTopicsInput>
    where?: VestibularWhereInput
  }

  export type VestibularUpdateToOneWithWhereWithoutVestibularTopicsInput = {
    where?: VestibularWhereInput
    data: XOR<VestibularUpdateWithoutVestibularTopicsInput, VestibularUncheckedUpdateWithoutVestibularTopicsInput>
  }

  export type VestibularUpdateWithoutVestibularTopicsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vestibularSubjects?: VestibularSubjectUpdateManyWithoutVestibularNestedInput
    contents?: VestibularContentUpdateManyWithoutVestibularNestedInput
  }

  export type VestibularUncheckedUpdateWithoutVestibularTopicsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vestibularSubjects?: VestibularSubjectUncheckedUpdateManyWithoutVestibularNestedInput
    contents?: VestibularContentUncheckedUpdateManyWithoutVestibularNestedInput
  }

  export type AccessibilityCategoryTopicCreateWithoutAccessibilityCategoryInput = {
    topic: TopicCreateNestedOneWithoutAccessibilityCategoryTopicsInput
  }

  export type AccessibilityCategoryTopicUncheckedCreateWithoutAccessibilityCategoryInput = {
    topicId: number
  }

  export type AccessibilityCategoryTopicCreateOrConnectWithoutAccessibilityCategoryInput = {
    where: AccessibilityCategoryTopicWhereUniqueInput
    create: XOR<AccessibilityCategoryTopicCreateWithoutAccessibilityCategoryInput, AccessibilityCategoryTopicUncheckedCreateWithoutAccessibilityCategoryInput>
  }

  export type AccessibilityCategoryTopicCreateManyAccessibilityCategoryInputEnvelope = {
    data: AccessibilityCategoryTopicCreateManyAccessibilityCategoryInput | AccessibilityCategoryTopicCreateManyAccessibilityCategoryInput[]
    skipDuplicates?: boolean
  }

  export type AccessibilityNeedCreateWithoutAccessibilityCategoryInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    themes?: AccessibilityThemeCreateNestedManyWithoutAccessibilityNeedInput
  }

  export type AccessibilityNeedUncheckedCreateWithoutAccessibilityCategoryInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    themes?: AccessibilityThemeUncheckedCreateNestedManyWithoutAccessibilityNeedInput
  }

  export type AccessibilityNeedCreateOrConnectWithoutAccessibilityCategoryInput = {
    where: AccessibilityNeedWhereUniqueInput
    create: XOR<AccessibilityNeedCreateWithoutAccessibilityCategoryInput, AccessibilityNeedUncheckedCreateWithoutAccessibilityCategoryInput>
  }

  export type AccessibilityNeedCreateManyAccessibilityCategoryInputEnvelope = {
    data: AccessibilityNeedCreateManyAccessibilityCategoryInput | AccessibilityNeedCreateManyAccessibilityCategoryInput[]
    skipDuplicates?: boolean
  }

  export type AccessibilityThemeCreateWithoutAccessibilityCategoryInput = {
    title: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accessibilityNeed?: AccessibilityNeedCreateNestedOneWithoutThemesInput
  }

  export type AccessibilityThemeUncheckedCreateWithoutAccessibilityCategoryInput = {
    id?: number
    accessibilityNeedId?: number | null
    title: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccessibilityThemeCreateOrConnectWithoutAccessibilityCategoryInput = {
    where: AccessibilityThemeWhereUniqueInput
    create: XOR<AccessibilityThemeCreateWithoutAccessibilityCategoryInput, AccessibilityThemeUncheckedCreateWithoutAccessibilityCategoryInput>
  }

  export type AccessibilityThemeCreateManyAccessibilityCategoryInputEnvelope = {
    data: AccessibilityThemeCreateManyAccessibilityCategoryInput | AccessibilityThemeCreateManyAccessibilityCategoryInput[]
    skipDuplicates?: boolean
  }

  export type AccessibilityCategoryTopicUpsertWithWhereUniqueWithoutAccessibilityCategoryInput = {
    where: AccessibilityCategoryTopicWhereUniqueInput
    update: XOR<AccessibilityCategoryTopicUpdateWithoutAccessibilityCategoryInput, AccessibilityCategoryTopicUncheckedUpdateWithoutAccessibilityCategoryInput>
    create: XOR<AccessibilityCategoryTopicCreateWithoutAccessibilityCategoryInput, AccessibilityCategoryTopicUncheckedCreateWithoutAccessibilityCategoryInput>
  }

  export type AccessibilityCategoryTopicUpdateWithWhereUniqueWithoutAccessibilityCategoryInput = {
    where: AccessibilityCategoryTopicWhereUniqueInput
    data: XOR<AccessibilityCategoryTopicUpdateWithoutAccessibilityCategoryInput, AccessibilityCategoryTopicUncheckedUpdateWithoutAccessibilityCategoryInput>
  }

  export type AccessibilityCategoryTopicUpdateManyWithWhereWithoutAccessibilityCategoryInput = {
    where: AccessibilityCategoryTopicScalarWhereInput
    data: XOR<AccessibilityCategoryTopicUpdateManyMutationInput, AccessibilityCategoryTopicUncheckedUpdateManyWithoutAccessibilityCategoryInput>
  }

  export type AccessibilityNeedUpsertWithWhereUniqueWithoutAccessibilityCategoryInput = {
    where: AccessibilityNeedWhereUniqueInput
    update: XOR<AccessibilityNeedUpdateWithoutAccessibilityCategoryInput, AccessibilityNeedUncheckedUpdateWithoutAccessibilityCategoryInput>
    create: XOR<AccessibilityNeedCreateWithoutAccessibilityCategoryInput, AccessibilityNeedUncheckedCreateWithoutAccessibilityCategoryInput>
  }

  export type AccessibilityNeedUpdateWithWhereUniqueWithoutAccessibilityCategoryInput = {
    where: AccessibilityNeedWhereUniqueInput
    data: XOR<AccessibilityNeedUpdateWithoutAccessibilityCategoryInput, AccessibilityNeedUncheckedUpdateWithoutAccessibilityCategoryInput>
  }

  export type AccessibilityNeedUpdateManyWithWhereWithoutAccessibilityCategoryInput = {
    where: AccessibilityNeedScalarWhereInput
    data: XOR<AccessibilityNeedUpdateManyMutationInput, AccessibilityNeedUncheckedUpdateManyWithoutAccessibilityCategoryInput>
  }

  export type AccessibilityNeedScalarWhereInput = {
    AND?: AccessibilityNeedScalarWhereInput | AccessibilityNeedScalarWhereInput[]
    OR?: AccessibilityNeedScalarWhereInput[]
    NOT?: AccessibilityNeedScalarWhereInput | AccessibilityNeedScalarWhereInput[]
    id?: IntFilter<"AccessibilityNeed"> | number
    accessibilityCategoryId?: IntFilter<"AccessibilityNeed"> | number
    name?: StringFilter<"AccessibilityNeed"> | string
    createdAt?: DateTimeFilter<"AccessibilityNeed"> | Date | string
    updatedAt?: DateTimeFilter<"AccessibilityNeed"> | Date | string
  }

  export type AccessibilityThemeUpsertWithWhereUniqueWithoutAccessibilityCategoryInput = {
    where: AccessibilityThemeWhereUniqueInput
    update: XOR<AccessibilityThemeUpdateWithoutAccessibilityCategoryInput, AccessibilityThemeUncheckedUpdateWithoutAccessibilityCategoryInput>
    create: XOR<AccessibilityThemeCreateWithoutAccessibilityCategoryInput, AccessibilityThemeUncheckedCreateWithoutAccessibilityCategoryInput>
  }

  export type AccessibilityThemeUpdateWithWhereUniqueWithoutAccessibilityCategoryInput = {
    where: AccessibilityThemeWhereUniqueInput
    data: XOR<AccessibilityThemeUpdateWithoutAccessibilityCategoryInput, AccessibilityThemeUncheckedUpdateWithoutAccessibilityCategoryInput>
  }

  export type AccessibilityThemeUpdateManyWithWhereWithoutAccessibilityCategoryInput = {
    where: AccessibilityThemeScalarWhereInput
    data: XOR<AccessibilityThemeUpdateManyMutationInput, AccessibilityThemeUncheckedUpdateManyWithoutAccessibilityCategoryInput>
  }

  export type AccessibilityThemeScalarWhereInput = {
    AND?: AccessibilityThemeScalarWhereInput | AccessibilityThemeScalarWhereInput[]
    OR?: AccessibilityThemeScalarWhereInput[]
    NOT?: AccessibilityThemeScalarWhereInput | AccessibilityThemeScalarWhereInput[]
    id?: IntFilter<"AccessibilityTheme"> | number
    accessibilityCategoryId?: IntFilter<"AccessibilityTheme"> | number
    accessibilityNeedId?: IntNullableFilter<"AccessibilityTheme"> | number | null
    title?: StringFilter<"AccessibilityTheme"> | string
    content?: StringNullableFilter<"AccessibilityTheme"> | string | null
    createdAt?: DateTimeFilter<"AccessibilityTheme"> | Date | string
    updatedAt?: DateTimeFilter<"AccessibilityTheme"> | Date | string
  }

  export type AccessibilityCategoryCreateWithoutCategoryTopicsInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    needs?: AccessibilityNeedCreateNestedManyWithoutAccessibilityCategoryInput
    themes?: AccessibilityThemeCreateNestedManyWithoutAccessibilityCategoryInput
  }

  export type AccessibilityCategoryUncheckedCreateWithoutCategoryTopicsInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    needs?: AccessibilityNeedUncheckedCreateNestedManyWithoutAccessibilityCategoryInput
    themes?: AccessibilityThemeUncheckedCreateNestedManyWithoutAccessibilityCategoryInput
  }

  export type AccessibilityCategoryCreateOrConnectWithoutCategoryTopicsInput = {
    where: AccessibilityCategoryWhereUniqueInput
    create: XOR<AccessibilityCategoryCreateWithoutCategoryTopicsInput, AccessibilityCategoryUncheckedCreateWithoutCategoryTopicsInput>
  }

  export type TopicCreateWithoutAccessibilityCategoryTopicsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contents?: ContentCreateNestedManyWithoutTopicInput
    topicSubjects?: TopicSubjectCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutAccessibilityCategoryTopicsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contents?: ContentUncheckedCreateNestedManyWithoutTopicInput
    topicSubjects?: TopicSubjectUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutAccessibilityCategoryTopicsInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutAccessibilityCategoryTopicsInput, TopicUncheckedCreateWithoutAccessibilityCategoryTopicsInput>
  }

  export type AccessibilityCategoryUpsertWithoutCategoryTopicsInput = {
    update: XOR<AccessibilityCategoryUpdateWithoutCategoryTopicsInput, AccessibilityCategoryUncheckedUpdateWithoutCategoryTopicsInput>
    create: XOR<AccessibilityCategoryCreateWithoutCategoryTopicsInput, AccessibilityCategoryUncheckedCreateWithoutCategoryTopicsInput>
    where?: AccessibilityCategoryWhereInput
  }

  export type AccessibilityCategoryUpdateToOneWithWhereWithoutCategoryTopicsInput = {
    where?: AccessibilityCategoryWhereInput
    data: XOR<AccessibilityCategoryUpdateWithoutCategoryTopicsInput, AccessibilityCategoryUncheckedUpdateWithoutCategoryTopicsInput>
  }

  export type AccessibilityCategoryUpdateWithoutCategoryTopicsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    needs?: AccessibilityNeedUpdateManyWithoutAccessibilityCategoryNestedInput
    themes?: AccessibilityThemeUpdateManyWithoutAccessibilityCategoryNestedInput
  }

  export type AccessibilityCategoryUncheckedUpdateWithoutCategoryTopicsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    needs?: AccessibilityNeedUncheckedUpdateManyWithoutAccessibilityCategoryNestedInput
    themes?: AccessibilityThemeUncheckedUpdateManyWithoutAccessibilityCategoryNestedInput
  }

  export type TopicUpsertWithoutAccessibilityCategoryTopicsInput = {
    update: XOR<TopicUpdateWithoutAccessibilityCategoryTopicsInput, TopicUncheckedUpdateWithoutAccessibilityCategoryTopicsInput>
    create: XOR<TopicCreateWithoutAccessibilityCategoryTopicsInput, TopicUncheckedCreateWithoutAccessibilityCategoryTopicsInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutAccessibilityCategoryTopicsInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutAccessibilityCategoryTopicsInput, TopicUncheckedUpdateWithoutAccessibilityCategoryTopicsInput>
  }

  export type TopicUpdateWithoutAccessibilityCategoryTopicsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: ContentUpdateManyWithoutTopicNestedInput
    topicSubjects?: TopicSubjectUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutAccessibilityCategoryTopicsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: ContentUncheckedUpdateManyWithoutTopicNestedInput
    topicSubjects?: TopicSubjectUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type AccessibilityCategoryCreateWithoutNeedsInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryTopics?: AccessibilityCategoryTopicCreateNestedManyWithoutAccessibilityCategoryInput
    themes?: AccessibilityThemeCreateNestedManyWithoutAccessibilityCategoryInput
  }

  export type AccessibilityCategoryUncheckedCreateWithoutNeedsInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryTopics?: AccessibilityCategoryTopicUncheckedCreateNestedManyWithoutAccessibilityCategoryInput
    themes?: AccessibilityThemeUncheckedCreateNestedManyWithoutAccessibilityCategoryInput
  }

  export type AccessibilityCategoryCreateOrConnectWithoutNeedsInput = {
    where: AccessibilityCategoryWhereUniqueInput
    create: XOR<AccessibilityCategoryCreateWithoutNeedsInput, AccessibilityCategoryUncheckedCreateWithoutNeedsInput>
  }

  export type AccessibilityThemeCreateWithoutAccessibilityNeedInput = {
    title: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accessibilityCategory: AccessibilityCategoryCreateNestedOneWithoutThemesInput
  }

  export type AccessibilityThemeUncheckedCreateWithoutAccessibilityNeedInput = {
    id?: number
    accessibilityCategoryId: number
    title: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccessibilityThemeCreateOrConnectWithoutAccessibilityNeedInput = {
    where: AccessibilityThemeWhereUniqueInput
    create: XOR<AccessibilityThemeCreateWithoutAccessibilityNeedInput, AccessibilityThemeUncheckedCreateWithoutAccessibilityNeedInput>
  }

  export type AccessibilityThemeCreateManyAccessibilityNeedInputEnvelope = {
    data: AccessibilityThemeCreateManyAccessibilityNeedInput | AccessibilityThemeCreateManyAccessibilityNeedInput[]
    skipDuplicates?: boolean
  }

  export type AccessibilityCategoryUpsertWithoutNeedsInput = {
    update: XOR<AccessibilityCategoryUpdateWithoutNeedsInput, AccessibilityCategoryUncheckedUpdateWithoutNeedsInput>
    create: XOR<AccessibilityCategoryCreateWithoutNeedsInput, AccessibilityCategoryUncheckedCreateWithoutNeedsInput>
    where?: AccessibilityCategoryWhereInput
  }

  export type AccessibilityCategoryUpdateToOneWithWhereWithoutNeedsInput = {
    where?: AccessibilityCategoryWhereInput
    data: XOR<AccessibilityCategoryUpdateWithoutNeedsInput, AccessibilityCategoryUncheckedUpdateWithoutNeedsInput>
  }

  export type AccessibilityCategoryUpdateWithoutNeedsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryTopics?: AccessibilityCategoryTopicUpdateManyWithoutAccessibilityCategoryNestedInput
    themes?: AccessibilityThemeUpdateManyWithoutAccessibilityCategoryNestedInput
  }

  export type AccessibilityCategoryUncheckedUpdateWithoutNeedsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryTopics?: AccessibilityCategoryTopicUncheckedUpdateManyWithoutAccessibilityCategoryNestedInput
    themes?: AccessibilityThemeUncheckedUpdateManyWithoutAccessibilityCategoryNestedInput
  }

  export type AccessibilityThemeUpsertWithWhereUniqueWithoutAccessibilityNeedInput = {
    where: AccessibilityThemeWhereUniqueInput
    update: XOR<AccessibilityThemeUpdateWithoutAccessibilityNeedInput, AccessibilityThemeUncheckedUpdateWithoutAccessibilityNeedInput>
    create: XOR<AccessibilityThemeCreateWithoutAccessibilityNeedInput, AccessibilityThemeUncheckedCreateWithoutAccessibilityNeedInput>
  }

  export type AccessibilityThemeUpdateWithWhereUniqueWithoutAccessibilityNeedInput = {
    where: AccessibilityThemeWhereUniqueInput
    data: XOR<AccessibilityThemeUpdateWithoutAccessibilityNeedInput, AccessibilityThemeUncheckedUpdateWithoutAccessibilityNeedInput>
  }

  export type AccessibilityThemeUpdateManyWithWhereWithoutAccessibilityNeedInput = {
    where: AccessibilityThemeScalarWhereInput
    data: XOR<AccessibilityThemeUpdateManyMutationInput, AccessibilityThemeUncheckedUpdateManyWithoutAccessibilityNeedInput>
  }

  export type AccessibilityCategoryCreateWithoutThemesInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryTopics?: AccessibilityCategoryTopicCreateNestedManyWithoutAccessibilityCategoryInput
    needs?: AccessibilityNeedCreateNestedManyWithoutAccessibilityCategoryInput
  }

  export type AccessibilityCategoryUncheckedCreateWithoutThemesInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryTopics?: AccessibilityCategoryTopicUncheckedCreateNestedManyWithoutAccessibilityCategoryInput
    needs?: AccessibilityNeedUncheckedCreateNestedManyWithoutAccessibilityCategoryInput
  }

  export type AccessibilityCategoryCreateOrConnectWithoutThemesInput = {
    where: AccessibilityCategoryWhereUniqueInput
    create: XOR<AccessibilityCategoryCreateWithoutThemesInput, AccessibilityCategoryUncheckedCreateWithoutThemesInput>
  }

  export type AccessibilityNeedCreateWithoutThemesInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accessibilityCategory: AccessibilityCategoryCreateNestedOneWithoutNeedsInput
  }

  export type AccessibilityNeedUncheckedCreateWithoutThemesInput = {
    id?: number
    accessibilityCategoryId: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccessibilityNeedCreateOrConnectWithoutThemesInput = {
    where: AccessibilityNeedWhereUniqueInput
    create: XOR<AccessibilityNeedCreateWithoutThemesInput, AccessibilityNeedUncheckedCreateWithoutThemesInput>
  }

  export type AccessibilityCategoryUpsertWithoutThemesInput = {
    update: XOR<AccessibilityCategoryUpdateWithoutThemesInput, AccessibilityCategoryUncheckedUpdateWithoutThemesInput>
    create: XOR<AccessibilityCategoryCreateWithoutThemesInput, AccessibilityCategoryUncheckedCreateWithoutThemesInput>
    where?: AccessibilityCategoryWhereInput
  }

  export type AccessibilityCategoryUpdateToOneWithWhereWithoutThemesInput = {
    where?: AccessibilityCategoryWhereInput
    data: XOR<AccessibilityCategoryUpdateWithoutThemesInput, AccessibilityCategoryUncheckedUpdateWithoutThemesInput>
  }

  export type AccessibilityCategoryUpdateWithoutThemesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryTopics?: AccessibilityCategoryTopicUpdateManyWithoutAccessibilityCategoryNestedInput
    needs?: AccessibilityNeedUpdateManyWithoutAccessibilityCategoryNestedInput
  }

  export type AccessibilityCategoryUncheckedUpdateWithoutThemesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryTopics?: AccessibilityCategoryTopicUncheckedUpdateManyWithoutAccessibilityCategoryNestedInput
    needs?: AccessibilityNeedUncheckedUpdateManyWithoutAccessibilityCategoryNestedInput
  }

  export type AccessibilityNeedUpsertWithoutThemesInput = {
    update: XOR<AccessibilityNeedUpdateWithoutThemesInput, AccessibilityNeedUncheckedUpdateWithoutThemesInput>
    create: XOR<AccessibilityNeedCreateWithoutThemesInput, AccessibilityNeedUncheckedCreateWithoutThemesInput>
    where?: AccessibilityNeedWhereInput
  }

  export type AccessibilityNeedUpdateToOneWithWhereWithoutThemesInput = {
    where?: AccessibilityNeedWhereInput
    data: XOR<AccessibilityNeedUpdateWithoutThemesInput, AccessibilityNeedUncheckedUpdateWithoutThemesInput>
  }

  export type AccessibilityNeedUpdateWithoutThemesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessibilityCategory?: AccessibilityCategoryUpdateOneRequiredWithoutNeedsNestedInput
  }

  export type AccessibilityNeedUncheckedUpdateWithoutThemesInput = {
    id?: IntFieldUpdateOperationsInput | number
    accessibilityCategoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistCreateManyUserInput = {
    id?: number
    contentId: number
    createdAt?: Date | string
  }

  export type ChecklistUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateOneRequiredWithoutChecklistsNestedInput
  }

  export type ChecklistUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    contentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    contentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectCreateManySeriesInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubjectUpdateWithoutSeriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topicSubjects?: TopicSubjectUpdateManyWithoutSubjectNestedInput
    vestibularSubjects?: VestibularSubjectUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutSeriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topicSubjects?: TopicSubjectUncheckedUpdateManyWithoutSubjectNestedInput
    vestibularSubjects?: VestibularSubjectUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateManyWithoutSeriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicSubjectCreateManySubjectInput = {
    topicId: number
  }

  export type VestibularSubjectCreateManySubjectInput = {
    vestibularId: number
  }

  export type TopicSubjectUpdateWithoutSubjectInput = {
    topic?: TopicUpdateOneRequiredWithoutTopicSubjectsNestedInput
  }

  export type TopicSubjectUncheckedUpdateWithoutSubjectInput = {
    topicId?: IntFieldUpdateOperationsInput | number
  }

  export type TopicSubjectUncheckedUpdateManyWithoutSubjectInput = {
    topicId?: IntFieldUpdateOperationsInput | number
  }

  export type VestibularSubjectUpdateWithoutSubjectInput = {
    vestibular?: VestibularUpdateOneRequiredWithoutVestibularSubjectsNestedInput
  }

  export type VestibularSubjectUncheckedUpdateWithoutSubjectInput = {
    vestibularId?: IntFieldUpdateOperationsInput | number
  }

  export type VestibularSubjectUncheckedUpdateManyWithoutSubjectInput = {
    vestibularId?: IntFieldUpdateOperationsInput | number
  }

  export type ContentCreateManyTopicInput = {
    id?: number
    title: string
    type: string
    link: string
    thumbnailUrl: string
    pdfUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TopicSubjectCreateManyTopicInput = {
    subjectId: number
  }

  export type AccessibilityCategoryTopicCreateManyTopicInput = {
    accessibilityCategoryId: number
  }

  export type ContentUpdateWithoutTopicInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checklists?: ChecklistUpdateManyWithoutContentNestedInput
    vestibularContents?: VestibularContentUpdateManyWithoutOriginalContentNestedInput
  }

  export type ContentUncheckedUpdateWithoutTopicInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checklists?: ChecklistUncheckedUpdateManyWithoutContentNestedInput
    vestibularContents?: VestibularContentUncheckedUpdateManyWithoutOriginalContentNestedInput
  }

  export type ContentUncheckedUpdateManyWithoutTopicInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicSubjectUpdateWithoutTopicInput = {
    subject?: SubjectUpdateOneRequiredWithoutTopicSubjectsNestedInput
  }

  export type TopicSubjectUncheckedUpdateWithoutTopicInput = {
    subjectId?: IntFieldUpdateOperationsInput | number
  }

  export type TopicSubjectUncheckedUpdateManyWithoutTopicInput = {
    subjectId?: IntFieldUpdateOperationsInput | number
  }

  export type AccessibilityCategoryTopicUpdateWithoutTopicInput = {
    accessibilityCategory?: AccessibilityCategoryUpdateOneRequiredWithoutCategoryTopicsNestedInput
  }

  export type AccessibilityCategoryTopicUncheckedUpdateWithoutTopicInput = {
    accessibilityCategoryId?: IntFieldUpdateOperationsInput | number
  }

  export type AccessibilityCategoryTopicUncheckedUpdateManyWithoutTopicInput = {
    accessibilityCategoryId?: IntFieldUpdateOperationsInput | number
  }

  export type ChecklistCreateManyContentInput = {
    id?: number
    userId: string
    createdAt?: Date | string
  }

  export type VestibularContentCreateManyOriginalContentInput = {
    id?: number
    vestibularId: number
    title: string
    type?: string | null
    link?: string | null
    pdfUrl?: string | null
    isShared?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChecklistUpdateWithoutContentInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChecklistsNestedInput
  }

  export type ChecklistUncheckedUpdateWithoutContentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistUncheckedUpdateManyWithoutContentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VestibularContentUpdateWithoutOriginalContentInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isShared?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vestibular?: VestibularUpdateOneRequiredWithoutContentsNestedInput
  }

  export type VestibularContentUncheckedUpdateWithoutOriginalContentInput = {
    id?: IntFieldUpdateOperationsInput | number
    vestibularId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isShared?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VestibularContentUncheckedUpdateManyWithoutOriginalContentInput = {
    id?: IntFieldUpdateOperationsInput | number
    vestibularId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isShared?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VestibularSubjectCreateManyVestibularInput = {
    subjectId: number
  }

  export type VestibularContentCreateManyVestibularInput = {
    id?: number
    title: string
    type?: string | null
    link?: string | null
    pdfUrl?: string | null
    isShared?: boolean
    originalContentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VestibularTopicCreateManyVestibularInput = {
    id?: number
    name: string
    originalTopicId?: number | null
    isShared?: boolean
    notes?: string | null
    tags?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VestibularSubjectUpdateWithoutVestibularInput = {
    subject?: SubjectUpdateOneRequiredWithoutVestibularSubjectsNestedInput
  }

  export type VestibularSubjectUncheckedUpdateWithoutVestibularInput = {
    subjectId?: IntFieldUpdateOperationsInput | number
  }

  export type VestibularSubjectUncheckedUpdateManyWithoutVestibularInput = {
    subjectId?: IntFieldUpdateOperationsInput | number
  }

  export type VestibularContentUpdateWithoutVestibularInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isShared?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalContent?: ContentUpdateOneWithoutVestibularContentsNestedInput
  }

  export type VestibularContentUncheckedUpdateWithoutVestibularInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isShared?: BoolFieldUpdateOperationsInput | boolean
    originalContentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VestibularContentUncheckedUpdateManyWithoutVestibularInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isShared?: BoolFieldUpdateOperationsInput | boolean
    originalContentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VestibularTopicUpdateWithoutVestibularInput = {
    name?: StringFieldUpdateOperationsInput | string
    originalTopicId?: NullableIntFieldUpdateOperationsInput | number | null
    isShared?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VestibularTopicUncheckedUpdateWithoutVestibularInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    originalTopicId?: NullableIntFieldUpdateOperationsInput | number | null
    isShared?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VestibularTopicUncheckedUpdateManyWithoutVestibularInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    originalTopicId?: NullableIntFieldUpdateOperationsInput | number | null
    isShared?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessibilityCategoryTopicCreateManyAccessibilityCategoryInput = {
    topicId: number
  }

  export type AccessibilityNeedCreateManyAccessibilityCategoryInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccessibilityThemeCreateManyAccessibilityCategoryInput = {
    id?: number
    accessibilityNeedId?: number | null
    title: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccessibilityCategoryTopicUpdateWithoutAccessibilityCategoryInput = {
    topic?: TopicUpdateOneRequiredWithoutAccessibilityCategoryTopicsNestedInput
  }

  export type AccessibilityCategoryTopicUncheckedUpdateWithoutAccessibilityCategoryInput = {
    topicId?: IntFieldUpdateOperationsInput | number
  }

  export type AccessibilityCategoryTopicUncheckedUpdateManyWithoutAccessibilityCategoryInput = {
    topicId?: IntFieldUpdateOperationsInput | number
  }

  export type AccessibilityNeedUpdateWithoutAccessibilityCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    themes?: AccessibilityThemeUpdateManyWithoutAccessibilityNeedNestedInput
  }

  export type AccessibilityNeedUncheckedUpdateWithoutAccessibilityCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    themes?: AccessibilityThemeUncheckedUpdateManyWithoutAccessibilityNeedNestedInput
  }

  export type AccessibilityNeedUncheckedUpdateManyWithoutAccessibilityCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessibilityThemeUpdateWithoutAccessibilityCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessibilityNeed?: AccessibilityNeedUpdateOneWithoutThemesNestedInput
  }

  export type AccessibilityThemeUncheckedUpdateWithoutAccessibilityCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    accessibilityNeedId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessibilityThemeUncheckedUpdateManyWithoutAccessibilityCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    accessibilityNeedId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessibilityThemeCreateManyAccessibilityNeedInput = {
    id?: number
    accessibilityCategoryId: number
    title: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccessibilityThemeUpdateWithoutAccessibilityNeedInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessibilityCategory?: AccessibilityCategoryUpdateOneRequiredWithoutThemesNestedInput
  }

  export type AccessibilityThemeUncheckedUpdateWithoutAccessibilityNeedInput = {
    id?: IntFieldUpdateOperationsInput | number
    accessibilityCategoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessibilityThemeUncheckedUpdateManyWithoutAccessibilityNeedInput = {
    id?: IntFieldUpdateOperationsInput | number
    accessibilityCategoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}