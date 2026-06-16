# Details

Date : 2026-05-30 10:42:29

Directory e:\\Project\\isme-nest-serve

Total : 52 files,  16889 codes, 372 comments, 1869 blanks, all 19130 lines

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)

## Files
| filename | language | code | comment | blank | total |
| :--- | :--- | ---: | ---: | ---: | ---: |
| [.env](/.env) | Dotenv | 10 | 5 | 5 | 20 |
| [.eslintrc.js](/.eslintrc.js) | JavaScript | 27 | 0 | 1 | 28 |
| [.prettierrc](/.prettierrc) | JSON | 7 | 0 | 1 | 8 |
| [README.md](/README.md) | Markdown | 13 | 0 | 13 | 26 |
| [init.sql](/init.sql) | MS SQL | 106 | 43 | 16 | 165 |
| [nest-cli.json](/nest-cli.json) | JSON | 8 | 0 | 1 | 9 |
| [package-lock.json](/package-lock.json) | JSON | 9,730 | 0 | 1 | 9,731 |
| [package.json](/package.json) | JSON | 65 | 0 | 1 | 66 |
| [pnpm-lock.yaml](/pnpm-lock.yaml) | YAML | 5,306 | 0 | 1,510 | 6,816 |
| [src/app.module.ts](/src/app.module.ts) | TypeScript | 21 | 8 | 5 | 34 |
| [src/common/decorators/return-type.decorator.ts](/src/common/decorators/return-type.decorator.ts) | TypeScript | 3 | 7 | 3 | 13 |
| [src/common/decorators/roles.decorator.ts](/src/common/decorators/roles.decorator.ts) | TypeScript | 2 | 7 | 3 | 12 |
| [src/common/exceptions/custom.exception.ts](/src/common/exceptions/custom.exception.ts) | TypeScript | 12 | 10 | 4 | 26 |
| [src/common/exceptions/error-code.ts](/src/common/exceptions/error-code.ts) | TypeScript | 21 | 11 | 4 | 36 |
| [src/common/filters/all-exception.filter.ts](/src/common/filters/all-exception.filter.ts) | TypeScript | 19 | 7 | 4 | 30 |
| [src/common/guards/index.ts](/src/common/guards/index.ts) | TypeScript | 4 | 0 | 1 | 5 |
| [src/common/guards/jwt.guard.ts](/src/common/guards/jwt.guard.ts) | TypeScript | 6 | 7 | 3 | 16 |
| [src/common/guards/local.guard.ts](/src/common/guards/local.guard.ts) | TypeScript | 6 | 7 | 3 | 16 |
| [src/common/guards/permission.guard.ts](/src/common/guards/permission.guard.ts) | TypeScript | 17 | 8 | 5 | 30 |
| [src/common/guards/preview.guard.ts](/src/common/guards/preview.guard.ts) | TypeScript | 12 | 7 | 4 | 23 |
| [src/common/guards/role.guard.ts](/src/common/guards/role.guard.ts) | TypeScript | 17 | 9 | 4 | 30 |
| [src/common/interceptors/transform.interceptor.ts](/src/common/interceptors/transform.interceptor.ts) | TypeScript | 31 | 7 | 3 | 41 |
| [src/constants/redis.contant.ts](/src/constants/redis.contant.ts) | TypeScript | 2 | 7 | 3 | 12 |
| [src/main.ts](/src/main.ts) | TypeScript | 19 | 7 | 5 | 31 |
| [src/modules/auth/auth.controller.ts](/src/modules/auth/auth.controller.ts) | TypeScript | 75 | 11 | 10 | 96 |
| [src/modules/auth/auth.module.ts](/src/modules/auth/auth.module.ts) | TypeScript | 25 | 7 | 3 | 35 |
| [src/modules/auth/auth.service.ts](/src/modules/auth/auth.service.ts) | TypeScript | 76 | 8 | 9 | 93 |
| [src/modules/auth/dto.ts](/src/modules/auth/dto.ts) | TypeScript | 27 | 7 | 8 | 42 |
| [src/modules/auth/jwt.strategy.ts](/src/modules/auth/jwt.strategy.ts) | TypeScript | 53 | 11 | 8 | 72 |
| [src/modules/auth/local.strategy.ts](/src/modules/auth/local.strategy.ts) | TypeScript | 16 | 7 | 4 | 27 |
| [src/modules/permission/dto.ts](/src/modules/permission/dto.ts) | TypeScript | 52 | 7 | 18 | 77 |
| [src/modules/permission/permission.controller.ts](/src/modules/permission/permission.controller.ts) | TypeScript | 63 | 8 | 13 | 84 |
| [src/modules/permission/permission.entity.ts](/src/modules/permission/permission.entity.ts) | TypeScript | 50 | 7 | 21 | 78 |
| [src/modules/permission/permission.module.ts](/src/modules/permission/permission.module.ts) | TypeScript | 11 | 7 | 3 | 21 |
| [src/modules/permission/permission.service.ts](/src/modules/permission/permission.service.ts) | TypeScript | 69 | 8 | 12 | 89 |
| [src/modules/role/dto.ts](/src/modules/role/dto.ts) | TypeScript | 58 | 7 | 21 | 86 |
| [src/modules/role/role.controller.ts](/src/modules/role/role.controller.ts) | TypeScript | 85 | 9 | 14 | 108 |
| [src/modules/role/role.entity.ts](/src/modules/role/role.entity.ts) | TypeScript | 23 | 7 | 8 | 38 |
| [src/modules/role/role.module.ts](/src/modules/role/role.module.ts) | TypeScript | 13 | 7 | 3 | 23 |
| [src/modules/role/role.service.ts](/src/modules/role/role.service.ts) | TypeScript | 143 | 7 | 13 | 163 |
| [src/modules/user/dto.ts](/src/modules/user/dto.ts) | TypeScript | 86 | 7 | 20 | 113 |
| [src/modules/user/profile.entity.ts](/src/modules/user/profile.entity.ts) | TypeScript | 28 | 7 | 10 | 45 |
| [src/modules/user/user.controller.ts](/src/modules/user/user.controller.ts) | TypeScript | 97 | 19 | 14 | 130 |
| [src/modules/user/user.entity.ts](/src/modules/user/user.entity.ts) | TypeScript | 37 | 7 | 10 | 54 |
| [src/modules/user/user.module.ts](/src/modules/user/user.module.ts) | TypeScript | 15 | 7 | 3 | 25 |
| [src/modules/user/user.service.ts](/src/modules/user/user.service.ts) | TypeScript | 156 | 8 | 16 | 180 |
| [src/shared/redis.service.ts](/src/shared/redis.service.ts) | TypeScript | 31 | 7 | 10 | 48 |
| [src/shared/shared.module.ts](/src/shared/shared.module.ts) | TypeScript | 62 | 11 | 3 | 76 |
| [src/shared/shared.service.ts](/src/shared/shared.service.ts) | TypeScript | 42 | 10 | 8 | 60 |
| [src/types/index.ts](/src/types/index.ts) | TypeScript | 3 | 7 | 2 | 12 |
| [tsconfig.build.json](/tsconfig.build.json) | JSON | 4 | 0 | 1 | 5 |
| [tsconfig.json](/tsconfig.json) | JSON with Comments | 25 | 0 | 1 | 26 |

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)