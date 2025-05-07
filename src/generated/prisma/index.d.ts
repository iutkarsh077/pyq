
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model paperSchema
 * 
 */
export type paperSchema = $Result.DefaultSelection<Prisma.$paperSchemaPayload>
/**
 * Model questions
 * 
 */
export type questions = $Result.DefaultSelection<Prisma.$questionsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PaperSchemas
 * const paperSchemas = await prisma.paperSchema.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more PaperSchemas
   * const paperSchemas = await prisma.paperSchema.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.paperSchema`: Exposes CRUD operations for the **paperSchema** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaperSchemas
    * const paperSchemas = await prisma.paperSchema.findMany()
    * ```
    */
  get paperSchema(): Prisma.paperSchemaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questions`: Exposes CRUD operations for the **questions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.questions.findMany()
    * ```
    */
  get questions(): Prisma.questionsDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    paperSchema: 'paperSchema',
    questions: 'questions'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "paperSchema" | "questions"
      txIsolationLevel: never
    }
    model: {
      paperSchema: {
        payload: Prisma.$paperSchemaPayload<ExtArgs>
        fields: Prisma.paperSchemaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paperSchemaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paperSchemaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paperSchemaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paperSchemaPayload>
          }
          findFirst: {
            args: Prisma.paperSchemaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paperSchemaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paperSchemaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paperSchemaPayload>
          }
          findMany: {
            args: Prisma.paperSchemaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paperSchemaPayload>[]
          }
          create: {
            args: Prisma.paperSchemaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paperSchemaPayload>
          }
          createMany: {
            args: Prisma.paperSchemaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.paperSchemaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paperSchemaPayload>
          }
          update: {
            args: Prisma.paperSchemaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paperSchemaPayload>
          }
          deleteMany: {
            args: Prisma.paperSchemaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paperSchemaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.paperSchemaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paperSchemaPayload>
          }
          aggregate: {
            args: Prisma.PaperSchemaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaperSchema>
          }
          groupBy: {
            args: Prisma.paperSchemaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaperSchemaGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.paperSchemaFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.paperSchemaAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.paperSchemaCountArgs<ExtArgs>
            result: $Utils.Optional<PaperSchemaCountAggregateOutputType> | number
          }
        }
      }
      questions: {
        payload: Prisma.$questionsPayload<ExtArgs>
        fields: Prisma.questionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.questionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.questionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          findFirst: {
            args: Prisma.questionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.questionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          findMany: {
            args: Prisma.questionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>[]
          }
          create: {
            args: Prisma.questionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          createMany: {
            args: Prisma.questionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.questionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          update: {
            args: Prisma.questionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          deleteMany: {
            args: Prisma.questionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.questionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.questionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          aggregate: {
            args: Prisma.QuestionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestions>
          }
          groupBy: {
            args: Prisma.questionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.questionsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.questionsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.questionsCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    }
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
  }
  export type GlobalOmitConfig = {
    paperSchema?: paperSchemaOmit
    questions?: questionsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model paperSchema
   */

  export type AggregatePaperSchema = {
    _count: PaperSchemaCountAggregateOutputType | null
    _avg: PaperSchemaAvgAggregateOutputType | null
    _sum: PaperSchemaSumAggregateOutputType | null
    _min: PaperSchemaMinAggregateOutputType | null
    _max: PaperSchemaMaxAggregateOutputType | null
  }

  export type PaperSchemaAvgAggregateOutputType = {
    year: number | null
    semester: number | null
  }

  export type PaperSchemaSumAggregateOutputType = {
    year: number | null
    semester: number | null
  }

  export type PaperSchemaMinAggregateOutputType = {
    id: string | null
    pdfName: string | null
    university: string | null
    subject: string | null
    subjectCode: string | null
    category: string | null
    year: number | null
    semester: number | null
    department: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaperSchemaMaxAggregateOutputType = {
    id: string | null
    pdfName: string | null
    university: string | null
    subject: string | null
    subjectCode: string | null
    category: string | null
    year: number | null
    semester: number | null
    department: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaperSchemaCountAggregateOutputType = {
    id: number
    pdfName: number
    university: number
    subject: number
    subjectCode: number
    category: number
    year: number
    semester: number
    department: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaperSchemaAvgAggregateInputType = {
    year?: true
    semester?: true
  }

  export type PaperSchemaSumAggregateInputType = {
    year?: true
    semester?: true
  }

  export type PaperSchemaMinAggregateInputType = {
    id?: true
    pdfName?: true
    university?: true
    subject?: true
    subjectCode?: true
    category?: true
    year?: true
    semester?: true
    department?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaperSchemaMaxAggregateInputType = {
    id?: true
    pdfName?: true
    university?: true
    subject?: true
    subjectCode?: true
    category?: true
    year?: true
    semester?: true
    department?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaperSchemaCountAggregateInputType = {
    id?: true
    pdfName?: true
    university?: true
    subject?: true
    subjectCode?: true
    category?: true
    year?: true
    semester?: true
    department?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaperSchemaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which paperSchema to aggregate.
     */
    where?: paperSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paperSchemas to fetch.
     */
    orderBy?: paperSchemaOrderByWithRelationInput | paperSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paperSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paperSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paperSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned paperSchemas
    **/
    _count?: true | PaperSchemaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaperSchemaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaperSchemaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaperSchemaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaperSchemaMaxAggregateInputType
  }

  export type GetPaperSchemaAggregateType<T extends PaperSchemaAggregateArgs> = {
        [P in keyof T & keyof AggregatePaperSchema]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaperSchema[P]>
      : GetScalarType<T[P], AggregatePaperSchema[P]>
  }




  export type paperSchemaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paperSchemaWhereInput
    orderBy?: paperSchemaOrderByWithAggregationInput | paperSchemaOrderByWithAggregationInput[]
    by: PaperSchemaScalarFieldEnum[] | PaperSchemaScalarFieldEnum
    having?: paperSchemaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaperSchemaCountAggregateInputType | true
    _avg?: PaperSchemaAvgAggregateInputType
    _sum?: PaperSchemaSumAggregateInputType
    _min?: PaperSchemaMinAggregateInputType
    _max?: PaperSchemaMaxAggregateInputType
  }

  export type PaperSchemaGroupByOutputType = {
    id: string
    pdfName: string
    university: string
    subject: string
    subjectCode: string
    category: string
    year: number
    semester: number
    department: string
    createdAt: Date
    updatedAt: Date
    _count: PaperSchemaCountAggregateOutputType | null
    _avg: PaperSchemaAvgAggregateOutputType | null
    _sum: PaperSchemaSumAggregateOutputType | null
    _min: PaperSchemaMinAggregateOutputType | null
    _max: PaperSchemaMaxAggregateOutputType | null
  }

  type GetPaperSchemaGroupByPayload<T extends paperSchemaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaperSchemaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaperSchemaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaperSchemaGroupByOutputType[P]>
            : GetScalarType<T[P], PaperSchemaGroupByOutputType[P]>
        }
      >
    >


  export type paperSchemaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pdfName?: boolean
    university?: boolean
    subject?: boolean
    subjectCode?: boolean
    category?: boolean
    year?: boolean
    semester?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["paperSchema"]>



  export type paperSchemaSelectScalar = {
    id?: boolean
    pdfName?: boolean
    university?: boolean
    subject?: boolean
    subjectCode?: boolean
    category?: boolean
    year?: boolean
    semester?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type paperSchemaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pdfName" | "university" | "subject" | "subjectCode" | "category" | "year" | "semester" | "department" | "createdAt" | "updatedAt", ExtArgs["result"]["paperSchema"]>

  export type $paperSchemaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "paperSchema"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pdfName: string
      university: string
      subject: string
      subjectCode: string
      category: string
      year: number
      semester: number
      department: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paperSchema"]>
    composites: {}
  }

  type paperSchemaGetPayload<S extends boolean | null | undefined | paperSchemaDefaultArgs> = $Result.GetResult<Prisma.$paperSchemaPayload, S>

  type paperSchemaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paperSchemaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaperSchemaCountAggregateInputType | true
    }

  export interface paperSchemaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['paperSchema'], meta: { name: 'paperSchema' } }
    /**
     * Find zero or one PaperSchema that matches the filter.
     * @param {paperSchemaFindUniqueArgs} args - Arguments to find a PaperSchema
     * @example
     * // Get one PaperSchema
     * const paperSchema = await prisma.paperSchema.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paperSchemaFindUniqueArgs>(args: SelectSubset<T, paperSchemaFindUniqueArgs<ExtArgs>>): Prisma__paperSchemaClient<$Result.GetResult<Prisma.$paperSchemaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaperSchema that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paperSchemaFindUniqueOrThrowArgs} args - Arguments to find a PaperSchema
     * @example
     * // Get one PaperSchema
     * const paperSchema = await prisma.paperSchema.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paperSchemaFindUniqueOrThrowArgs>(args: SelectSubset<T, paperSchemaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paperSchemaClient<$Result.GetResult<Prisma.$paperSchemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaperSchema that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paperSchemaFindFirstArgs} args - Arguments to find a PaperSchema
     * @example
     * // Get one PaperSchema
     * const paperSchema = await prisma.paperSchema.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paperSchemaFindFirstArgs>(args?: SelectSubset<T, paperSchemaFindFirstArgs<ExtArgs>>): Prisma__paperSchemaClient<$Result.GetResult<Prisma.$paperSchemaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaperSchema that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paperSchemaFindFirstOrThrowArgs} args - Arguments to find a PaperSchema
     * @example
     * // Get one PaperSchema
     * const paperSchema = await prisma.paperSchema.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paperSchemaFindFirstOrThrowArgs>(args?: SelectSubset<T, paperSchemaFindFirstOrThrowArgs<ExtArgs>>): Prisma__paperSchemaClient<$Result.GetResult<Prisma.$paperSchemaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaperSchemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paperSchemaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaperSchemas
     * const paperSchemas = await prisma.paperSchema.findMany()
     * 
     * // Get first 10 PaperSchemas
     * const paperSchemas = await prisma.paperSchema.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paperSchemaWithIdOnly = await prisma.paperSchema.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends paperSchemaFindManyArgs>(args?: SelectSubset<T, paperSchemaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paperSchemaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaperSchema.
     * @param {paperSchemaCreateArgs} args - Arguments to create a PaperSchema.
     * @example
     * // Create one PaperSchema
     * const PaperSchema = await prisma.paperSchema.create({
     *   data: {
     *     // ... data to create a PaperSchema
     *   }
     * })
     * 
     */
    create<T extends paperSchemaCreateArgs>(args: SelectSubset<T, paperSchemaCreateArgs<ExtArgs>>): Prisma__paperSchemaClient<$Result.GetResult<Prisma.$paperSchemaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaperSchemas.
     * @param {paperSchemaCreateManyArgs} args - Arguments to create many PaperSchemas.
     * @example
     * // Create many PaperSchemas
     * const paperSchema = await prisma.paperSchema.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paperSchemaCreateManyArgs>(args?: SelectSubset<T, paperSchemaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PaperSchema.
     * @param {paperSchemaDeleteArgs} args - Arguments to delete one PaperSchema.
     * @example
     * // Delete one PaperSchema
     * const PaperSchema = await prisma.paperSchema.delete({
     *   where: {
     *     // ... filter to delete one PaperSchema
     *   }
     * })
     * 
     */
    delete<T extends paperSchemaDeleteArgs>(args: SelectSubset<T, paperSchemaDeleteArgs<ExtArgs>>): Prisma__paperSchemaClient<$Result.GetResult<Prisma.$paperSchemaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaperSchema.
     * @param {paperSchemaUpdateArgs} args - Arguments to update one PaperSchema.
     * @example
     * // Update one PaperSchema
     * const paperSchema = await prisma.paperSchema.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paperSchemaUpdateArgs>(args: SelectSubset<T, paperSchemaUpdateArgs<ExtArgs>>): Prisma__paperSchemaClient<$Result.GetResult<Prisma.$paperSchemaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaperSchemas.
     * @param {paperSchemaDeleteManyArgs} args - Arguments to filter PaperSchemas to delete.
     * @example
     * // Delete a few PaperSchemas
     * const { count } = await prisma.paperSchema.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paperSchemaDeleteManyArgs>(args?: SelectSubset<T, paperSchemaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaperSchemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paperSchemaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaperSchemas
     * const paperSchema = await prisma.paperSchema.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paperSchemaUpdateManyArgs>(args: SelectSubset<T, paperSchemaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaperSchema.
     * @param {paperSchemaUpsertArgs} args - Arguments to update or create a PaperSchema.
     * @example
     * // Update or create a PaperSchema
     * const paperSchema = await prisma.paperSchema.upsert({
     *   create: {
     *     // ... data to create a PaperSchema
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaperSchema we want to update
     *   }
     * })
     */
    upsert<T extends paperSchemaUpsertArgs>(args: SelectSubset<T, paperSchemaUpsertArgs<ExtArgs>>): Prisma__paperSchemaClient<$Result.GetResult<Prisma.$paperSchemaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaperSchemas that matches the filter.
     * @param {paperSchemaFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const paperSchema = await prisma.paperSchema.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: paperSchemaFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a PaperSchema.
     * @param {paperSchemaAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const paperSchema = await prisma.paperSchema.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: paperSchemaAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of PaperSchemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paperSchemaCountArgs} args - Arguments to filter PaperSchemas to count.
     * @example
     * // Count the number of PaperSchemas
     * const count = await prisma.paperSchema.count({
     *   where: {
     *     // ... the filter for the PaperSchemas we want to count
     *   }
     * })
    **/
    count<T extends paperSchemaCountArgs>(
      args?: Subset<T, paperSchemaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaperSchemaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaperSchema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaperSchemaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaperSchemaAggregateArgs>(args: Subset<T, PaperSchemaAggregateArgs>): Prisma.PrismaPromise<GetPaperSchemaAggregateType<T>>

    /**
     * Group by PaperSchema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paperSchemaGroupByArgs} args - Group by arguments.
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
      T extends paperSchemaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paperSchemaGroupByArgs['orderBy'] }
        : { orderBy?: paperSchemaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, paperSchemaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaperSchemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the paperSchema model
   */
  readonly fields: paperSchemaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for paperSchema.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paperSchemaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the paperSchema model
   */
  interface paperSchemaFieldRefs {
    readonly id: FieldRef<"paperSchema", 'String'>
    readonly pdfName: FieldRef<"paperSchema", 'String'>
    readonly university: FieldRef<"paperSchema", 'String'>
    readonly subject: FieldRef<"paperSchema", 'String'>
    readonly subjectCode: FieldRef<"paperSchema", 'String'>
    readonly category: FieldRef<"paperSchema", 'String'>
    readonly year: FieldRef<"paperSchema", 'Int'>
    readonly semester: FieldRef<"paperSchema", 'Int'>
    readonly department: FieldRef<"paperSchema", 'String'>
    readonly createdAt: FieldRef<"paperSchema", 'DateTime'>
    readonly updatedAt: FieldRef<"paperSchema", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * paperSchema findUnique
   */
  export type paperSchemaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paperSchema
     */
    select?: paperSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paperSchema
     */
    omit?: paperSchemaOmit<ExtArgs> | null
    /**
     * Filter, which paperSchema to fetch.
     */
    where: paperSchemaWhereUniqueInput
  }

  /**
   * paperSchema findUniqueOrThrow
   */
  export type paperSchemaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paperSchema
     */
    select?: paperSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paperSchema
     */
    omit?: paperSchemaOmit<ExtArgs> | null
    /**
     * Filter, which paperSchema to fetch.
     */
    where: paperSchemaWhereUniqueInput
  }

  /**
   * paperSchema findFirst
   */
  export type paperSchemaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paperSchema
     */
    select?: paperSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paperSchema
     */
    omit?: paperSchemaOmit<ExtArgs> | null
    /**
     * Filter, which paperSchema to fetch.
     */
    where?: paperSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paperSchemas to fetch.
     */
    orderBy?: paperSchemaOrderByWithRelationInput | paperSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for paperSchemas.
     */
    cursor?: paperSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paperSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paperSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of paperSchemas.
     */
    distinct?: PaperSchemaScalarFieldEnum | PaperSchemaScalarFieldEnum[]
  }

  /**
   * paperSchema findFirstOrThrow
   */
  export type paperSchemaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paperSchema
     */
    select?: paperSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paperSchema
     */
    omit?: paperSchemaOmit<ExtArgs> | null
    /**
     * Filter, which paperSchema to fetch.
     */
    where?: paperSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paperSchemas to fetch.
     */
    orderBy?: paperSchemaOrderByWithRelationInput | paperSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for paperSchemas.
     */
    cursor?: paperSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paperSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paperSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of paperSchemas.
     */
    distinct?: PaperSchemaScalarFieldEnum | PaperSchemaScalarFieldEnum[]
  }

  /**
   * paperSchema findMany
   */
  export type paperSchemaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paperSchema
     */
    select?: paperSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paperSchema
     */
    omit?: paperSchemaOmit<ExtArgs> | null
    /**
     * Filter, which paperSchemas to fetch.
     */
    where?: paperSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paperSchemas to fetch.
     */
    orderBy?: paperSchemaOrderByWithRelationInput | paperSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing paperSchemas.
     */
    cursor?: paperSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paperSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paperSchemas.
     */
    skip?: number
    distinct?: PaperSchemaScalarFieldEnum | PaperSchemaScalarFieldEnum[]
  }

  /**
   * paperSchema create
   */
  export type paperSchemaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paperSchema
     */
    select?: paperSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paperSchema
     */
    omit?: paperSchemaOmit<ExtArgs> | null
    /**
     * The data needed to create a paperSchema.
     */
    data: XOR<paperSchemaCreateInput, paperSchemaUncheckedCreateInput>
  }

  /**
   * paperSchema createMany
   */
  export type paperSchemaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many paperSchemas.
     */
    data: paperSchemaCreateManyInput | paperSchemaCreateManyInput[]
  }

  /**
   * paperSchema update
   */
  export type paperSchemaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paperSchema
     */
    select?: paperSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paperSchema
     */
    omit?: paperSchemaOmit<ExtArgs> | null
    /**
     * The data needed to update a paperSchema.
     */
    data: XOR<paperSchemaUpdateInput, paperSchemaUncheckedUpdateInput>
    /**
     * Choose, which paperSchema to update.
     */
    where: paperSchemaWhereUniqueInput
  }

  /**
   * paperSchema updateMany
   */
  export type paperSchemaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update paperSchemas.
     */
    data: XOR<paperSchemaUpdateManyMutationInput, paperSchemaUncheckedUpdateManyInput>
    /**
     * Filter which paperSchemas to update
     */
    where?: paperSchemaWhereInput
    /**
     * Limit how many paperSchemas to update.
     */
    limit?: number
  }

  /**
   * paperSchema upsert
   */
  export type paperSchemaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paperSchema
     */
    select?: paperSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paperSchema
     */
    omit?: paperSchemaOmit<ExtArgs> | null
    /**
     * The filter to search for the paperSchema to update in case it exists.
     */
    where: paperSchemaWhereUniqueInput
    /**
     * In case the paperSchema found by the `where` argument doesn't exist, create a new paperSchema with this data.
     */
    create: XOR<paperSchemaCreateInput, paperSchemaUncheckedCreateInput>
    /**
     * In case the paperSchema was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paperSchemaUpdateInput, paperSchemaUncheckedUpdateInput>
  }

  /**
   * paperSchema delete
   */
  export type paperSchemaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paperSchema
     */
    select?: paperSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paperSchema
     */
    omit?: paperSchemaOmit<ExtArgs> | null
    /**
     * Filter which paperSchema to delete.
     */
    where: paperSchemaWhereUniqueInput
  }

  /**
   * paperSchema deleteMany
   */
  export type paperSchemaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which paperSchemas to delete
     */
    where?: paperSchemaWhereInput
    /**
     * Limit how many paperSchemas to delete.
     */
    limit?: number
  }

  /**
   * paperSchema findRaw
   */
  export type paperSchemaFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * paperSchema aggregateRaw
   */
  export type paperSchemaAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * paperSchema without action
   */
  export type paperSchemaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paperSchema
     */
    select?: paperSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paperSchema
     */
    omit?: paperSchemaOmit<ExtArgs> | null
  }


  /**
   * Model questions
   */

  export type AggregateQuestions = {
    _count: QuestionsCountAggregateOutputType | null
    _min: QuestionsMinAggregateOutputType | null
    _max: QuestionsMaxAggregateOutputType | null
  }

  export type QuestionsMinAggregateOutputType = {
    id: string | null
    questions: string | null
    subject: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionsMaxAggregateOutputType = {
    id: string | null
    questions: string | null
    subject: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionsCountAggregateOutputType = {
    id: number
    questions: number
    subject: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestionsMinAggregateInputType = {
    id?: true
    questions?: true
    subject?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionsMaxAggregateInputType = {
    id?: true
    questions?: true
    subject?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionsCountAggregateInputType = {
    id?: true
    questions?: true
    subject?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which questions to aggregate.
     */
    where?: questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned questions
    **/
    _count?: true | QuestionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionsMaxAggregateInputType
  }

  export type GetQuestionsAggregateType<T extends QuestionsAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestions[P]>
      : GetScalarType<T[P], AggregateQuestions[P]>
  }




  export type questionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: questionsWhereInput
    orderBy?: questionsOrderByWithAggregationInput | questionsOrderByWithAggregationInput[]
    by: QuestionsScalarFieldEnum[] | QuestionsScalarFieldEnum
    having?: questionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionsCountAggregateInputType | true
    _min?: QuestionsMinAggregateInputType
    _max?: QuestionsMaxAggregateInputType
  }

  export type QuestionsGroupByOutputType = {
    id: string
    questions: string
    subject: string
    createdAt: Date
    updatedAt: Date
    _count: QuestionsCountAggregateOutputType | null
    _min: QuestionsMinAggregateOutputType | null
    _max: QuestionsMaxAggregateOutputType | null
  }

  type GetQuestionsGroupByPayload<T extends questionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionsGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionsGroupByOutputType[P]>
        }
      >
    >


  export type questionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questions?: boolean
    subject?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["questions"]>



  export type questionsSelectScalar = {
    id?: boolean
    questions?: boolean
    subject?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type questionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "questions" | "subject" | "createdAt" | "updatedAt", ExtArgs["result"]["questions"]>

  export type $questionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "questions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      questions: string
      subject: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["questions"]>
    composites: {}
  }

  type questionsGetPayload<S extends boolean | null | undefined | questionsDefaultArgs> = $Result.GetResult<Prisma.$questionsPayload, S>

  type questionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<questionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionsCountAggregateInputType | true
    }

  export interface questionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['questions'], meta: { name: 'questions' } }
    /**
     * Find zero or one Questions that matches the filter.
     * @param {questionsFindUniqueArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends questionsFindUniqueArgs>(args: SelectSubset<T, questionsFindUniqueArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Questions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {questionsFindUniqueOrThrowArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends questionsFindUniqueOrThrowArgs>(args: SelectSubset<T, questionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsFindFirstArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends questionsFindFirstArgs>(args?: SelectSubset<T, questionsFindFirstArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Questions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsFindFirstOrThrowArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends questionsFindFirstOrThrowArgs>(args?: SelectSubset<T, questionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.questions.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.questions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionsWithIdOnly = await prisma.questions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends questionsFindManyArgs>(args?: SelectSubset<T, questionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Questions.
     * @param {questionsCreateArgs} args - Arguments to create a Questions.
     * @example
     * // Create one Questions
     * const Questions = await prisma.questions.create({
     *   data: {
     *     // ... data to create a Questions
     *   }
     * })
     * 
     */
    create<T extends questionsCreateArgs>(args: SelectSubset<T, questionsCreateArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {questionsCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const questions = await prisma.questions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends questionsCreateManyArgs>(args?: SelectSubset<T, questionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Questions.
     * @param {questionsDeleteArgs} args - Arguments to delete one Questions.
     * @example
     * // Delete one Questions
     * const Questions = await prisma.questions.delete({
     *   where: {
     *     // ... filter to delete one Questions
     *   }
     * })
     * 
     */
    delete<T extends questionsDeleteArgs>(args: SelectSubset<T, questionsDeleteArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Questions.
     * @param {questionsUpdateArgs} args - Arguments to update one Questions.
     * @example
     * // Update one Questions
     * const questions = await prisma.questions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends questionsUpdateArgs>(args: SelectSubset<T, questionsUpdateArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {questionsDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.questions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends questionsDeleteManyArgs>(args?: SelectSubset<T, questionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const questions = await prisma.questions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends questionsUpdateManyArgs>(args: SelectSubset<T, questionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Questions.
     * @param {questionsUpsertArgs} args - Arguments to update or create a Questions.
     * @example
     * // Update or create a Questions
     * const questions = await prisma.questions.upsert({
     *   create: {
     *     // ... data to create a Questions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Questions we want to update
     *   }
     * })
     */
    upsert<T extends questionsUpsertArgs>(args: SelectSubset<T, questionsUpsertArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * @param {questionsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const questions = await prisma.questions.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: questionsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Questions.
     * @param {questionsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const questions = await prisma.questions.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: questionsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.questions.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends questionsCountArgs>(
      args?: Subset<T, questionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionsAggregateArgs>(args: Subset<T, QuestionsAggregateArgs>): Prisma.PrismaPromise<GetQuestionsAggregateType<T>>

    /**
     * Group by Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsGroupByArgs} args - Group by arguments.
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
      T extends questionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: questionsGroupByArgs['orderBy'] }
        : { orderBy?: questionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, questionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the questions model
   */
  readonly fields: questionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for questions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__questionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the questions model
   */
  interface questionsFieldRefs {
    readonly id: FieldRef<"questions", 'String'>
    readonly questions: FieldRef<"questions", 'String'>
    readonly subject: FieldRef<"questions", 'String'>
    readonly createdAt: FieldRef<"questions", 'DateTime'>
    readonly updatedAt: FieldRef<"questions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * questions findUnique
   */
  export type questionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where: questionsWhereUniqueInput
  }

  /**
   * questions findUniqueOrThrow
   */
  export type questionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where: questionsWhereUniqueInput
  }

  /**
   * questions findFirst
   */
  export type questionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where?: questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for questions.
     */
    cursor?: questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of questions.
     */
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * questions findFirstOrThrow
   */
  export type questionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where?: questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for questions.
     */
    cursor?: questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of questions.
     */
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * questions findMany
   */
  export type questionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where?: questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing questions.
     */
    cursor?: questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * questions create
   */
  export type questionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * The data needed to create a questions.
     */
    data: XOR<questionsCreateInput, questionsUncheckedCreateInput>
  }

  /**
   * questions createMany
   */
  export type questionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many questions.
     */
    data: questionsCreateManyInput | questionsCreateManyInput[]
  }

  /**
   * questions update
   */
  export type questionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * The data needed to update a questions.
     */
    data: XOR<questionsUpdateInput, questionsUncheckedUpdateInput>
    /**
     * Choose, which questions to update.
     */
    where: questionsWhereUniqueInput
  }

  /**
   * questions updateMany
   */
  export type questionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update questions.
     */
    data: XOR<questionsUpdateManyMutationInput, questionsUncheckedUpdateManyInput>
    /**
     * Filter which questions to update
     */
    where?: questionsWhereInput
    /**
     * Limit how many questions to update.
     */
    limit?: number
  }

  /**
   * questions upsert
   */
  export type questionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * The filter to search for the questions to update in case it exists.
     */
    where: questionsWhereUniqueInput
    /**
     * In case the questions found by the `where` argument doesn't exist, create a new questions with this data.
     */
    create: XOR<questionsCreateInput, questionsUncheckedCreateInput>
    /**
     * In case the questions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<questionsUpdateInput, questionsUncheckedUpdateInput>
  }

  /**
   * questions delete
   */
  export type questionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Filter which questions to delete.
     */
    where: questionsWhereUniqueInput
  }

  /**
   * questions deleteMany
   */
  export type questionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which questions to delete
     */
    where?: questionsWhereInput
    /**
     * Limit how many questions to delete.
     */
    limit?: number
  }

  /**
   * questions findRaw
   */
  export type questionsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * questions aggregateRaw
   */
  export type questionsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * questions without action
   */
  export type questionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const PaperSchemaScalarFieldEnum: {
    id: 'id',
    pdfName: 'pdfName',
    university: 'university',
    subject: 'subject',
    subjectCode: 'subjectCode',
    category: 'category',
    year: 'year',
    semester: 'semester',
    department: 'department',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaperSchemaScalarFieldEnum = (typeof PaperSchemaScalarFieldEnum)[keyof typeof PaperSchemaScalarFieldEnum]


  export const QuestionsScalarFieldEnum: {
    id: 'id',
    questions: 'questions',
    subject: 'subject',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestionsScalarFieldEnum = (typeof QuestionsScalarFieldEnum)[keyof typeof QuestionsScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type paperSchemaWhereInput = {
    AND?: paperSchemaWhereInput | paperSchemaWhereInput[]
    OR?: paperSchemaWhereInput[]
    NOT?: paperSchemaWhereInput | paperSchemaWhereInput[]
    id?: StringFilter<"paperSchema"> | string
    pdfName?: StringFilter<"paperSchema"> | string
    university?: StringFilter<"paperSchema"> | string
    subject?: StringFilter<"paperSchema"> | string
    subjectCode?: StringFilter<"paperSchema"> | string
    category?: StringFilter<"paperSchema"> | string
    year?: IntFilter<"paperSchema"> | number
    semester?: IntFilter<"paperSchema"> | number
    department?: StringFilter<"paperSchema"> | string
    createdAt?: DateTimeFilter<"paperSchema"> | Date | string
    updatedAt?: DateTimeFilter<"paperSchema"> | Date | string
  }

  export type paperSchemaOrderByWithRelationInput = {
    id?: SortOrder
    pdfName?: SortOrder
    university?: SortOrder
    subject?: SortOrder
    subjectCode?: SortOrder
    category?: SortOrder
    year?: SortOrder
    semester?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type paperSchemaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: paperSchemaWhereInput | paperSchemaWhereInput[]
    OR?: paperSchemaWhereInput[]
    NOT?: paperSchemaWhereInput | paperSchemaWhereInput[]
    pdfName?: StringFilter<"paperSchema"> | string
    university?: StringFilter<"paperSchema"> | string
    subject?: StringFilter<"paperSchema"> | string
    subjectCode?: StringFilter<"paperSchema"> | string
    category?: StringFilter<"paperSchema"> | string
    year?: IntFilter<"paperSchema"> | number
    semester?: IntFilter<"paperSchema"> | number
    department?: StringFilter<"paperSchema"> | string
    createdAt?: DateTimeFilter<"paperSchema"> | Date | string
    updatedAt?: DateTimeFilter<"paperSchema"> | Date | string
  }, "id">

  export type paperSchemaOrderByWithAggregationInput = {
    id?: SortOrder
    pdfName?: SortOrder
    university?: SortOrder
    subject?: SortOrder
    subjectCode?: SortOrder
    category?: SortOrder
    year?: SortOrder
    semester?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: paperSchemaCountOrderByAggregateInput
    _avg?: paperSchemaAvgOrderByAggregateInput
    _max?: paperSchemaMaxOrderByAggregateInput
    _min?: paperSchemaMinOrderByAggregateInput
    _sum?: paperSchemaSumOrderByAggregateInput
  }

  export type paperSchemaScalarWhereWithAggregatesInput = {
    AND?: paperSchemaScalarWhereWithAggregatesInput | paperSchemaScalarWhereWithAggregatesInput[]
    OR?: paperSchemaScalarWhereWithAggregatesInput[]
    NOT?: paperSchemaScalarWhereWithAggregatesInput | paperSchemaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"paperSchema"> | string
    pdfName?: StringWithAggregatesFilter<"paperSchema"> | string
    university?: StringWithAggregatesFilter<"paperSchema"> | string
    subject?: StringWithAggregatesFilter<"paperSchema"> | string
    subjectCode?: StringWithAggregatesFilter<"paperSchema"> | string
    category?: StringWithAggregatesFilter<"paperSchema"> | string
    year?: IntWithAggregatesFilter<"paperSchema"> | number
    semester?: IntWithAggregatesFilter<"paperSchema"> | number
    department?: StringWithAggregatesFilter<"paperSchema"> | string
    createdAt?: DateTimeWithAggregatesFilter<"paperSchema"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"paperSchema"> | Date | string
  }

  export type questionsWhereInput = {
    AND?: questionsWhereInput | questionsWhereInput[]
    OR?: questionsWhereInput[]
    NOT?: questionsWhereInput | questionsWhereInput[]
    id?: StringFilter<"questions"> | string
    questions?: StringFilter<"questions"> | string
    subject?: StringFilter<"questions"> | string
    createdAt?: DateTimeFilter<"questions"> | Date | string
    updatedAt?: DateTimeFilter<"questions"> | Date | string
  }

  export type questionsOrderByWithRelationInput = {
    id?: SortOrder
    questions?: SortOrder
    subject?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type questionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: questionsWhereInput | questionsWhereInput[]
    OR?: questionsWhereInput[]
    NOT?: questionsWhereInput | questionsWhereInput[]
    questions?: StringFilter<"questions"> | string
    subject?: StringFilter<"questions"> | string
    createdAt?: DateTimeFilter<"questions"> | Date | string
    updatedAt?: DateTimeFilter<"questions"> | Date | string
  }, "id">

  export type questionsOrderByWithAggregationInput = {
    id?: SortOrder
    questions?: SortOrder
    subject?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: questionsCountOrderByAggregateInput
    _max?: questionsMaxOrderByAggregateInput
    _min?: questionsMinOrderByAggregateInput
  }

  export type questionsScalarWhereWithAggregatesInput = {
    AND?: questionsScalarWhereWithAggregatesInput | questionsScalarWhereWithAggregatesInput[]
    OR?: questionsScalarWhereWithAggregatesInput[]
    NOT?: questionsScalarWhereWithAggregatesInput | questionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"questions"> | string
    questions?: StringWithAggregatesFilter<"questions"> | string
    subject?: StringWithAggregatesFilter<"questions"> | string
    createdAt?: DateTimeWithAggregatesFilter<"questions"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"questions"> | Date | string
  }

  export type paperSchemaCreateInput = {
    id?: string
    pdfName?: string
    university: string
    subject: string
    subjectCode: string
    category: string
    year: number
    semester: number
    department: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type paperSchemaUncheckedCreateInput = {
    id?: string
    pdfName?: string
    university: string
    subject: string
    subjectCode: string
    category: string
    year: number
    semester: number
    department: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type paperSchemaUpdateInput = {
    pdfName?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    subjectCode?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    semester?: IntFieldUpdateOperationsInput | number
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paperSchemaUncheckedUpdateInput = {
    pdfName?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    subjectCode?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    semester?: IntFieldUpdateOperationsInput | number
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paperSchemaCreateManyInput = {
    id?: string
    pdfName?: string
    university: string
    subject: string
    subjectCode: string
    category: string
    year: number
    semester: number
    department: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type paperSchemaUpdateManyMutationInput = {
    pdfName?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    subjectCode?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    semester?: IntFieldUpdateOperationsInput | number
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paperSchemaUncheckedUpdateManyInput = {
    pdfName?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    subjectCode?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    semester?: IntFieldUpdateOperationsInput | number
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type questionsCreateInput = {
    id?: string
    questions: string
    subject: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type questionsUncheckedCreateInput = {
    id?: string
    questions: string
    subject: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type questionsUpdateInput = {
    questions?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type questionsUncheckedUpdateInput = {
    questions?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type questionsCreateManyInput = {
    id?: string
    questions: string
    subject: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type questionsUpdateManyMutationInput = {
    questions?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type questionsUncheckedUpdateManyInput = {
    questions?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type paperSchemaCountOrderByAggregateInput = {
    id?: SortOrder
    pdfName?: SortOrder
    university?: SortOrder
    subject?: SortOrder
    subjectCode?: SortOrder
    category?: SortOrder
    year?: SortOrder
    semester?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type paperSchemaAvgOrderByAggregateInput = {
    year?: SortOrder
    semester?: SortOrder
  }

  export type paperSchemaMaxOrderByAggregateInput = {
    id?: SortOrder
    pdfName?: SortOrder
    university?: SortOrder
    subject?: SortOrder
    subjectCode?: SortOrder
    category?: SortOrder
    year?: SortOrder
    semester?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type paperSchemaMinOrderByAggregateInput = {
    id?: SortOrder
    pdfName?: SortOrder
    university?: SortOrder
    subject?: SortOrder
    subjectCode?: SortOrder
    category?: SortOrder
    year?: SortOrder
    semester?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type paperSchemaSumOrderByAggregateInput = {
    year?: SortOrder
    semester?: SortOrder
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

  export type questionsCountOrderByAggregateInput = {
    id?: SortOrder
    questions?: SortOrder
    subject?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type questionsMaxOrderByAggregateInput = {
    id?: SortOrder
    questions?: SortOrder
    subject?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type questionsMinOrderByAggregateInput = {
    id?: SortOrder
    questions?: SortOrder
    subject?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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