# 小小运动员吃饭地图 | Young Athlete Fuel Map

一个给两个 8-9 岁男孩看的中英文儿童营养静态网站，重点是学习、体能训练、高尔夫和不用称重的手掌估量法。

## 本地预览

```bash
npm start
```

## Cloudflare Pages

- 项目名: `young-athlete-fuel-map`
- 输出目录: `.`
- 建议自定义域名: `kids-nutrition.chiropractic.com`
- GitHub 仓库: https://github.com/szkailorik/young-athlete-fuel-map

当前 Wrangler 登录已过期；在本机或 CI 设置 `CLOUDFLARE_API_TOKEN` 后可继续部署：

```bash
npx wrangler pages project create young-athlete-fuel-map --production-branch main
npx wrangler pages deploy . --project-name young-athlete-fuel-map --branch main
```

部署完成后，在 Cloudflare Dashboard 进入 Workers & Pages > `young-athlete-fuel-map` > Custom domains，添加：

```text
kids-nutrition.chiropractic.com
```

如果 `chiropractic.com` 的 DNS zone 在同一个 Cloudflare 账号里，Cloudflare 会自动添加相应 DNS 记录；否则需要手动添加 CNAME 指向 Pages 的 `*.pages.dev` 地址，并且仍要在 Pages Custom domains 中关联该域名。

当前内容依据 2026 年 7 月可用的美国 2025-2030 Dietary Guidelines、USDA/MyPlate、NIH/DRI、CDC、AAP HealthyChildren 和儿童医院份量指南整理。
