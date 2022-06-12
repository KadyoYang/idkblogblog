# BlogForOwls

yes this is my blog, welcome to korea yes good,

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# ssh 방식으로 여러 계정 사용

- ssh-keygen -t rsa -C "your email"
- id_rsa_github_me 등 원하는 파일명 입력
- ~/.ssh/config 파일에 다음 입력

```bash
# 내 깃헙
Host github.com-me
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_rsa_github_me
```

- github에 public key 등록
- 해당 레포지토리 들어가서 clone 하는데 클론은 다음과 같이
- git@github.com-me:YourName/Reponame.git
- 끝!
- 미리 받아놓고 바꿔도 됨 remote

# 구조 요약

```
post : 일기, 글,
handbook : 팁이나 튜토리얼

hashtag indexing

```
