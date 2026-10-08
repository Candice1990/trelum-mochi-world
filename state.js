(function(root){'use strict';
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
function create(){return {x:.5,target:.5,score:0,misses:0,streak:0,elapsed:0,spawnIn:.7,drops:[],nextId:0,ended:false};}
function level(s){return Math.floor(s.score/5)+1;}
function step(s,dt,geometry,random=Math.random){const events=[];if(s.ended)return events;dt=clamp(dt,0,.05);s.elapsed+=dt;const edge=geometry.edge;s.target=clamp(s.target,edge,1-edge);s.x+=clamp(s.target-s.x,-dt*2.6,dt*2.6);s.x=clamp(s.x,edge,1-edge);const difficulty=Math.min(12,level(s)-1);const speed=.27+difficulty*.022;s.spawnIn-=dt;if(s.spawnIn<=0){const warmup=[.5,.28,.72];const x=s.nextId<3?warmup[s.nextId]:edge+random()*(1-edge*2);s.drops.push({id:s.nextId++,x,y:-.06,rotation:(random()-.5)*50});s.spawnIn=Math.max(.47,1.13-difficulty*.055);}
const remaining=[];for(const d of s.drops){d.y+=dt*speed;if(d.y>=geometry.catchY){if(Math.abs(d.x-s.x)<=geometry.catchWidth){s.score++;s.streak++;events.push({type:'catch',x:d.x,y:geometry.catchY,streak:s.streak});}else{s.misses++;s.streak=0;events.push({type:'miss',x:d.x,y:geometry.catchY});if(s.misses>=3){s.ended=true;events.push({type:'end'});break;}}}else remaining.push(d);}s.drops=s.ended?[]:remaining;return events;}
function readBest(raw){const n=Number(raw);return Number.isSafeInteger(n)&&n>=0&&n<=1000000?n:0;}
const api={create,step,level,readBest,clamp};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.SnackGame=api;
})(typeof window!=='undefined'?window:globalThis);
