workflow "build and test" {
  on = "push"
  resolves = ["build"]
}

action "build" {
  uses = "actions/docker/cli@master"
  args = "build -t max/max.wtf ."
}
