'use strict';

export const KSQLKeywords: string[] = [
    'KAFKA_TOPIC',
    'VALUE_FORMAT',
    'PARTITIONS',
    'REPLICATION',
    'ADD',
    'ADVANCE',
    'ALL',
    'ALTER',
    'ANALYZE',
    'AND',
    'ANSI',
    'ANY',
    'APPROXIMATE',
    'ARRAY',
    'AS',
    'ASC',
    'AST',
    'ASTERISK',
    'AT',
    'BACKQUOTED_IDENTIFIER',
    'BEGINNING',
    'BERNOULLI',
    'BETWEEN',
    'BINARY_LITERAL',
    'BRACKETED_COMMENT',
    'BY',
    'CALL',
    'CASE',
    'CAST',
    'CATALOG',
    'CATALOGS',
    'COALESCE',
    'COLUMN',
    'COLUMNS',
    'COMMIT',
    'COMMITTED',
    'CONFIDENCE',
    'CONSTRAINT',
    'CREATE',
    'CUBE',
    'CURRENT',
    'CURRENT_DATE',
    'CURRENT_TIME',
    'CURRENT_TIMESTAMP',
    'DATA',
    'DATE',
    'DAY',
    'DAYS',
    'DEALLOCATE',
    'DECIMAL_VALUE',
    'DELETE',
    'DESC',
    'DESCRIBE',
    'DIGIT',
    'DIGIT_IDENTIFIER',
    'DISTINCT',
    'DISTRIBUTED',
    'DROP',
    'ELSE',
    'END',
    'ESCAPE',
    'EXCEPT',
    'EXECUTE',
    'EXISTS',
    'EXPLAIN',
    'EXPONENT',
    'EXPORT',
    'EXTENDED',
    'EXTRACT',
    'FALSE',
    'FIRST',
    'FOLLOWING',
    'FOR',
    'FORMAT',
    'FROM',
    'FULL',
    'FUNCTION',
    'FUNCTIONS',
    'GROUP',
    'GROUPING',
    'HAVING',
    'HOPPING',
    'HOUR',
    'HOURS',
    'IDENTIFIER',
    'IF',
    'IN',
    'INNER',
    'INSERT',
    'INTEGER',
    'INTEGER_VALUE',
    'INTERSECT',
    'INTERVAL',
    'INTO',
    'IS',
    'ISOLATION',
    'JOIN',
    'LAST',
    'LEFT',
    'LETTER',
    'LEVEL',
    'LIKE',
    'LIMIT',
    'LIST',
    'LOAD',
    'LOCALTIME',
    'LOCALTIMESTAMP',
    'LOGICAL',
    'LT',
    'LTE',
    'MILLISECOND',
    'MILLISECONDS',
    'MINUS',
    'MINUTE',
    'MINUTES',
    'MONTH',
    'MONTHS',
    'NEQ',
    'NFC',
    'NFD',
    'NFKC',
    'NFKD',
    'NO',
    'NORMALIZE',
    'NOT',
    'NULL',
    'NULLIF',
    'NULLS',
    'ON',
    'ONLY',
    'OPTION',
    'OR',
    'ORDER',
    'ORDINALITY',
    'OUTER',
    'OVER',
    'PARTITION',
    'PARTITIONS',
    'PERCENT',
    'PLUS',
    'POISSONIZED',
    'POSITION',
    'PRECEDING',
    'PREPARE',
    'PRINT',
    'PRIVILEGES',
    'PROPERTIES',
    'PUBLIC',
    'QUERIES',
    'QUERY',
    'QUOTED_IDENTIFIER',
    'RANGE',
    'READ',
    'RECURSIVE',
    'REGISTER',
    'REGISTERED',
    'RENAME',
    'REPEATABLE',
    'REPLACE',
    'RESCALED',
    'RESET',
    'REVOKE',
    'RIGHT',
    'ROLLBACK',
    'ROLLUP',
    'ROW',
    'ROWS',
    'RUN',
    'SAMPLE',
    'SCHEMAS',
    'SCRIPT',
    'SECOND',
    'SECONDS',
    'SELECT',
    'SERIALIZABLE',
    'SESSION',
    'SET',
    'SETS',
    'SHOW',
    'SIMPLE_COMMENT',
    'SIZE',
    'SLASH',
    'SMALLINT',
    'SOME',
    'SQL',
    'START',
    'STRATIFY',
    'STREAM',
    'STREAMS',
    'STRUCT_FIELD_REF',
    'SYSTEM',
    'TABLE',
    'TABLES',
    'TABLESAMPLE',
    'TERMINATE',
    'TEXT',
    'THEN',
    'TIME',
    'TIMESTAMP',
    'TIMESTAMP_WITH_TIME_ZONE',
    'TIME_WITH_TIME_ZONE',
    'TINYINT',
    'TO',
    'TOPIC',
    'TOPICS',
    'TRANSACTION',
    'TRUE',
    'TRY',
    'TRY_CAST',
    'TUMBLING',
    'TYPE',
    'UNBOUNDED',
    'UNCOMMITTED',
    'UNION',
    'UNNEST',
    'UNRECOGNIZED',
    'UNSET',
    'USE',
    'USING',
    'VALUES',
    'VIEW',
    'WHEN',
    'WHERE',
    'WINDOW',
    'WITH',
    'WITHIN',
    'WORK',
    'WRITE',
    'YEAR',
    'YEARS',
    'ZONE'
];

export const KSQLShow: string[] = [
    'FUNCTIONS',
    'PROPERTIES',
    'QUERIES',
    'STREAMS',
    'TABLES',
    'TOPICS'
];

export const KSQLTypes: string[] = [
    'DOUBLE',
    'VARCHAR',
    'STRING',
    'INTEGER',
    'BIGINT',
    'STRUCT',
    'ARRAY',
    'MAP',
    'BOOLEAN'
];

export const KSQLWithParameters: string[] = [
    'KAFKA_TOPIC',
    'VALUE_FORMAT',
    'KEY',
    'TIMESTAMP',
    'TIMESTAMP_FORMAT'
];

export const KSQLFunctions: string[] = [
    'LCASE',
    'TRIM',
    'UCASE',
    'SUBSTRING',
    'CONCAT',
    'RANDOM',
    'ABS',
    'CEIL',
    'FLOOR',
    'LEN',
    'ROUND',
    'GEO_DISTANCE',
    'ARRAYCONTAINS',
    'EXTRACTJSONFIELD',
    'STRINGTOTIMESTAMP',
    'TIMESTAMPTOSTRING',
    'COUNT',
    'MAX',
    'MIN',
    'SUM',
    'TOPK',
    'TOPKDISTINCT',
    'MASK',
    'MASK_LEFT',
    'MASK_KEEP_LEFT',
    'MASK_RIGHT',
    'MASK_KEEP_RIGHT'
];


export const KSQLKeywordRegex: RegExp = new RegExp("(\\b"+KSQLKeywords.concat(KSQLShow).concat(KSQLTypes).concat(KSQLWithParameters).join("\\b|\\b")+"\\b)","ig");