# Composer #
composer 笔记； 学习来源：[composer中文网](https://www.phpcomposer.com/ "composer 中文网") 或后盾人的视频教程：[PHP Composer 视频教程](http://www.php.cn/course/677.html "PHP Composer 视频教程")

## 安装 ##
composer 安装，参考 composer 中文网（官网）安装，Linux 建议全局安装，便于使用。

版本需求，`PHP5.3+` `OPENSSL` 必须开启。 

打开命令行并依次执行下列命令安装最新版本的 Composer：

	php -r "copy('https://install.phpcomposer.com/installer', 'composer-setup.php');" //下载安装脚本 － composer-setup.php － 到当前目录 
	php composer-setup.php //执行安装过程。
	php -r "unlink('composer-setup.php');" //删除安装脚本。

### 局部安装 ###
上述下载 Composer 的过程正确执行完毕后，可以将 composer.phar 文件复制到任意目录（比如项目根目录下），然后通过 php composer.phar 指令即可使用 Composer 了！

### 全局安装 ###
全局安装是将 Composer 安装到系统环境变量 PATH 所包含的路径下面，然后就能够在命令行窗口中直接执行 composer 命令了。 `P.S. 个人喜欢这种`

#### MAC&Linux ####
将文件 `composer.phar` 移动到 `/usr/local/bin/` 中即可：`sudo mv composer.phar /usr/local/bin/composer`

Windows 直接下载相关文件安装即可。

## composer 访问的原理 ##
composer 命令执行，访问 composer 的应用市场，应用市场搜索应用，然后访问 GitHub 的代码，然后下载返回用户。

![composer 访问原理](https://i.imgur.com/lsw16yv.png)

composer 应用市场即镜像源：`repo.packagist.org`

### 镜像源修改命令 ###
因为国外镜像延迟问题，可以使用国内镜像

1. 国外镜像源：[https://repo.packagist.org/](https://repo.packagist.org/ "国外镜像源")
2. 国内镜像源：[https://packagist.phpcomposer.com/](https://packagist.phpcomposer.com "国内镜像源")

全局修改，官方推荐方式：

	composer config -g repo.packagist composer https://packagist.phpcomposer.com

修改项目中的 `composer.json` 文件的镜像源

	composer config repo.packagist composer https://packagist.phpcomposer.com

## GitHub 项目仓库 ##
上传项目到 GitHub 上，项目发布到 https://packagist.org/ 。

### 项目发布 ###
GitHub 项目发布到镜像市场中，每次项目更新，都需要在 https://packagist.org/ 中更新应用，否则下载的项目是旧版本。

![镜像市场](https://i.imgur.com/hK2rsXe.png)

#### 使用 GitHub 的更新钩子 ####
旧版 GitHub 网站可以使用 Webhooks 进行自动同步到应用市场。目前亲测会自动更新到镜像源中。

### 创建 composer.json ###
composer.json 文件创建，镜像源 `composer.json` 生成。

1. `composer init` 初始化

![composer init](https://i.imgur.com/a08Qozr.png)

![composer.json 生成](https://i.imgur.com/tdLZqwX.png)

测试项目发布到镜像源中

	{
	    "name": "huimingdeng/mingframework",
	    "description": "WordPress plugin development by genecopoeia",
	    "type": "project",
	    "license": "apach-2.0",
	    "authors": [
	        {
	            "name": "huimingdeng",
	            "email": "1458575181@qq.com"
	        }
	    ],
	    "minimum-stability": "dev",
	    "require": {}
	}

初始化中项目开源协议参考：[https://spdx.org/licenses/](https://spdx.org/licenses/ "镜像开源协议")

### composer.json 错误点 ###
注意，创建的 composer.json 文件中错误示例：

	"require": {
        "php":  ">=5.3.*" // 错误，导致镜像市场包损毁，>=5.4.0 或 5.3.*
    }

P.S. `composer.json` 文件参考学习项目 [`laravel/laravel`](https://packagist.org/packages/laravel/laravel "laravel/laravel")

### composer 安装项目 ###
测试使用 composer 安装测试用的项目。`composer create-project huimingdeng/mingframework test dev-master --prefer-dist` 

![composer 案例](https://i.imgur.com/tntD9FH.png)
![项目展示](https://i.imgur.com/C7SR6er.png)

### composer 安装库 ###
composer 安装库(library)的命令`composer require gregwar/captcha`

### vendor 目录 ###
在创建项目（未发布到镜像前的开发）如何生成 composer 的 vendor 目录呢？

其实是编写好 composer.json 文件后执行 `composer install` 命令生成的，该目录下会根据 composer.json 文件的设置下载相关依赖库，同时产生 composer.lock 文件，当二次修改了 composer.json 文件后，此时就需要使用 `composer update` 命令更新项目库了，P.S. 生产环境中就不建议使用`composer update`命令。
