export function navManager() {

    const navParent = document.getElementsByClassName('navParent')[0]
    
    if (!navParent) return
    
    if (window.scrollY > 0) {

        navParent.classList.remove('navParentTop')
        return
    }

    navParent.classList.add('navParentTop')
}