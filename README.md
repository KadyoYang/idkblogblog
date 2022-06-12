# BlogForOwls

yes this is my blog, welcome to korea yes good,

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
