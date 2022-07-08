import{_ as a,r as l,o as r,c as t,a as e,d as s,e as d,b as i}from"./app.6951aaec.js";const c={},u=d(`<p>k8s\u5B89\u88C5</p><h2 id="\u57FA\u672C\u73AF\u5883\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u73AF\u5883\u914D\u7F6E" aria-hidden="true">#</a> \u57FA\u672C\u73AF\u5883\u914D\u7F6E</h2><p>\u6CE8\u610F\uFF1A\u672C\u6B21\u6298\u817E\u662F\u5728centos\u7CFB\u7EDF\u4E0B</p><ul><li>\u5173\u95ED\u9632\u706B\u5899</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl stop firewalld
systemctl disable firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5173\u95EDsawp</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>swapoff -a
vi /etc/fstab
# \u6CE8\u91CA\u4E0B\u9762\u884C
......
#/dev/mapper/centos-swap swap                    swap    defaults        0 0
......
&quot;/etc/fstab&quot; 14L, 694C written
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u7981\u7528selinux</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>setenforce 0
vi /etc/selinux/config
SELINUX=disabled
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5B89\u88C5docker</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /etc/yum.repos.d/
wget http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
sudo yum install docker-ce
sudo systemctl start docker
sudo systemctl enable docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6DFB\u52A0kubernetes.repo</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt;&gt; /etc/yum.repos.d/kubernetes.repo &lt;&lt;EOF 
[kubernetes]
name=Kubernetes
baseurl=http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=0
repo_gpgcheck=0
gpgkey=http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg
			 http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>centos7\u7528\u6237\u8FD8\u9700\u8981\u8BBE\u7F6E\u8DEF\u7531</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /etc/sysctl.d/k8s.conf &lt;&lt;EOF
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FEE\u6539\u5B8C\u6210\u540E\u6267\u884C<code>sysctl --system</code>\u5E94\u7528\u3002</p><ul><li>\u5B89\u88C5kubernetes\u5305</li></ul>`,17),o={href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/",target:"_blank",rel:"noopener noreferrer"},v=i("\u53C2\u8003\u94FE\u63A5"),b=d(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> -y kubelet kubeadm kubectl --disableexcludes<span class="token operator">=</span>kubernetes
systemctl <span class="token builtin class-name">enable</span> --now kubelet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FEE\u6539/etc/sysconfig/kubelet\uFF0C\u52A0\u5165\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>KUBELET_EXTRA_ARGS=--fail-swap-on=false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B8C\u6210\u540E\u542F\u52A8<code>kubelet</code>\u670D\u52A1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl enable kubelet.service
systemctl start kubelet.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\u64CD\u4F5C\u9700\u8981\u5728\u6240\u6709\u8282\u70B9\u6267\u884C\u3002</p><h2 id="\u521D\u59CB\u5316\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u96C6\u7FA4" aria-hidden="true">#</a> \u521D\u59CB\u5316\u96C6\u7FA4</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u6307\u5B9Ak8s\u7248\u672C
# kubeadm init --kubernetes-version v1.13.0 --pod-network-cidr=10.244.0.0/16
# \u5B89\u88C5\u6700\u65B0\u7248\u672C\uFF0C\u4F1A\u4ECEk8s.gcr.io\u4E0B\u8F7Dk8s\u6240\u9700\u8981\u7684\u955C\u50CF\uFF0C\u56FD\u5185\u7F51\u7EDC\u662F\u4E0B\u8F7D\u4E0D\u4E86\u7684\u3002
kubeadm init --pod-network-cidr=10.244.0.0/16
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E24\u79CD\u65B9\u5F0F\u4E0B\u8F7Dk8s\u6240\u9700\u8981\u7684\u955C\u50CF</p><ul><li>\u65B9\u6CD5\u4E00</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@base ~]# kubeadm config images list
W0813 23:29:24.324521   25028 version.go:98] could not fetch a Kubernetes version from the internet: unable to get URL &quot;https://dl.k8s.io/release/stable-1.txt&quot;: Get https://dl.k8s.io/release/stable-1.txt: net/http: request canceled while waiting for connection (Client.Timeout exceeded while awaiting headers)
W0813 23:29:24.324612   25028 version.go:99] falling back to the local client version: v1.15.1
k8s.gcr.io/kube-apiserver:v1.15.1
k8s.gcr.io/kube-controller-manager:v1.15.1
k8s.gcr.io/kube-scheduler:v1.15.1
k8s.gcr.io/kube-proxy:v1.15.1
k8s.gcr.io/pause:3.1
k8s.gcr.io/etcd:3.3.10
k8s.gcr.io/coredns:1.3.1

#!/bin/bash
images=(
    kube-apiserver:v1.15.1
    kube-controller-manager:v1.15.1
    kube-scheduler:v1.15.1
    kube-proxy:v1.15.1
    pause:3.1
    etcd:3.3.10
    coredns:1.3.1
)

for imageName in \${images[@]} ; do
    docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/$imageName
    docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/$imageName k8s.gcr.io/$imageName
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>\u65B9\u6CD5\u4E8C</p><p>Kubernetes v1.14 \u4E2D\u53EF\u4EE5\u4F7F\u7528<code>--image-repository</code>\u53C2\u6570\u6307\u5B9A\u81EA\u5B9A\u4E49\u7684\u955C\u50CF\u4ED3\u5E93\uFF0C\u800C\u4E0D\u9700\u8981\u624B\u52A8<code>docker pull</code>\u548C<code>docker tag</code>\u51C6\u5907\u5BB9\u5668\u955C\u50CF\uFF0C\u975E\u5E38\u5B9E\u7528\u7684\u4E00\u4E2A\u53C2\u6570\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubeadm init --image-repository<span class="token operator">=</span>registry.cn-hangzhou.aliyuncs.com/google_containers --pod-network-cidr<span class="token operator">=</span><span class="token number">10.244</span>.0.0/16 --apiserver-advertise-address<span class="token operator">=</span><span class="token number">192.168</span>.81.101

kubeadm init --pod-network-cidr<span class="token operator">=</span><span class="token number">10.244</span>.0.0/16 --image-repository<span class="token operator">=</span>registry.cn-hangzhou.aliyuncs.com/google_containers
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>\u521D\u59CB\u5316\u4E4B\u540E\u4F1A\u5F39\u51FA\u4EE5\u4E0B\u7C7B\u4F3C\u7684\u8BED\u53E5\uFF0C\u6807\u660E\u5BA2\u6237\u7AEF\u52A0\u5165master\u7684\u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Your Kubernetes master has initialized successfully!

To start using your cluster, you need to run the following as a regular user:

  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config

You should now deploy a pod network to the cluster.
Run &quot;kubectl apply -f [podnetwork].yaml&quot; with one of the options listed at:
  https://kubernetes.io/docs/concepts/cluster-administration/addons/

You can now join any number of machines by running the following on each node
as root:

  kubeadm join 192.168.10.21:6443 --token abcdef.0123456789abcdef --discovery-token-ca-cert-hash sha256:564e3ba4b76649e981300fcea9e4400b759f91a02f4a968e035ada454f3a1d2e

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3B\u8981\u63D0\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. \u63A8\u8350\u975Eroot\u8D26\u53F7\u4F7F\u7528\`kubectl\`\u547D\u4EE4\u3002\u672C\u6587\u4F7F\u7528hall\u8D26\u53F7\u3002
2. \u9700\u8981\u5728\u96C6\u7FA4\u4E2D\u521B\u5EFApod network\u3002\u672C\u6587\u4F7F\u7528flannel, \u521D\u59CB\u5316\u547D\u4EE4\u4E2D\u7684\`--pod-network-cidr=10.244.0.0/16\`\u662F\u4F7F\u7528flannel\u7684\u5FC5\u5907\u53C2\u6570\uFF0C\u8BE6\u60C5\u89C1\u5B98\u65B9\u82F1\u6587\u6587\u6863\u3002
3. \u663E\u793A\u4E86\u5176\u5B83\u8282\u70B9\u52A0\u5165\u96C6\u7FA4\u7684\u547D\u4EE4\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u6267\u884C\u4E00\u4E0B\u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u770Bnode</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get nodes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@k8s-master ~]# kubectl get nodes
NAME         STATUS     ROLES    AGE    VERSION
k8s-master   NotReady   master   121m   v1.15.1
k8s-slave    NotReady   &lt;none&gt;   113m   v1.15.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u72B6\u6001\u4E3A<strong>NotReady</strong>\u662F\u56E0\u4E3A\u8FD8\u6CA1\u6709\u8FDB\u884Cpod network\u5B89\u88C5</p><p>\u5B89\u88C5\u8BE6\u60C5\u67E5\u770B\uFF1Ahttps://juejin.im/post/5c9a49ace51d456c9d78dbef#heading-1</p><p>\u6CE8\u610F\uFF1A</p><p>\u5982\u679C\u6267\u884C\u4E0B\u9762\u547D\u4EE4\u63D0\u793A\u7AEF\u53E3\u62A5\u9519\u7684\u662F\uFF0C\u53EF\u4EE5\u52A0\u4E0A <code>--ignore-preflight-errors=all</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubeadm init --config kubeadm-init.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5B89\u88C5dashboard" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5dashboard" aria-hidden="true">#</a> \u5B89\u88C5dashboard</h2><p>github\u5730\u5740\uFF1Ahttps://github.com/kubernetes/dashboard</p><p>\u6CE8\u610F\uFF1A\u5728master\u4E0A\u64CD\u4F5C</p><p>\u5B98\u65B9\u8BF4\u660E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v1.10.1/src/deploy/recommended/kubernetes-dashboard.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7531\u4E8E\u5728\u56FD\u5185\uFF0C\u4E0A\u9762\u547D\u4EE4\u662F\u65E0\u6CD5\u4E0B\u8F7Dk8s.gcr.io\u7684\u955C\u50CF\u7684\uFF0C\u6240\u4EE5\u53EF\u4EE5\u4FEE\u6539\u4E3A\u963F\u91CC\u4E91\u7684\u955C\u50CF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>wget https://raw.githubusercontent.com/kubernetes/dashboard/v1.10.1/src/deploy/recommended/kubernetes-dashboard.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7136\u540E\u4FEE\u6539kubernetes-dashboard.yaml\uFF0C\u628A\u91CC\u9762\u7684k8s.gcr.io \u6539\u4E3Aregistry.cn-hangzhou.aliyuncs.com/google_containers</p><p>\u7136\u540E\u6267\u884C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl apply -f kubernetes-dashboard.yaml 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53C2\u8003\u94FE\u63A5\uFF1A</p><p>https://www.cnblogs.com/harlanzhang/p/10045975.html</p><p>https://cloud.tencent.com/developer/article/1115558</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://192.168.31.78:30001/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Token:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>eyJhbGciOiJSUzI1NiIsImtpZCI6IiJ9.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJrdWJlcm5ldGVzLWRhc2hib2FyZC10b2tlbi0ybGs4cyIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50Lm5hbWUiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6IjZlNzEyNTc4LWU0NWQtNGM0Ni04YzNmLTUwZjQ0NGQzZDEwMCIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDprdWJlLXN5c3RlbTprdWJlcm5ldGVzLWRhc2hib2FyZCJ9.aVYbffMpeNa1sY8mOHCiDaFrRa0lWQtgl3scV_5xinxPvA5CzEYQItryAPQ_ceRQFj6GGv994Q4jpAfoTdDyJbhQYsEN3MP8apo7bOR94MWIh57lf8ftIUDBV46c15Lc55SYp9MDinxEEmmioYFSl4yJ0FiHH73rq0vE21ARyc5b_hquGwVh5vMStlU1GtiPSXzTmfLQlDLtXI-mqP_hPHLnmjTs0dInvzbshHKQuS5emkfStYJoWbBMx5bdxgA1OmlLptkDK73CUsk5ygFB13CcF4nobxHfxMYRSx1S-bx4mGJDHryl38ddU0YCkJpqDut582djkEj0dRxMEb0Jwg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get nodes
kubectl get pods --namespace=kube-system

kubectl get deployment kubernetes-dashboard -n kube-system
 
kubectl get pods -n kube-system -o wide
 
kubectl get services -n kube-system
kubectl get pods -o wide --all-namespaces
kubectl describe pod kubernetes-dashboard -n kube-system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>`,45),m={href:"https://juejin.im/post/5c9a49ace51d456c9d78dbef#heading-1",target:"_blank",rel:"noopener noreferrer"},p=i("kubernetes 1.13 \u5168\u65B0\u5B89\u88C5\u6307\u5357"),g={href:"https://www.ityoudao.cn/posts/kubernetes-cluster-kubeadm/",target:"_blank",rel:"noopener noreferrer"},h=i("Kubeadm\u521B\u5EFAKubernetes\u96C6\u7FA4"),k={href:"http://www.amd5.cn/atang_3742.html",target:"_blank",rel:"noopener noreferrer"},x=i("\u90E8\u7F72Kubernetes cluster"),y={href:"https://blog.csdn.net/wh211212/article/details/94401759",target:"_blank",rel:"noopener noreferrer"},f=i("kubenetes 1.15.0 \u5B89\u88C5\u811A\u672C");function _(w,N){const n=l("ExternalLinkIcon");return r(),t("div",null,[u,e("p",null,[e("a",o,[v,s(n)])]),b,e("p",null,[e("a",m,[p,s(n)])]),e("p",null,[e("a",g,[h,s(n)])]),e("p",null,[e("a",k,[x,s(n)])]),e("p",null,[e("a",y,[f,s(n)])])])}var V=a(c,[["render",_],["__file","k8s-install.html.vue"]]);export{V as default};
