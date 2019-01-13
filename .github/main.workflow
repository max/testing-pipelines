workflow "build and test" {
  on = "push"
  resolves = ["build"]
}

action "build" {
  uses = "actions/docker@master"
  args = "build -t max/max.wtf ."
}
