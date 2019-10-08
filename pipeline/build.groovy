class BaseJob {
    def jenkins

    def stage(Map args, Closure block) {
        assert args.name, 'stage name is required'
        String name = args.name
        int time = (null == args.timeout) ? 600 : args.timeout
        Boolean activity = (null == args.activity) ? true : args.activity
        jenkins.timeout(time: time, activity: activity, unit: 'SECONDS') {
            try {
                jenkins.stage(name, block)
            } catch (e) {
                jenkins.error "Failed on stage ${name}\n${e.dump()}"
            }
        }
    }
}

class LifeJob extends BaseJob {

    void run() {
        jenkins.node('cdwc') {
            stage(name: 'checkout') { checkout() }
            stage(name: 'build frontend') { buildFrontEnd() }
            stage(name: 'start app') { startApp() }
        }
    }

    void checkout() {
        jenkins.checkout([
                $class: 'GitSCM',
                branches: [[name: '*/dev']],
                doGenerateSubmoduleConfigurations: false,
                extensions: [], submoduleCfg: [],
                userRemoteConfigs: [[url: 'https://github.com/SunriseLZL/seafood-vue.git']]
        ])

        jenkins.sh 'npm config set registry https://registry.npm.taobao.org/'
    }

    void buildFrontEnd() {
        jenkins.dir('frontend') {
            jenkins.sh 'npm install --unsafe-perm'
            jenkins.sh 'npm run build'
        }
    }

    void startApp() {
        jenkins.sh 'npm install --unsafe-perm'
        jenkins.sh 'npm start'
    }
}

new LifeJob(jenkins: this).run()
