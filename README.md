# nice-swa-cli
## 项目说明
- nice-swa，读着：laishua，中文名：来耍。加了-cli，是项目的命令行工具

## nice-swa项目地址
[nice-swa前端项目地址](https://github.com/QCCS/nice-swa)
[nice-swa后端项目地址](https://github.com/QCCS/nice-swa-s)

## 安装与卸载
```
//卸载最新命令行工具
npm uninstall -g nice-swa-cli
//安装最新命令行工具
npm install -g nice-swa-cli
```

## 工具使用

- 输出版本号
```
nice-swa-cli -v
nice-swa-cli --version
```

- 初始化前端项目
```
//默认下载master分支
nice-swa-cli f name
//指定分支
nice-swa-cli f name branchName
```
- 初始化后端项目
```
//默认下载master分支
nice-swa-cli b name
//指定分支
nice-swa-cli b name branchName
```

