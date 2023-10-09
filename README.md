# bazel-build-reactjs-project
A demo for building ReactJS project using Bazel in a monorepo

# INTRODUCE



To update pnpm-lock.yaml, run this command in the root folder of the project: `bazel run -- @pnpm//:pnpm --dir $PWD install --lockfile-only`