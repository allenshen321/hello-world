<?php 
$pageTitle = "PHP 复习";
$filename = basename(__FILE__);
require_once('header.php');
$createTime = date('Y-m-d',filectime($filename));?>
		<header><h1>PHP复习之路</h1></header>
		<main>
		<?php $dir=dirname(__FILE__)."/php";
		$file_arr=scandir($dir,0);
		if(!empty($file_arr)){
			$array_dir=array();
			require_once("un.php");//引入不显示的文件数组
			foreach ($file_arr as $k => $v) {
				if(is_file($dir.'/'.$v)&&!in_array($v,$not_show_display)){
					$array_dir[]=$v;
				}
			}
			if(!empty($array_dir)){?>
				<nav class="nav nav-pills nav-stacked">
				<ul>
				<?php foreach ($array_dir as $k => $v) {
					if($k==0){$ac="active";}else{$ac="";}?>
					<li class="<?php echo $ac;?>"><a href="php/<?php echo $v;?>"><?php echo $v;?></a></li>
					<?php
				}
				?>
				</ul>
				</nav>
				<?php
			}
		 }?>
		</main>
<?php include_once 'footer.php'; ?>