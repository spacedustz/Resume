## Kun Woo Shin's Resume

- React & TypeScript (yarn vite)
- Server : AWS EC2 (Ubuntu 22.04 LTS)
- 이력서 접속 URL : 43.202.203.180:3000
- EC2 Elastic IP 설정

<br>

## 서버 세팅 스크립트

```bash
#!/bin/bash

# APT Update & Upgrade
apt -y update & apt -y upgrade

# NodeJS LTS Source
curl -sL https://deb.nodesource.com/setup_20.x | sudo -E bash -

# NodeJS 설치
apt -y install nodejs

# 기타 패키지 & 방화벽 설정
apt -y install wget curl firewalld git
npm install -g yarn vite typescript
yarn global add react-bootstrap react-router-dom styled-components axios @types/react-bootstrap @types/react-router-dom

ufw disable
systemctl enable firewalld
firewall-cmd --permanent --add-port=3000/tcp
firewall-cmd --reload

setenforce 0
```