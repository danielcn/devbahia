provider "heroku" {
  version = "~> 2.0"
}

resource "heroku_app" "dev_bahia" {
  name = "${var.dev_bahia}"
  region = "us"
}

# Build code & release to the app
resource "heroku_build" "dev_bahia" {
  app = "${heroku_app.dev_bahia.name}"
  buildpacks = ["https://github.com/mars/create-react-app-buildpack.git"]

  source = {
    url = "https://github.com/mars/cra-example-app/archive/v2.1.1.tar.gz"
    version = "2.1.1"
  }
}

# Launch the app's web process by scaling-up
resource "heroku_formation" "dev_bahia" {
  app        = "${heroku_app.dev_bahia.name}"
  type       = "web"
  quantity   = 1
  size       = "Standard-1x"
  depends_on = [heroku_build.dev_bahia]
}

output "devbahia_app_url" {
  value = "https://${heroku_app.dev_bahia.name}.herokuapp.com"
}