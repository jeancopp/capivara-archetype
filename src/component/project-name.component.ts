export class ProjectName {
    public $constants;
    public $functions;
    public $bindings;

    private visibleMessage: boolean;

    constructor(private $scope, private $element) { }

    $onInit() {
    }

    $destroy() {
        console.log('Component destroyed.');
    }

    toogleMessage() {
        this.visibleMessage = !this.visibleMessage;
    }

}
