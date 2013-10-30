/**
 * $Id: IKU.js 643 2009-07-09 15:19:14Z wingedfox $
 *
 * Inuktitut IME implementation
 *
 * This software is protected by patent No.2009611147 issued on 20.02.2009 by Russian Federal Service for Intellectual Property Patents and Trademarks.
 *
 * @author Konstantin Wiolowan
 * @copyright 2008-2009 Konstantin Wiolowan <wiolowan@mail.ru>
 * @version $Rev: 643 $
 * @lastchange $Author: wingedfox $ $Date: 2009-07-09 19:19:14 +0400 (Чт, 09 июл 2009) $
 */
VirtualKeyboard.Langs.IKU=new function(){var i= /[^acefghijklłmnopqrstuvwxyᖃᐁᕋᑕᐂᐅᐃᐸᐊᓴᖕᒐᕼᔭᑲᓚᖤᕙᓇᒪ]/,I={'ᐊi':'ᐁ','ᐃi':'ᐄ','ᐅu':'ᐆ','ᐊa':'ᐋ','ᐸi':'ᐯ','ᐱi':'ᐲ','ᐳu':'ᐴ','ᐸa':'ᐹ','ᑕi':'ᑌ','ᑎi':'ᑏ','ᑐu':'ᑑ','ᑕa':'ᑖ','ᑲi':'ᑫ','ᑭi':'ᑮ','ᑯu':'ᑰ','ᑲa':'ᑳ','ᒐi':'ᒉ','ᒋi':'ᒌ','ᒍu':'ᒎ','ᒐa':'ᒑ','ᒪi':'ᒣ','ᒥi':'ᒦ','ᒧu':'ᒨ','ᒪa':'ᒫ','ᓇi':'ᓀ','ᓂi':'ᓃ','ᓄu':'ᓅ','ᓇa':'ᓈ','ᓴi':'ᓭ','ᓯi':'ᓰ','ᓱu':'ᓲ','ᓴa':'ᓵ','ᓚi':'ᓓ','ᓕi':'ᓖ','ᓗu':'ᓘ','ᓚa':'ᓛ','ᔭi':'ᔦ','ᔨi':'ᔩ','ᔪu':'ᔫ','ᔭa':'ᔮ','ᕙi':'ᕓ','ᕕi':'ᕖ','ᕗu':'ᕘ','ᕙa':'ᕚ','ᕋi':'ᕃ','ᕆi':'ᕇ','ᕈu':'ᕉ','ᕋa':'ᕌ','ᖃi':'ᙯ','ᕿi':'ᖀ','ᖁu':'ᖂ','ᖃa':'ᖄ','ᖓi':'ᙰ','ᖏi':'ᖐ','ᖑu':'ᖒ','ᖓa':'ᖔ','ᙱi':'ᙲ','ᙳu':'ᙴ','ᙵa':'ᙶ','ᖠi':'ᖡ','ᖢu':'ᖣ','ᖤa':'ᖥ','ᐂ':'ᐂ','ᐧ':'','ᐊᐃ':'ᐁ','ᐃᐃ':'ᐄ','ᐅᐅ':'ᐆ','ᐊᐊ':'ᐋ','ᐃᐧ':'ᐄ','ᐅᐧ':'ᐆ','ᐊᐧ':'ᐋ','ᑉᐂ':'ᐰ','ᑉᐁ':'ᐯ','ᐸᐃ':'ᐯ','ᐱᐃ':'ᐲ','ᐳᐅ':'ᐴ','ᐸᐊ':'ᐹ','ᐱᐧ':'ᐲ','ᐳᐧ':'ᐴ','ᐸᐧ':'ᐹ','ᑦᐂ':'ᑍ','ᑦᐁ':'ᑌ','ᑕᐃ':'ᑌ','ᑎᐃ':'ᑏ','ᑐᐅ':'ᑑ','ᑕᐊ':'ᑖ','ᑎᐧ':'ᑏ','ᑐᐧ':'ᑑ','ᑕᐧ':'ᑖ','ᒃᐂ':'ᑬ','ᒃᐁ':'ᑫ','ᑲᐃ':'ᑫ','ᑭᐃ':'ᑮ','ᑯᐅ':'ᑰ','ᑲᐊ':'ᑳ','ᑭᐧ':'ᑮ','ᑯᐧ':'ᑰ','ᑲᐧ':'ᑳ','ᒡᐂ':'ᒊ','ᒡᐁ':'ᒉ','ᒐᐃ':'ᒉ','ᒋᐃ':'ᒌ','ᒍᐅ':'ᒎ','ᒐᐊ':'ᒑ','ᒋᐧ':'ᒌ','ᒍᐧ':'ᒎ','ᒐᐧ':'ᒑ','ᒻᐂ':'ᒤ','ᒻᐁ':'ᒣ','ᒪᐃ':'ᒣ','ᒥᐃ':'ᒦ','ᒧᐅ':'ᒨ','ᒪᐊ':'ᒫ','ᒥᐧ':'ᒦ','ᒧᐧ':'ᒨ','ᒪᐧ':'ᒫ','ᓐᐂ':'ᓁ','ᓐᐁ':'ᓀ','ᓇᐃ':'ᓀ','ᓂᐃ':'ᓃ','ᓄᐅ':'ᓅ','ᓇᐊ':'ᓈ','ᓂᐧ':'ᓃ','ᓄᐧ':'ᓅ','ᓇᐧ':'ᓈ','ᔅᐂ':'ᓮ','ᔅᐁ':'ᓭ','ᓴᐃ':'ᓭ','ᓯᐃ':'ᓰ','ᓱᐅ':'ᓲ','ᓴᐊ':'ᓵ','ᓯᐧ':'ᓰ','ᓱᐧ':'ᓲ','ᓴᐧ':'ᓵ','ᓪᐂ':'ᓔ','ᓪᐁ':'ᓓ','ᓚᐃ':'ᓓ','ᓕᐃ':'ᓖ','ᓗᐅ':'ᓘ','ᓚᐊ':'ᓛ','ᓕᐧ':'ᓖ','ᓗᐧ':'ᓘ','ᓚᐧ':'ᓛ','ᔾᐂ':'ᔧ','ᔾᐁ':'ᔦ','ᔭᐃ':'ᔦ','ᔨᐃ':'ᔩ','ᔪᐅ':'ᔫ','ᔭᐊ':'ᔮ','ᔨᐧ':'ᔩ','ᔪᐧ':'ᔫ','ᔭᐧ':'ᔮ','ᕝᐂ':'ᕔ','ᕝᐁ':'ᕓ','ᕙᐃ':'ᕓ','ᕕᐃ':'ᕖ','ᕗᐅ':'ᕘ','ᕙᐊ':'ᕚ','ᕕᐧ':'ᕖ','ᕗᐧ':'ᕘ','ᕙᐧ':'ᕚ','ᕐᐂ':'ᕅ','ᕐᐁ':'ᕃ','ᕋᐃ':'ᕃ','ᕆᐃ':'ᕇ','ᕈᐅ':'ᕉ','ᕋᐊ':'ᕌ','ᕆᐧ':'ᕇ','ᕈᐧ':'ᕉ','ᕋᐧ':'ᕌ','ᖅᐂ':'ᕾ','ᖅᐁ':'ᙯ','ᖃᐃ':'ᙯ','ᕿᐃ':'ᖀ','ᖁᐅ':'ᖂ','ᖃᐊ':'ᖄ','ᕿᐧ':'ᖀ','ᖁᐧ':'ᖂ','ᖃᐧ':'ᖄ','ᖕᐁ':'ᙰ','ᖓᐃ':'ᙰ','ᖏᐃ':'ᖐ','ᖑᐅ':'ᖒ','ᖓᐊ':'ᖔ','ᖏᐧ':'ᖐ','ᖑᐧ':'ᖒ','ᖓᐧ':'ᖔ','ᙱᐃ':'ᙲ','ᙳᐅ':'ᙴ','ᙵᐊ':'ᙶ','ᙱᐧ':'ᙲ','ᙳᐧ':'ᙴ','ᙵᐧ':'ᙶ','ᖠᐃ':'ᖡ','ᖢᐅ':'ᖣ','ᖤᐊ':'ᖥ','ᖠᐧ':'ᖡ','ᖢᐧ':'ᖣ','ᖤᐧ':'ᖥ'},l={p:'ᑉ',t:'ᑦ',k:'ᒃ',g:'ᒡ',m:'ᒻ',n:'ᓐ',s:'ᔅ',h:'ᔅ',l:'ᓪ',j:'ᔾ',v:'ᕝ',r:'ᕐ',q:'ᖅ','ᓐg':'ᖕ','ᓐn':'ᓐᓐ','ᓐᓐg':'ᖖ','ł':'ᖦ','ᓪh':'ᖦ','x':'ᖦ',i:'ᐃ','u':'ᐅ','a':'ᐊ','ᑉi':'ᐱ','ᑉu':'ᐳ','ᑉa':'ᐸ','ᑦi':'ᑎ','ᑦu':'ᑐ','ᑦa':'ᑕ','ᒃi':'ᑭ','ᒃu':'ᑯ','ᒃa':'ᑲ','ᒡi':'ᒋ','ᒡu':'ᒍ','ᒡa':'ᒐ','ᒻi':'ᒥ','ᒻu':'ᒧ','ᒻa':'ᒪ','ᓐi':'ᓂ','ᓐu':'ᓄ','ᓐa':'ᓇ','ᔅi':'ᓯ','ᔅu':'ᓱ','ᔅa':'ᓴ','ᔅi':'ᓯ','ᔅu':'ᓱ','ᔅa':'ᓴ','ᓪi':'ᓕ','ᓪu':'ᓗ','ᓪa':'ᓚ','ᔾi':'ᔨ','ᔾu':'ᔪ','ᔾa':'ᔭ','ᕝi':'ᕕ','ᕝu':'ᕗ','ᕝa':'ᕙ','ᕐi':'ᕆ','ᕐu':'ᕈ','ᕐa':'ᕋ','ᖅi':'ᕿ','ᖅu':'ᖁ','ᖅa':'ᖃ','ᖕi':'ᖏ','ᖕu':'ᖑ','ᖕa':'ᖓ','ᖖi':'ᙱ','ᖖu':'ᙳ','ᖖa':'ᙵ','ᖦi':'ᖠ','ᖦu':'ᖢ','ᖦa':'ᖤ','ᐸ':'ᑉ','ᑕ':'ᑦ','ᑲ':'ᒃ','ᒐ':'ᒡ','ᒪ':'ᒻ','ᓇ':'ᓐ','ᓴ':'ᔅ','ᓚ':'ᓪ','ᔭ':'ᔾ','ᕙ':'ᕝ','ᕋ':'ᕐ','ᖃ':'ᖅ','ᓐᒐ':'ᖕ','ᓐᓇ':'ᓐᓐ','ᓐᓐᒐ':'ᖖ','ᖤ':'ᖦ','ᓪᕼ':'ᖦ','ᐸᐃ':'ᐯ','ᑉᐃ':'ᐱ','ᑉᐅ':'ᐳ','ᑉᐊ':'ᐸ','ᑦᐃ':'ᑎ','ᑦᐅ':'ᑐ','ᑦᐊ':'ᑕ','ᒃᐃ':'ᑭ','ᒃᐅ':'ᑯ','ᒃᐊ':'ᑲ','ᒡᐃ':'ᒋ','ᒡᐅ':'ᒍ','ᒡᐊ':'ᒐ','ᒻᐃ':'ᒥ','ᒻᐅ':'ᒧ','ᒻᐊ':'ᒪ','ᓐᐃ':'ᓂ','ᓐᐅ':'ᓄ','ᓐᐊ':'ᓇ','ᔅᐃ':'ᓯ','ᔅᐅ':'ᓱ','ᔅᐊ':'ᓴ','ᓪᐃ':'ᓕ','ᓪᐅ':'ᓗ','ᓪᐊ':'ᓚ','ᔾᐃ':'ᔨ','ᔾᐅ':'ᔪ','ᔾᐊ':'ᔭ','ᕝᐃ':'ᕕ','ᕝᐅ':'ᕗ','ᕝᐊ':'ᕙ','ᕐᐃ':'ᕆ','ᕐᐅ':'ᕈ','ᕐᐊ':'ᕋ','ᖅᐃ':'ᕿ','ᖅᐅ':'ᖁ','ᖅᐊ':'ᖃ','ᖕᐃ':'ᖏ','ᖕᐅ':'ᖑ','ᖕᐊ':'ᖓ','ᖖᐃ':'ᙱ','ᖖᐅ':'ᙳ','ᖖᐊ':'ᙵ','ᖦᐃ':'ᖠ','ᖦᐅ':'ᖢ','ᖦᐊ':'ᖤ'},o={'ᔾj':'ᑦᔾ','ᔾᔾ':'ᑦᔾ'};this.charProcessor=function(O,Q){if(O=='\u0008'){if(Q.length){return[Q.slice(0,-1),Q.length-1]}}else if(i.test(O)){return I[Q+O]||[Q+O,0]}else{var _=Q+O,c,C,e='';if(c=I[_]){return[c,0]}else if(c=l[_]){return[c,c.length]}else if(c=o[_]){return[c,1]}else{return[Q+(I[O]||l[O]||O),1]}}}};
