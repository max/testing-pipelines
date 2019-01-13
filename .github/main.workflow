workflow "build and test" {
  on = "push"
  resolves = ["test"]
}

action "build" {
  uses = "actions/docker"
  runs = "build -t max/max.wtf"
}
