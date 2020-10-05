/**
 * The working initialization script
 *
 * Copyright By Masuk Mia
 */
[
  'type_ninja',
  'type_ninja/keyboard',
  'type_ninja/field',
  'type_ninja/progress',
  'type_ninja/settings'
  
].each(function(file) {
  document.writeln('<scr'+'ipt src="src/'+file+'.js"></scr'+'ipt>');
})