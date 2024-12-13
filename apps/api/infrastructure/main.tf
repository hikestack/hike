// 定义 Terraform 配置的块，用于指定 Terraform 运行时所需的配置信息。
terraform {
  // required_providers 块声明了当前配置中所需的提供者及其版本要求。
  required_providers {
    // 声明一个名为 digitalocean 的提供者。
    digitalocean = {
      // source 指定了提供者的来源，这里是 DigitalOcean 的官方 Terraform 提供者。
      source  = "digitalocean/digitalocean"
      // version 指定了所需提供者的版本范围，"~> 2.0" 表示接受 2.x 系列的任何版本，但不会自动升级到 3.x。
      version = "~> 2.0"
    }
  }
}

// provider 块定义了如何连接到 DigitalOcean 服务。
provider "digitalocean" {
  // token 属性设置了 DigitalOcean API 的访问令牌，用于认证 Terraform 与 DigitalOcean 之间的通信。
  // 注意：在实际使用中，不应该在配置文件中硬编码敏感信息，而应该使用环境变量或 Terraform 的变量来管理。
  token = ""
}

// resource 块声明了一个 DigitalOcean 容器镜像仓库资源。
resource "digitalocean_container_registry" "registry" {
  // name 属性为容器镜像仓库指定了一个名称。
  name                   = "hikestack-registry"
  // subscription_tier_slug 属性设置了容器镜像仓库的订阅层级，这里使用的是 "starter"，即免费层。
  subscription_tier_slug = "starter"
}
