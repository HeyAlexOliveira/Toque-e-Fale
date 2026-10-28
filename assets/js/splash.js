/* Toque e Fale - tela de abertura animada (sprite do papagaio + logo). */
(function(){var s=document.getElementById("splash"),b=s.querySelector(".sp-bird"),g=s.querySelector(".sp-logo"),done=false,started=false,t=[],raf=0;
function end(){if(done)return;done=true;cancelAnimationFrame(raf);t.forEach(clearTimeout);s.classList.add("out");setTimeout(function(){s.remove()},600)}
/* papagaio: 6 frames do sprite [frame, ms]; o ciclo repete LOOPS vezes e termina no frame 6 (pouso) */
var FR=[[0,170],[1,120],[2,150],[3,120],[4,120],[5,170]],LOOPS=2,TL=[],acc=0,i,k,
still=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
function show(n){b.style.backgroundPosition=(n*20)+"% 0"}
for(k=0;k<LOOPS;k++)for(i=0;i<FR.length;i++){TL.push([acc,FR[i][0]]);acc+=FR[i][1]+(k+i===0?150:0)}
show(still?5:0);
/* so comeca a animacao quando a imagem do papagaio ja foi decodificada (evita pular quadros em aparelhos lentos) */
function go(){if(started||done)return;started=true;requestAnimationFrame(function(){b.classList.add("on")});
if(!still){var t0=0;(function tick(now){if(done)return;if(!t0)t0=now;var e=now-t0,f=-1,n;for(n=0;n<TL.length&&TL[n][0]<=e;n++)f=TL[n][1];if(f>=0)show(f);if(e<acc)raf=requestAnimationFrame(tick)})(performance.now())}
t.push(setTimeout(function(){b.classList.remove("on");g.classList.add("on")},acc+350));
t.push(setTimeout(end,acc+350+1700))}
var m=(b.style.backgroundImage||"").match(/url\(["']?(.*?)["']?\)$/),im=new Image();
im.onload=go;im.onerror=go;if(m)im.src=m[1];else go();
if(im.decode&&m)im.decode().then(go,go);
t.push(setTimeout(go,900));
s.addEventListener("click",end);})();
