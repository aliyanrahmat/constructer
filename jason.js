// js constructer : uesd for passing the parameters of parent div to the child ...

class Employe{
    login(){
        console.log("employee has been loged in")
    }
    logedout(out){
        console.log(`${out} employee has been logedout`)
    }
    requestleave(leaves){
        console.log(`employee has requested for ${leaves} leave`)
    }

}
class programmer extends Employe{
    requestcoffe(x){
        console.log(`employee has requested for ${x} coffee`)
    }
    requestleave(leaves){
        super.requestleave(4)
        console.log("one extra is granted")
        // console.log(`employe has been requested for ${leaves+1} leaves (one extra)`)
    }
}

let e = new programmer()
e.login()
e.requestleave(3)
e.requestcoffe(6)
e.logedout(5)
