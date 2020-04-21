provider "heroku" {
  version = "~> 2.0"
}

variable "dev_bahia" {
  description = "Dev Bahia Portal"
}

resource "heroku_app" "example" {
  name = "${var.dev_bahia}"
  region = "us"
}

# Build code & release to the app
resource "heroku_build" "example" {
  app = "${heroku_app.example.name}"
  buildpacks = ["https://github.com/mars/create-react-app-buildpack.git"]

  source = {
    url = "https://github.com/mars/cra-example-app/archive/v2.1.1.tar.gz"
    version = "2.1.1"
  }
}

# Launch the app's web process by scaling-up
resource "heroku_formation" "example" {
  app        = "${heroku_app.example.name}"
  type       = "web"
  quantity   = 1
  size       = "Standard-1x"
  depends_on = ["heroku_build.example"]
}

output "devbahia_app_url" {
  value = "https://${heroku_app.example.name}.herokuapp.com"
}