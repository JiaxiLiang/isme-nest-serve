
```
2-node后端
├─ .env
├─ .eslintrc.js
├─ .prettierrc
├─ .VSCodeCounter
│  └─ 2026-05-30_10-42-29
│     ├─ details.md
│     ├─ diff-details.md
│     ├─ diff.csv
│     ├─ diff.md
│     ├─ diff.txt
│     ├─ results.csv
│     ├─ results.json
│     ├─ results.md
│     └─ results.txt
├─ init.sql
├─ LICENSE
├─ nest-cli.json
├─ package-lock.json
├─ package.json
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ src
│  ├─ app.module.ts
│  ├─ common
│  │  ├─ decorators
│  │  │  ├─ return-type.decorator.ts
│  │  │  └─ roles.decorator.ts
│  │  ├─ exceptions
│  │  │  ├─ custom.exception.ts
│  │  │  └─ error-code.ts
│  │  ├─ filters
│  │  │  └─ all-exception.filter.ts
│  │  ├─ guards
│  │  │  ├─ index.ts
│  │  │  ├─ jwt.guard.ts
│  │  │  ├─ local.guard.ts
│  │  │  ├─ permission.guard.ts
│  │  │  ├─ preview.guard.ts
│  │  │  └─ role.guard.ts
│  │  └─ interceptors
│  │     └─ transform.interceptor.ts
│  ├─ constants
│  │  └─ redis.contant.ts
│  ├─ main.ts
│  ├─ modules
│  │  ├─ auth
│  │  │  ├─ auth.controller.ts
│  │  │  ├─ auth.module.ts
│  │  │  ├─ auth.service.ts
│  │  │  ├─ dto.ts
│  │  │  ├─ jwt.strategy.ts
│  │  │  └─ local.strategy.ts
│  │  ├─ permission
│  │  │  ├─ dto.ts
│  │  │  ├─ permission.controller.ts
│  │  │  ├─ permission.entity.ts
│  │  │  ├─ permission.module.ts
│  │  │  └─ permission.service.ts
│  │  ├─ role
│  │  │  ├─ dto.ts
│  │  │  ├─ role.controller.ts
│  │  │  ├─ role.entity.ts
│  │  │  ├─ role.module.ts
│  │  │  └─ role.service.ts
│  │  └─ user
│  │     ├─ dto.ts
│  │     ├─ profile.entity.ts
│  │     ├─ user.controller.ts
│  │     ├─ user.entity.ts
│  │     ├─ user.module.ts
│  │     └─ user.service.ts
│  ├─ shared
│  │  ├─ redis.service.ts
│  │  ├─ shared.module.ts
│  │  └─ shared.service.ts
│  └─ types
│     └─ index.ts
├─ tsconfig.build.json
└─ tsconfig.json

```