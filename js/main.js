


$(document).ready(() => {
    $(".task-tab").click((e) => {
        $(".task-tab").removeClass("active", 100)
        $(e.target).closest(".task-tab").addClass("active", 100)
    })

    $(".task-progress").click((e)=>{
        $(".task-page").addClass("n");
        $(".page-1").removeClass("n")
        console.log("hi")
    })
    
    $(".task-profile").click((e)=>{
        $(".task-page").addClass("n");
        $(".page-2").removeClass("n")
    })

    $(".a-window").mousedown((e) => {
        $(".a-window").css("z-index", "10")
        $(e.target).closest(".a-window").css("z-index", "999")
    })
    $(".dot1, .dot2").click((e) => {
        $(e.target).closest(".window").addClass("n")
    })

    $(".icon-dash").click((e)=>{
        $(".task").removeClass("n");
        
        $(".a-window").css("z-index", "10")
        $(".task").css("z-index", "999")
    })

    $(".icon-mail").click((e)=>{
        $(".mail").removeClass("n");
        $(".a-window").css("z-index", "10")
        $(".mail").css("z-index", "999")
    })

    $(".icon-figma").click((e)=>{
        $(".figma").removeClass("n");
        $(".a-window").css("z-index", "10")
        $(".figma").css("z-index", "999")
    })

    
    $(document).on("click", ".btnSubmit",()=>{
        $(".final-result").removeClass("n");
        $(".final-result").addClass("result-show", 1000)
    })

    $(document).on("click", ".btnRestart",()=>{
        $(".a-window").addClass("n");
        
        $(".final-result").addClass("n");
    })
})



// target elements with the "draggable" class
interact('.draggable')
    .draggable({
        // enable inertial throwing
        inertia: false,
        // keep the element within the area of it's parent
        modifiers: [
            interact.modifiers.restrictRect({
                restriction: 'parent',
                endOnly: true
            })
        ],
        // enable autoScroll
        autoScroll: true,

        listeners: {
            // call this function on every dragmove event
            move: dragMoveListener,

            // call this function on every dragend event
            end(event) {
                //var textEl = event.target.querySelector('p')

                // textEl && (textEl.textContent =
                //     'moved a distance of ' +
                //     (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                //         Math.pow(event.pageY - event.y0, 2) | 0))
                //         .toFixed(2) + 'px')
            }
        }
    })

function dragMoveListener(event) {
    var target = event.target
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    // translate the element
    target.style.webkitTransform =
        target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)'

    // update the posiion attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener