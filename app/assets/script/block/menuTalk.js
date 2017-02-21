(function (doc) {
  let $menuTalkEdit = doc.querySelector('#jsMenuTalkEdit')
  let $menuTalkSubItem = doc.querySelector('.menuTalk-subItem')

  $menuTalkEdit.addEventListener('click', function(event) {
    this.classList.add('menuTalk-item-action_isDisable')
    $menuTalkSubItem.classList.add('menuTalk-subItem_isActive')

    event.preventDefault()
  })
  $menuTalkSubItem.addEventListener('click', function(event) {
    this.classList.remove('menuTalk-subItem_isActive')
    $menuTalkEdit.classList.remove('menuTalk-item-action_isDisable')

    event.preventDefault()
  })
})(document)
