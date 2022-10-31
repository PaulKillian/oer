export const copy = (e, toCopy) => {    
    const copiedNode = document.getElementById(e.target.id)
    const copiedBadgeH4 = document.createElement('h4')
    const copiedBadgeSpan = document.createElement('span')
    copiedBadgeSpan.innerHTML = 'Copied!'
    copiedBadgeSpan.classList.add('badge', 'bg-success', 'h-25')
    copiedNode.parentNode.insertBefore(copiedBadgeSpan, copiedNode.nextSibling)
    
    setTimeout(() => {
        copiedBadgeSpan.innerHTML = ''
    }, 1500)

    navigator.clipboard.writeText(toCopy)
  };