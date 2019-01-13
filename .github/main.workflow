workflow "build and test" {
  on = "push"
  resolves = ["build"]
}

action "build" {
  uses = "actions/docker"
  runs = "build -t max/max.wtf"
}
