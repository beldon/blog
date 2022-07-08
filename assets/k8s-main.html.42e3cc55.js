import{_ as s,r as d,o as r,c as l,a as e,d as a,e as t,b as n}from"./app.6951aaec.js";const c={},o=t(`<p>k8s \u5165\u95E8demo</p><h2 id="k8s-\u521B\u5EFA\u8D44\u6E90\u7684\u4E24\u79CD\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#k8s-\u521B\u5EFA\u8D44\u6E90\u7684\u4E24\u79CD\u65B9\u5F0F" aria-hidden="true">#</a> K8S \u521B\u5EFA\u8D44\u6E90\u7684\u4E24\u79CD\u65B9\u5F0F</h2><p>\u5728 K8S \u4E2D\uFF0C\u6709\u4E24\u79CD\u521B\u5EFA\u8D44\u6E90\u7684\u65B9\u5F0F\uFF1A<strong>kubectl</strong> \u547D\u4EE4\u548C <strong>yaml</strong> \u914D\u7F6E\u6587\u4EF6\u3002</p><p>\u4E24\u79CD\u65B9\u5F0F\u5404\u6709\u5404\u7684\u597D\u5904\u3002\u547D\u4EE4\u884C\u7684\u65B9\u5F0F\u6700\u4E3A\u7B80\u5355\uFF0C\u4E00\u6761\u547D\u4EE4\u5C31\u4E07\u4E8B\u5927\u5409\uFF0C\u4F46\u7F3A\u70B9\u4E5F\u5F88\u660E\u663E\uFF0C\u4F60\u5E76\u4E0D\u77E5\u9053\u8FD9\u6761\u547D\u4EE4\u80CC\u540E\u5230\u5E95\u505A\u4E86\u54EA\u4E9B\u4E8B\uFF0C\u914D\u7F6E\u6587\u4EF6\u5C31\u63D0\u4F9B\u4E86\u4E00\u79CD\u8BA9\u4F60\u77E5\u5176\u7136\u66F4\u77E5\u5176\u6240\u4EE5\u7136\u7684\u65B9\u5F0F\u3002</p><h2 id="\u914D\u7F6Edemo" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Edemo" aria-hidden="true">#</a> \u914D\u7F6EDemo</h2><p>k8s \u914D\u7F6E\u662F\u57FA\u4E8Eyaml\uFF0C\u548Cspring boot \u914D\u7F6E\u6587\u4EF6\u7684yaml\u662F\u4E00\u6837\u7684\uFF0C\u7528\u6CD5\u5C31\u4E0D\u8BE6\u8BB0\u4E86\u3002</p><h3 id="deployment" tabindex="-1"><a class="header-anchor" href="#deployment" aria-hidden="true">#</a> deployment</h3><p>\u5B9A\u4E49 deployment \u914D\u7F6E\u6587\u4EF6\uFF0C\u547D\u540D\u4E3A\uFF1Anginx-deployment.yaml</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>apiVersion: apps/v1   # 1.9.0 \u4E4B\u524D\u7684\u7248\u672C\u4F7F\u7528 apps/v1beta2\uFF0C\u53EF\u901A\u8FC7\u547D\u4EE4 kubectl api-versions \u67E5\u770B
kind: Deployment    #\u6307\u5B9A\u521B\u5EFA\u8D44\u6E90\u7684\u89D2\u8272/\u7C7B\u578B
metadata:    #\u8D44\u6E90\u7684\u5143\u6570\u636E/\u5C5E\u6027
  name: nginx-deployment    #\u8D44\u6E90\u7684\u540D\u5B57\uFF0C\u5728\u540C\u4E00\u4E2Anamespace\u4E2D\u5FC5\u987B\u552F\u4E00
spec:
  replicas: 2    #\u526F\u672C\u6570\u91CF2
  selector:      #\u5B9A\u4E49\u6807\u7B7E\u9009\u62E9\u5668
    matchLabels:
      app: web-server
  template:      #\u8FD9\u91CCPod\u7684\u5B9A\u4E49
    metadata:
      labels:    #Pod\u7684label
        app: web-server
    spec:        # \u6307\u5B9A\u8BE5\u8D44\u6E90\u7684\u5185\u5BB9  
      containers:  
      - name: nginx      #\u5BB9\u5668\u7684\u540D\u5B57  
        image: nginx:1.12.1  #\u5BB9\u5668\u7684\u955C\u50CF\u5730\u5740    
        ports:  
        - containerPort: 80  #\u5BB9\u5668\u5BF9\u5916\u7684\u7AEF\u53E3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884Ckubectl create -f nginx.yaml\u521B\u5EFA deployment \u8D44\u6E90\uFF1A</p><h3 id="pod" tabindex="-1"><a class="header-anchor" href="#pod" aria-hidden="true">#</a> pod</h3><p>\u5B9A\u4E49 pod \u914D\u7F6E\u6587\u4EF6\uFF0C\u547D\u540D\u4E3A redis-pod.yaml</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>apiVersion: v1
kind: Pod  
metadata:  
  name: pod-redis
  labels:
    name: redis
spec: 
  containers:
  - name: pod-redis
    image: docker.io/redis  
    ports:
    - containerPort: 80 #\u5BB9\u5668\u5BF9\u5916\u7684\u7AEF\u53E3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884Ckubectl create -f pod-redis.yaml\u521B\u5EFA pod \u8D44\u6E90</p><h3 id="service" tabindex="-1"><a class="header-anchor" href="#service" aria-hidden="true">#</a> service</h3><p>\u5B9A\u4E49 service \u914D\u7F6E\u6587\u4EF6\uFF0C\u547D\u540D\u4E3A httpd-svc.yaml</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>apiVersion: v1  
kind: Service  # \u6307\u660E\u8D44\u6E90\u7C7B\u578B\u662F service
metadata:  
  name: httpd-svc # service \u7684\u540D\u5B57\u662F httpd-svc
  labels:  
    name: httpd-svc 
spec:  
  ports:  # \u5C06 service 8080 \u7AEF\u53E3\u6620\u5C04\u5230 pod \u7684 80 \u7AEF\u53E3\uFF0C\u4F7F\u7528 TCP \u534F\u8BAE
  - port: 8080
    targetPort: 80  
    protocol: TCP  
  selector:  
    run: httpd # \u6307\u660E\u54EA\u4E9B label \u7684 pod \u4F5C\u4E3A service \u7684\u540E\u7AEF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884Ckubectl create -f httpd-svc.yaml\u521B\u5EFA service \u8D44\u6E90\uFF1A</p><h3 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h3>`,19),v={href:"https://www.cnblogs.com/bakari/p/10509484.html",target:"_blank",rel:"noopener noreferrer"},m=n("Kubernetes \u7B14\u8BB0 05 yaml \u914D\u7F6E\u6587\u4EF6\u8BE6\u89E3"),p=e("h2",{id:"\u5B66\u4E60\u8D44\u6599",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5B66\u4E60\u8D44\u6599","aria-hidden":"true"},"#"),n(" \u5B66\u4E60\u8D44\u6599")],-1),u={href:"https://coder4.com/homs_online/",target:"_blank",rel:"noopener noreferrer"},b=n("\u4ECE0\u52301\u5B9E\u6218\u5FAE\u670D\u52A1\u67B6\u6784"),h={href:"https://jimmysong.io/kubernetes-handbook/cloud-native/cloud-native-definition.html",target:"_blank",rel:"noopener noreferrer"},_=n("\u4E91\u539F\u751F"),g={href:"https://www.cnblogs.com/bakari/tag/Kubernetes/",target:"_blank",rel:"noopener noreferrer"},x=n("Linux\u4E91\u8BA1\u7B97\u7F51\u7EDC-tag:Kubernetes");function k(f,y){const i=d("ExternalLinkIcon");return r(),l("div",null,[o,e("p",null,[e("a",v,[m,a(i)])]),p,e("ul",null,[e("li",null,[e("a",u,[b,a(i)])]),e("li",null,[e("a",h,[_,a(i)])]),e("li",null,[e("a",g,[x,a(i)])])])])}var P=s(c,[["render",k],["__file","k8s-main.html.vue"]]);export{P as default};
