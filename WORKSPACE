workspace(name = "bazel-build-reactjs-project")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive","http_file", "http_jar")
load("@bazel_tools//tools/build_defs/repo:git.bzl", "new_git_repository","git_repository")


http_archive(
    name = "bazel_skylib",
    sha256 = "b8a1527901774180afc798aeb28c4634bdccf19c4d98e7bdd1ce79d1fe9aaad7",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/bazel-skylib/releases/download/1.4.1/bazel-skylib-1.4.1.tar.gz",
        "https://github.com/bazelbuild/bazel-skylib/releases/download/1.4.1/bazel-skylib-1.4.1.tar.gz",
    ],
)

load("@bazel_skylib//:workspace.bzl", "bazel_skylib_workspace")

bazel_skylib_workspace()

### rules_cc start

http_archive(
    name = "rules_cc",
    urls = ["https://github.com/bazelbuild/rules_cc/releases/download/0.0.6/rules_cc-0.0.6.tar.gz"],
    sha256 = "3d9e271e2876ba42e114c9b9bc51454e379cbf0ec9ef9d40e2ae4cec61a31b40",
    strip_prefix = "rules_cc-0.0.6",
)
load("@rules_cc//cc:repositories.bzl", "rules_cc_dependencies", "rules_cc_toolchains")

rules_cc_dependencies()

rules_cc_toolchains()
### rules_cc end

http_archive(
    name = "io_bazel_rules_go",
    sha256 = "6dc2da7ab4cf5d7bfc7c949776b1b7c733f05e56edc4bcd9022bb249d2e2a996",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/rules_go/releases/download/v0.39.1/rules_go-v0.39.1.zip",
        "https://github.com/bazelbuild/rules_go/releases/download/v0.39.1/rules_go-v0.39.1.zip",
    ],
)

http_archive(
    name = "bazel_gazelle",
    sha256 = "727f3e4edd96ea20c29e8c2ca9e8d2af724d8c7778e7923a854b2c80952bc405",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/bazel-gazelle/releases/download/v0.30.0/bazel-gazelle-v0.30.0.tar.gz",
        "https://github.com/bazelbuild/bazel-gazelle/releases/download/v0.30.0/bazel-gazelle-v0.30.0.tar.gz",
    ],
)


load("@io_bazel_rules_go//go:deps.bzl", "go_register_toolchains", "go_rules_dependencies")
load("@bazel_gazelle//:deps.bzl", "gazelle_dependencies", "go_repository")

############################################################
# Define your own dependencies here using go_repository.
# Else, dependencies declared by rules_go/gazelle will be used.
# The first declaration of an external repository "wins".
############################################################

go_rules_dependencies()

go_register_toolchains(version = "1.20.4")

gazelle_dependencies()



#http_archive(
#    name = "remotejdk11_linux",
#    build_file = "@bazel_tools//tools/jdk:jdk.BUILD",
#    sha256 = "6c79bfe8bb06c82b72ef2f293a14becef56b3078d298dc75fda4225cbb2d3d0c",
#    strip_prefix = "zulu11.43.55-ca-jdk11.0.9.1-linux_x64",
#    urls = [
#       "https://mirror.bazel.build/openjdk/azul-zulu11.43.55-ca-jdk11.0.9.1/zulu11.43.55-ca-jdk11.0.9.1-linux_x64.tar.gz",
#       "https://cdn.azul.com/zulu/bin/zulu11.43.55-ca-jdk11.0.9.1-linux_x64.tar.gz",
#    ],
#)
#http_archive(
#    name = "remote_java_tools_linux",
#    sha256 = "355c27c603e8fc64bb0e2d7f809741f42576d5f4540f9ce28fd55922085af639",
#    urls = [
#        "https://mirror.bazel.build/bazel_java_tools/releases/javac11/v10.5/java_tools_javac11_linux-v10.5.zip",
#        "https://github.com/bazelbuild/java_tools/releases/download/javac11_v10.5/java_tools_javac11_linux-v10.5.zip",
#    ],
#)

### jsonnet start

go_repository(
    name = "com_github_fatih_color",
#    build_external = "external",
    importpath = "github.com/fatih/color",
    sum = "h1:mRhaKNwANqRgUBGKmnI5ZxEk7QXmjQeCcuYFMX2bfcc=",
    version = "v1.12.0",
)

http_archive(
    name = "io_bazel_rules_jsonnet",
    sha256 = "d20270872ba8d4c108edecc9581e2bb7f320afab71f8caa2f6394b5202e8a2c3",
    strip_prefix = "rules_jsonnet-0.4.0",
    urls = ["https://github.com/bazelbuild/rules_jsonnet/archive/0.4.0.tar.gz"],
)


CPP_JSONNET_SHA256 = "af7c9c102daab64de39fe9e479acc7389b8dd2d0647c2f9c6abc9c429070b0b8"
CPP_JSONNET_GITHASH = "813c7412d1c7a42737724d011618d0fd7865bc69"

http_archive(
    name = "cpp_jsonnet",
    sha256 = CPP_JSONNET_SHA256,
    strip_prefix = "jsonnet-%s" % CPP_JSONNET_GITHASH,
    urls = ["https://github.com/google/jsonnet/archive/%s.tar.gz" % CPP_JSONNET_GITHASH],
)

go_repository(
        name = "com_github_davecgh_go_spew",
        importpath = "github.com/davecgh/go-spew",
        sum = "h1:vj9j/u1bqnvCEfJOwUhtlOARqs3+rkHYY13jYWTU97c=",
        version = "v1.1.1",
)



go_repository(
    name = "com_github_kr_pretty",
    importpath = "github.com/kr/pretty",
    sum = "h1:L/CwN0zerZDmRFUapSPitk6f+Q3+0za1rQkzVuMiMFI=",
    version = "v0.1.0",
)
go_repository(
    name = "com_github_kr_pty",
    importpath = "github.com/kr/pty",
    sum = "h1:VkoXIwSboBpnk99O/KFauAEILuNHv5DVFKZMBN/gUgw=",
    version = "v1.1.1",
)
go_repository(
    name = "com_github_kr_text",
    importpath = "github.com/kr/text",
    sum = "h1:45sCR5RtlFHMR4UwH9sdQ5TC8v0qDQCHnXt+kaKSTVE=",
    version = "v0.1.0",
)
go_repository(
    name = "com_github_mattn_go_colorable",
    build_external = "external",
    importpath = "github.com/mattn/go-colorable",
    sum = "h1:c1ghPdyEDarC70ftn0y+A/Ee++9zz8ljHG1b13eJ0s8=",
    version = "v0.1.8",
)
go_repository(
    name = "com_github_mattn_go_isatty",
    build_external = "external",
    importpath = "github.com/mattn/go-isatty",
    sum = "h1:wuysRhFDzyxgEmMf5xjvJ2M9dZoWAXNNr5LSBS7uHXY=",
    version = "v0.0.12",
)
go_repository(
    name = "com_github_pmezard_go_difflib",
    importpath = "github.com/pmezard/go-difflib",
    sum = "h1:4DBwDE0NGyQoBHbLQYPwSUPoCMWR5BEzIk/f1lZbAQM=",
    version = "v1.0.0",
)
go_repository(
    name = "com_github_sergi_go_diff",
    importpath = "github.com/sergi/go-diff",
    sum = "h1:we8PVUC3FE2uYfodKH/nBHMSetSfHDR6scGdBi+erh0=",
    version = "v1.1.0",
)
go_repository(
    name = "com_github_stretchr_objx",
    importpath = "github.com/stretchr/objx",
    sum = "h1:4G4v2dO3VZwixGIRoQ5Lfboy6nUhCyYzaqnIAPPhYs4=",
    version = "v0.1.0",
)
go_repository(
    name = "com_github_stretchr_testify",
    importpath = "github.com/stretchr/testify",
    sum = "h1:2E4SXV/wtOkTonXsotYi4li6zVWxYlZuYNCXe9XRJyk=",
    version = "v1.4.0",
)
go_repository(
    name = "in_gopkg_check_v1",
    importpath = "gopkg.in/check.v1",
    sum = "h1:YR8cESwS4TdDjEe65xsg0ogRM/Nc3DYOhEAlW+xobZo=",
    version = "v1.0.0-20190902080502-41f04d3bba15",
)
go_repository(
    name = "in_gopkg_yaml_v2",
    importpath = "gopkg.in/yaml.v2",
    sum = "h1:VUgggvou5XRW9mHwD/yXxIYSMtY0zoKQf/v226p2nyo=",
    version = "v2.2.7",
)
go_repository(
    name = "io_k8s_sigs_yaml",
    importpath = "sigs.k8s.io/yaml",
    sum = "h1:4A07+ZFc2wgJwo8YNlQpr1rVlgUDlxXHhPJciaPY5gs=",
    version = "v1.1.0",
)
go_repository(
    name = "org_golang_x_crypto",
    importpath = "golang.org/x/crypto",
    sum = "h1:LF6fAI+IutBocDJ2OT0Q1g8plpYljMZ4+lty+dsqw3g=",
    version = "v0.9.0",
)
go_repository(
    name = "org_golang_x_net",
    importpath = "golang.org/x/net",
    sum = "h1:X2//UzNDwYmtCLn7To6G58Wr6f5ahEAQgKNzv9Y951M=",
    version = "v0.10.0",
)

go_repository(
    name = "org_golang_x_sys",
    importpath = "golang.org/x/sys",
    sum = "h1:EBmGv8NaZBZTWvrbjNoL6HVt+IVy3QDQpJs7VRIw3tU=",
    version = "v0.8.0",
)
go_repository(
    name = "org_golang_x_term",
    importpath = "golang.org/x/term",
    sum = "h1:n5xxQn2i3PC0yLAbjTpNT85q/Kgzcr2gIoX9OrJUols=",
    version = "v0.8.0",
)
go_repository(
    name = "org_golang_x_text",
    importpath = "golang.org/x/text",
    sum = "h1:2sjJmO8cDvYveuX97RDLsxlyUxLl+GHoLxBiRdHllBE=",
    version = "v0.9.0",
)

http_archive(
    name = "jsonnet",
    sha256 = "85c240c4740f0c788c4d49f9c9c0942f5a2d1c2ae58b2c71068107bc80a3ced4",
    strip_prefix = "jsonnet-0.18.0",
    urls = [
        "https://github.com/google/jsonnet/archive/v0.18.0.tar.gz",
    ],
)

http_archive(
    name = "google_jsonnet_go",
    sha256 = "20fdb3599c2325fb11a63860e7580705590faf732abf47ed144203715bd03a70",
    strip_prefix = "go-jsonnet-0d78479d37eabd9451892dd02be2470145b4d4fa",
    urls = ["https://github.com/google/go-jsonnet/archive/0d78479d37eabd9451892dd02be2470145b4d4fa.tar.gz"],
)
### jsonnet end

## nodejs start
node_version = "16.14.2"
http_archive(
    name = "rules_nodejs",
    sha256 = "764a3b3757bb8c3c6a02ba3344731a3d71e558220adcb0cf7e43c9bba2c37ba8",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/5.8.2/rules_nodejs-core-5.8.2.tar.gz"],
)
http_archive(
    name = "aspect_rules_js",
    sha256 = "bdbd6df52fc7963f55281fe0a140e21de8ec587ab711a8a2fff0715b6710a4f8",
    strip_prefix = "rules_js-1.32.0",
    url = "https://github.com/aspect-build/rules_js/releases/download/v1.32.0/rules_js-v1.32.0.tar.gz",
)

http_archive(
    name = "aspect_rules_webpack",
    sha256 = "21a85849d01eebbd0cb0a5c0120eb58e4d3275eda68565918e7c0d84e14d30d9",
    strip_prefix = "rules_webpack-0.13.0",
    url = "https://github.com/aspect-build/rules_webpack/releases/download/v0.13.0/rules_webpack-v0.13.0.tar.gz",
)

http_archive(
    name = "aspect_rules_ts",
    sha256 = "4c3f34fff9f96ffc9c26635d8235a32a23a6797324486c7d23c1dfa477e8b451",
    strip_prefix = "rules_ts-1.4.5",
    url = "https://github.com/aspect-build/rules_ts/releases/download/v1.4.5/rules_ts-v1.4.5.tar.gz",
)
http_archive(
    name = "aspect_rules_swc",
    sha256 = "b647c7c31feeb7f9330fff08b45f8afe7de674d3a9c89c712b8f9d1723d0c8f9",
    strip_prefix = "rules_swc-1.0.1",
    url = "https://github.com/aspect-build/rules_swc/releases/download/v1.0.1/rules_swc-v1.0.1.tar.gz",
)

http_archive(
    name = "aspect_rules_jest",
    sha256 = "098186ffc450f2a604843d8ba14217088a0e259ea6a03294af5360a7f1bcd3e8",
    strip_prefix = "rules_jest-0.19.5",
    url = "https://github.com/aspect-build/rules_jest/releases/download/v0.19.5/rules_jest-v0.19.5.tar.gz",
)

load("@aspect_rules_webpack//webpack:dependencies.bzl", "rules_webpack_dependencies")
rules_webpack_dependencies()
load("@aspect_rules_swc//swc:dependencies.bzl", "rules_swc_dependencies")
rules_swc_dependencies()
load("@aspect_rules_js//js:repositories.bzl", "rules_js_dependencies")
rules_js_dependencies()



# Fetches a SWC cli from
# https://github.com/swc-project/swc/releases
# If you'd rather compile it from source, you can use rules_rust, fetch the project,
# then register the toolchain yourself. (Note, this is not yet documented)
load("@aspect_rules_swc//swc:repositories.bzl", "LATEST_SWC_VERSION", "swc_register_toolchains")
swc_register_toolchains(
    name = "swc",
    swc_version = "v1.3.42",
)

load("@aspect_rules_ts//ts:repositories.bzl", "rules_ts_dependencies")
rules_ts_dependencies(
    # This keeps the TypeScript version in-sync with the editor, which is typically best.
    ts_version_from = "//:package.json",

    # Alternatively, you could pick a specific version, or use
    # load("@aspect_rules_ts//ts:repositories.bzl", "LATEST_TYPESCRIPT_VERSION")
    # ts_version = LATEST_TYPESCRIPT_VERSION
)


load("@aspect_rules_jest//jest:dependencies.bzl", "rules_jest_dependencies")
rules_jest_dependencies()

load("@rules_nodejs//nodejs:repositories.bzl", "nodejs_register_toolchains")

nodejs_register_toolchains(
    name = "nodejs",
    node_version = node_version,
)
load("@aspect_rules_js//npm:repositories.bzl", "npm_translate_lock")
npm_translate_lock(
    name = "npm",
    pnpm_lock = "//:pnpm-lock.yaml",
    verify_node_modules_ignored = "//:.bazelignore",
    npmrc = "//:.npmrc",
    pnpm_version = "7.25.0",

    data = [
         "//:package.json",
         "//:pnpm-workspace.yaml",
         "//ui:package.json",
         "//ui/src:package.json",
    ],
#    generate_bzl_library_targets = True,

    bins = {
        # derived from "bin" attribute in node_modules/react-scripts/package.json
        "react-scripts": {
            "react-scripts": "./bin/react-scripts.js",
        },
        "typescript": {
            "tsc": "./bin/tsc",
            "tsserver": "./bin/tsserver",
        },
    },
    public_hoist_packages = {
#        "eslint-config-react-app": [""],
        "eslint@registry.npmmirror.com/eslint@8.0.0": [""]
    },
)

load("@npm//:repositories.bzl", "npm_repositories")

npm_repositories()


## python start

http_archive(
    name = "rules_python",
    sha256 = "a644da969b6824cc87f8fe7b18101a8a6c57da5db39caa6566ec6109f37d2141",
    strip_prefix = "rules_python-0.20.0",
    url = "https://github.com/bazelbuild/rules_python/releases/download/0.20.0/rules_python-0.20.0.tar.gz",
)

load("@rules_python//python:repositories.bzl", "py_repositories")


py_repositories()

load("@rules_python//python:repositories.bzl", "python_register_toolchains")

python_register_toolchains(
    name = "python3_11",
#     sqlfluff 必须使用3.11版本，3.9会报错
    # Available versions are listed in @rules_python//python:versions.bzl.
    # We recommend using the same version your team is already standardized on.
    python_version = "3.11",
)

load("@python3_11//:defs.bzl", interpreter_3_11 = "interpreter")

load("@rules_python//python:pip.bzl", "pip_parse")
