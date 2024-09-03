function progress_count(){
    let all_p = document.querySelectorAll(".goal-raised p");
    let all_pro = document.querySelectorAll(".progress .bar-value");
    var iter = 0;
    for (let index = 0; index < 6; index=index+2) {
        let goal = Number(all_p[index].innerText.split("$")[1]);
        let raised = Number(all_p[index+1].innerText.split("$")[1]);
        let prog = Math.floor(raised/goal * 100);
        all_pro[iter].style.width = prog + "%";
        all_pro[iter].style.setProperty('--width',prog + "%");
        all_pro[iter].innerHTML = prog + "%";

        iter++;

    }
}
window.onload = progress_count();