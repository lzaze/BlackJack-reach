// Automatically generated with Reach 0.1.10 (9f925e05)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (9f925e05)';
export const _backendVersion = 14;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v249 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v250 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v250, v249],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:88:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v250, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v254, v255], secs: v257, time: v256, didSend: v31, from: v253 } = txn1;
      
      sim_r.txns.push({
        amt: v254,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v266 = stdlib.add(v256, v255);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v254, v255], secs: v257, time: v256, didSend: v31, from: v253 } = txn1;
  ;
  const v266 = stdlib.add(v256, v255);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v266],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v253, v254, v255, v266],
      evt_cnt: 0,
      funcNum: 2,
      lct: v256,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v410, time: v409, didSend: v215, from: v408 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v254,
          kind: 'from',
          to: v253,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v410, time: v409, didSend: v215, from: v408 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:80:29:application',
      fs: ['at ./index.rsh:79:9:application call to [unknown function] (defined at: ./index.rsh:79:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:78:28:function exp)', 'at ./index.rsh:94:63:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v272, time: v271, didSend: v40, from: v270 } = txn2;
    const v274 = stdlib.add(v254, v254);
    ;
    let v275 = stdlib.checkedBigNumberify('./index.rsh:96:17:decimal', stdlib.UInt_max, '0');
    let v276 = v271;
    let v283 = v274;
    
    while (await (async () => {
      const v287 = stdlib.eq(v275, stdlib.checkedBigNumberify('./index.rsh:98:21:decimal', stdlib.UInt_max, '0'));
      
      return v287;})()) {
      const v294 = stdlib.add(v276, v255);
      const v298 = stdlib.protect(ctc0, await interact.getCard(), {
        at: './index.rsh:102:42:application',
        fs: ['at ./index.rsh:101:15:application call to [unknown function] (defined at: ./index.rsh:101:19:function exp)'],
        msg: 'getCard',
        who: 'Alice'
        });
      const v299 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:53:31:application',
        fs: ['at ./index.rsh:103:56:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:101:15:application call to [unknown function] (defined at: ./index.rsh:101:19:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v300 = stdlib.digest(ctc1, [v299, v298]);
      
      const txn3 = await (ctc.sendrecv({
        args: [v253, v254, v255, v270, v283, v294, v300],
        evt_cnt: 1,
        funcNum: 4,
        lct: v276,
        onlyIf: true,
        out_tys: [ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:106:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v303], secs: v305, time: v304, didSend: v61, from: v302 } = txn3;
          
          ;
          const v306 = stdlib.addressEq(v253, v302);
          ;
          const v313 = stdlib.add(v304, v255);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v294],
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v253, v254, v255, v270, v283, v294],
          evt_cnt: 0,
          funcNum: 5,
          lct: v276,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v383, time: v382, didSend: v177, from: v381 } = txn4;
            
            ;
            const v384 = stdlib.addressEq(v253, v381);
            const v385 = stdlib.addressEq(v270, v381);
            const v386 = v384 ? true : v385;
            ;
            sim_r.txns.push({
              amt: v283,
              kind: 'from',
              to: v270,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v383, time: v382, didSend: v177, from: v381 } = txn4;
        ;
        const v384 = stdlib.addressEq(v253, v381);
        const v385 = stdlib.addressEq(v270, v381);
        const v386 = v384 ? true : v385;
        stdlib.assert(v386, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:107:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:80:29:application',
          fs: ['at ./index.rsh:79:9:application call to [unknown function] (defined at: ./index.rsh:79:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:78:28:function exp)', 'at ./index.rsh:107:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v303], secs: v305, time: v304, didSend: v61, from: v302 } = txn3;
        ;
        const v306 = stdlib.addressEq(v253, v302);
        stdlib.assert(v306, {
          at: './index.rsh:106:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v313 = stdlib.add(v304, v255);
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc0],
          timeoutAt: ['time', v313],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v253, v254, v255, v270, v283, v303, v313],
            evt_cnt: 0,
            funcNum: 7,
            lct: v304,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v365, time: v364, didSend: v143, from: v363 } = txn5;
              
              ;
              const v366 = stdlib.addressEq(v253, v363);
              const v367 = stdlib.addressEq(v270, v363);
              const v368 = v366 ? true : v367;
              ;
              sim_r.txns.push({
                amt: v283,
                kind: 'from',
                to: v253,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v365, time: v364, didSend: v143, from: v363 } = txn5;
          ;
          const v366 = stdlib.addressEq(v253, v363);
          const v367 = stdlib.addressEq(v270, v363);
          const v368 = v366 ? true : v367;
          stdlib.assert(v368, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:115:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:80:29:application',
            fs: ['at ./index.rsh:79:9:application call to [unknown function] (defined at: ./index.rsh:79:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:78:28:function exp)', 'at ./index.rsh:115:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v319], secs: v321, time: v320, didSend: v71, from: v318 } = txn4;
          ;
          const v322 = stdlib.addressEq(v270, v318);
          stdlib.assert(v322, {
            at: './index.rsh:114:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v329 = stdlib.add(v320, v255);
          const txn5 = await (ctc.sendrecv({
            args: [v253, v254, v255, v270, v283, v303, v319, v329, v299, v298],
            evt_cnt: 2,
            funcNum: 8,
            lct: v320,
            onlyIf: true,
            out_tys: [ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:122:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v334, v335], secs: v337, time: v336, didSend: v81, from: v333 } = txn5;
              
              ;
              const v338 = stdlib.addressEq(v253, v333);
              ;
              const v339 = stdlib.digest(ctc1, [v334, v335]);
              const v340 = stdlib.digestEq(v303, v339);
              ;
              const v341 = stdlib.lt(v335, v319);
              const v342 = stdlib.lt(v319, v335);
              const v343 = v342 ? stdlib.checkedBigNumberify('./index.rsh:11:72:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:11:76:decimal', stdlib.UInt_max, '0');
              const v344 = v341 ? stdlib.checkedBigNumberify('./index.rsh:11:51:decimal', stdlib.UInt_max, '1') : v343;
              const cv275 = v344;
              const cv276 = v336;
              const cv283 = v283;
              
              await (async () => {
                const v275 = cv275;
                const v276 = cv276;
                const v283 = cv283;
                
                if (await (async () => {
                  const v287 = stdlib.eq(v275, stdlib.checkedBigNumberify('./index.rsh:98:21:decimal', stdlib.UInt_max, '0'));
                  
                  return v287;})()) {
                  const v294 = stdlib.add(v276, v255);
                  sim_r.isHalt = false;
                  }
                else {
                  const v399 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:130:12:decimal', stdlib.UInt_max, '2'), v254);
                  const v400 = stdlib.eq(v275, stdlib.checkedBigNumberify('./index.rsh:130:37:decimal', stdlib.UInt_max, '1'));
                  const v401 = v400 ? v253 : v270;
                  sim_r.txns.push({
                    amt: v399,
                    kind: 'from',
                    to: v401,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v329],
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v253, v254, v255, v270, v283, v303, v319, v329],
              evt_cnt: 0,
              funcNum: 9,
              lct: v320,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v347, time: v346, didSend: v109, from: v345 } = txn6;
                
                ;
                const v348 = stdlib.addressEq(v253, v345);
                const v349 = stdlib.addressEq(v270, v345);
                const v350 = v348 ? true : v349;
                ;
                sim_r.txns.push({
                  amt: v283,
                  kind: 'from',
                  to: v270,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v347, time: v346, didSend: v109, from: v345 } = txn6;
            ;
            const v348 = stdlib.addressEq(v253, v345);
            const v349 = stdlib.addressEq(v270, v345);
            const v350 = v348 ? true : v349;
            stdlib.assert(v350, {
              at: 'reach standard library:189:11:dot',
              fs: ['at ./index.rsh:123:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc3, await interact.informTimeout(), {
              at: './index.rsh:80:29:application',
              fs: ['at ./index.rsh:79:9:application call to [unknown function] (defined at: ./index.rsh:79:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:78:28:function exp)', 'at ./index.rsh:123:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v334, v335], secs: v337, time: v336, didSend: v81, from: v333 } = txn5;
            ;
            const v338 = stdlib.addressEq(v253, v333);
            stdlib.assert(v338, {
              at: './index.rsh:122:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v339 = stdlib.digest(ctc1, [v334, v335]);
            const v340 = stdlib.digestEq(v303, v339);
            stdlib.assert(v340, {
              at: 'reach standard library:58:17:application',
              fs: ['at ./index.rsh:124:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v341 = stdlib.lt(v335, v319);
            const v342 = stdlib.lt(v319, v335);
            const v343 = v342 ? stdlib.checkedBigNumberify('./index.rsh:11:72:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:11:76:decimal', stdlib.UInt_max, '0');
            const v344 = v341 ? stdlib.checkedBigNumberify('./index.rsh:11:51:decimal', stdlib.UInt_max, '1') : v343;
            const cv275 = v344;
            const cv276 = v336;
            const cv283 = v283;
            
            v275 = cv275;
            v276 = cv276;
            v283 = cv283;
            
            continue;}
          
          }
        
        }
      
      }
    const v399 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:130:12:decimal', stdlib.UInt_max, '2'), v254);
    const v400 = stdlib.eq(v275, stdlib.checkedBigNumberify('./index.rsh:130:37:decimal', stdlib.UInt_max, '1'));
    const v401 = v400 ? v253 : v270;
    ;
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v254, v255], secs: v257, time: v256, didSend: v31, from: v253 } = txn1;
  ;
  const v266 = stdlib.add(v256, v255);
  stdlib.protect(ctc1, await interact.acceptWager(v254), {
    at: './index.rsh:92:25:application',
    fs: ['at ./index.rsh:91:11:application call to [unknown function] (defined at: ./index.rsh:91:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v253, v254, v255, v266],
    evt_cnt: 0,
    funcNum: 1,
    lct: v256,
    onlyIf: true,
    out_tys: [],
    pay: [v254, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v272, time: v271, didSend: v40, from: v270 } = txn2;
      
      const v274 = stdlib.add(v254, v254);
      sim_r.txns.push({
        amt: v254,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v275 = stdlib.checkedBigNumberify('./index.rsh:96:17:decimal', stdlib.UInt_max, '0');
      const v276 = v271;
      const v283 = v274;
      
      if (await (async () => {
        const v287 = stdlib.eq(v275, stdlib.checkedBigNumberify('./index.rsh:98:21:decimal', stdlib.UInt_max, '0'));
        
        return v287;})()) {
        const v294 = stdlib.add(v276, v255);
        sim_r.isHalt = false;
        }
      else {
        const v399 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:130:12:decimal', stdlib.UInt_max, '2'), v254);
        const v400 = stdlib.eq(v275, stdlib.checkedBigNumberify('./index.rsh:130:37:decimal', stdlib.UInt_max, '1'));
        const v401 = v400 ? v253 : v270;
        sim_r.txns.push({
          amt: v399,
          kind: 'from',
          to: v401,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v266],
    tys: [ctc4, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v253, v254, v255, v266],
      evt_cnt: 0,
      funcNum: 2,
      lct: v256,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v410, time: v409, didSend: v215, from: v408 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v254,
          kind: 'from',
          to: v253,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v410, time: v409, didSend: v215, from: v408 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:80:29:application',
      fs: ['at ./index.rsh:79:9:application call to [unknown function] (defined at: ./index.rsh:79:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:78:28:function exp)', 'at ./index.rsh:94:63:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v272, time: v271, didSend: v40, from: v270 } = txn2;
    const v274 = stdlib.add(v254, v254);
    ;
    let v275 = stdlib.checkedBigNumberify('./index.rsh:96:17:decimal', stdlib.UInt_max, '0');
    let v276 = v271;
    let v283 = v274;
    
    while (await (async () => {
      const v287 = stdlib.eq(v275, stdlib.checkedBigNumberify('./index.rsh:98:21:decimal', stdlib.UInt_max, '0'));
      
      return v287;})()) {
      const v294 = stdlib.add(v276, v255);
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: ['time', v294],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v253, v254, v255, v270, v283, v294],
          evt_cnt: 0,
          funcNum: 5,
          lct: v276,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v383, time: v382, didSend: v177, from: v381 } = txn4;
            
            ;
            const v384 = stdlib.addressEq(v253, v381);
            const v385 = stdlib.addressEq(v270, v381);
            const v386 = v384 ? true : v385;
            ;
            sim_r.txns.push({
              amt: v283,
              kind: 'from',
              to: v270,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v383, time: v382, didSend: v177, from: v381 } = txn4;
        ;
        const v384 = stdlib.addressEq(v253, v381);
        const v385 = stdlib.addressEq(v270, v381);
        const v386 = v384 ? true : v385;
        stdlib.assert(v386, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:107:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:80:29:application',
          fs: ['at ./index.rsh:79:9:application call to [unknown function] (defined at: ./index.rsh:79:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:78:28:function exp)', 'at ./index.rsh:107:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v303], secs: v305, time: v304, didSend: v61, from: v302 } = txn3;
        ;
        const v306 = stdlib.addressEq(v253, v302);
        stdlib.assert(v306, {
          at: './index.rsh:106:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v313 = stdlib.add(v304, v255);
        const v317 = stdlib.protect(ctc0, await interact.getCard(), {
          at: './index.rsh:112:50:application',
          fs: ['at ./index.rsh:111:13:application call to [unknown function] (defined at: ./index.rsh:111:17:function exp)'],
          msg: 'getCard',
          who: 'Bob'
          });
        
        const txn4 = await (ctc.sendrecv({
          args: [v253, v254, v255, v270, v283, v303, v313, v317],
          evt_cnt: 1,
          funcNum: 6,
          lct: v304,
          onlyIf: true,
          out_tys: [ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:114:9:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v319], secs: v321, time: v320, didSend: v71, from: v318 } = txn4;
            
            ;
            const v322 = stdlib.addressEq(v270, v318);
            ;
            const v329 = stdlib.add(v320, v255);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v313],
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v253, v254, v255, v270, v283, v303, v313],
            evt_cnt: 0,
            funcNum: 7,
            lct: v304,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v365, time: v364, didSend: v143, from: v363 } = txn5;
              
              ;
              const v366 = stdlib.addressEq(v253, v363);
              const v367 = stdlib.addressEq(v270, v363);
              const v368 = v366 ? true : v367;
              ;
              sim_r.txns.push({
                amt: v283,
                kind: 'from',
                to: v253,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v365, time: v364, didSend: v143, from: v363 } = txn5;
          ;
          const v366 = stdlib.addressEq(v253, v363);
          const v367 = stdlib.addressEq(v270, v363);
          const v368 = v366 ? true : v367;
          stdlib.assert(v368, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:115:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:80:29:application',
            fs: ['at ./index.rsh:79:9:application call to [unknown function] (defined at: ./index.rsh:79:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:78:28:function exp)', 'at ./index.rsh:115:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v319], secs: v321, time: v320, didSend: v71, from: v318 } = txn4;
          ;
          const v322 = stdlib.addressEq(v270, v318);
          stdlib.assert(v322, {
            at: './index.rsh:114:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v329 = stdlib.add(v320, v255);
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 2,
            funcNum: 8,
            out_tys: [ctc0, ctc0],
            timeoutAt: ['time', v329],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v253, v254, v255, v270, v283, v303, v319, v329],
              evt_cnt: 0,
              funcNum: 9,
              lct: v320,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v347, time: v346, didSend: v109, from: v345 } = txn6;
                
                ;
                const v348 = stdlib.addressEq(v253, v345);
                const v349 = stdlib.addressEq(v270, v345);
                const v350 = v348 ? true : v349;
                ;
                sim_r.txns.push({
                  amt: v283,
                  kind: 'from',
                  to: v270,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v347, time: v346, didSend: v109, from: v345 } = txn6;
            ;
            const v348 = stdlib.addressEq(v253, v345);
            const v349 = stdlib.addressEq(v270, v345);
            const v350 = v348 ? true : v349;
            stdlib.assert(v350, {
              at: 'reach standard library:189:11:dot',
              fs: ['at ./index.rsh:123:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:80:29:application',
              fs: ['at ./index.rsh:79:9:application call to [unknown function] (defined at: ./index.rsh:79:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:78:28:function exp)', 'at ./index.rsh:123:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v334, v335], secs: v337, time: v336, didSend: v81, from: v333 } = txn5;
            ;
            const v338 = stdlib.addressEq(v253, v333);
            stdlib.assert(v338, {
              at: './index.rsh:122:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v339 = stdlib.digest(ctc3, [v334, v335]);
            const v340 = stdlib.digestEq(v303, v339);
            stdlib.assert(v340, {
              at: 'reach standard library:58:17:application',
              fs: ['at ./index.rsh:124:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v341 = stdlib.lt(v335, v319);
            const v342 = stdlib.lt(v319, v335);
            const v343 = v342 ? stdlib.checkedBigNumberify('./index.rsh:11:72:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:11:76:decimal', stdlib.UInt_max, '0');
            const v344 = v341 ? stdlib.checkedBigNumberify('./index.rsh:11:51:decimal', stdlib.UInt_max, '1') : v343;
            const cv275 = v344;
            const cv276 = v336;
            const cv283 = v283;
            
            v275 = cv275;
            v276 = cv276;
            v283 = cv283;
            
            continue;}
          
          }
        
        }
      
      }
    const v399 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:130:12:decimal', stdlib.UInt_max, '2'), v254);
    const v400 = stdlib.eq(v275, stdlib.checkedBigNumberify('./index.rsh:130:37:decimal', stdlib.UInt_max, '1'));
    const v401 = v400 ? v253 : v270;
    ;
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAOAAFQBQkgCAcoAniAAVgwJgMBAAEBACI1ADEYQQSWKmRJIls1ASEGWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0klDEACNEkhBwxAAUBJIQYMQADmSSEEDEAAViEEEkQhBDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVzAgNf+ABKIFZo6wMgY0AyELWw9ENANXACAxABI0/zEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgOuSCEENAESRDQESSISTDQCEhFEKGQpZFBJNQNJVwAgNf8hCls1/kk1BUkiWzX9IQZbNfyABDUaKtA0/RZQNPwWULAyBjQDIQtbDEQ0/zEAEkQ0A1dYIDT9FjT8FlABEkQ0/zQDIQVbNAMhCFs0A1cwICIhCTT+NPwMTSM0/DT+DE0yBjQDJFtCAsVIIQc0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gATiG7OpsDIGNAMhClsPRDT/MQASNANXMCAxABIRRLEisgE0AyRbsggjshA0/7IHs0IC0kmBBgxAAJdIIQc0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSlcAIDX/IQVbNf4hCFs1/VcwIDX8JFs1+1dYIDX6STUFFzX5gARw7e96NPkWULAyBjQDIQpbDEQ0/DEAEkQyBjT9CDX4NP80/hZQNP0WUDT8UDT7FlA0+lA0+RZQNPgWUChLAVcAf2cpSwFXfwlnSCEENQEyBjUCQgJPSCU0ARJENARJIhJMNAISEUQoZEk1A1cwIDX/gATMmZJcsDIGNAMhDFsPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0IB5UkhCQxAANBJgQQMQACISCU0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/IQVbNf4hCFs1/VcwIDX8JFs1+0k1BTX6gAQ4sCMtNPpQsDIGNAMhDFsMRDT/MQASRDIGNP0INfk0/zT+FlA0/RZQNPxQNPsWUDT6UDT5FlAoSwFXAH9nKUsBV38BZ0ghBzUBMgY1AkIBaiEJEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQ1bD0SxIrIBNAMhBVuyCCOyEDQDVwAgsgezQgEOSSMMQABISCM0ARJENARJIhJMNAISEUQoZEk1AyEFWzX/gASai5F0sDIGNAMhDVsMRDT/iAEwNANXACA0/zQDIQhbMQAiMgY0/0kIQgBgSCI0ARJENARJIhJMNAISEURJNQVJIls1/yEGWzX+gASs0R/DNP8WUDT+FlCwgaCNBogA5DT/iADfMgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgB7Nf81/jX9Nfw1+zX6Nfk0/SISQQAuNP40+wg1+DT5NPoWUDT7FlA0/FA0/xZQNPgWUChLAVcAYGdIJTUBMgY1AkIAOLEisgEhCTT6C7III7IQNPw0+TT9IxJNsgezQgAAMRklEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 136,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v254",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v255",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v254",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v255",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v303",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v319",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v334",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v335",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v303",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v319",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v334",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v335",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001b1d38038062001b1d83398101604081905262000026916200024b565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f903414600762000144565b6020808301510151620000b39043620002ab565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a0909101909352805191926200013a92600292909101906200016e565b505050506200030f565b816200016a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017c90620002d2565b90600052602060002090601f016020900481019282620001a05760008555620001eb565b82601f10620001bb57805160ff1916838001178555620001eb565b82800160010185558215620001eb579182015b82811115620001eb578251825591602001919060010190620001ce565b50620001f9929150620001fd565b5090565b5b80821115620001f95760008155600101620001fe565b604080519081016001600160401b03811182821017156200024557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025f57600080fd5b6200026962000214565b835181526040601f19830112156200028057600080fd5b6200028a62000214565b60208581015182526040909501518582015293810193909352509092915050565b60008219821115620002cd57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002e757607f821691505b602082108114156200030957634e487b7160e01b600052602260045260246000fd5b50919050565b6117fe806200031f6000396000f3fe60806040526004361061009a5760003560e01c80638e314769116100615780638e31476914610115578063980b6eac14610128578063a209ad4e1461013b578063ab53f2c61461014e578063bf2c5b2414610171578063de7369981461018457005b80631e93b0f1146100a35780632c10a159146100c75780637eea518c146100da57806383230757146100ed5780638328d4c41461010257005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d53660046113dd565b610197565b6100a16100e83660046113dd565b61032e565b3480156100f957600080fd5b506001546100b4565b6100a1610110366004611400565b6104ac565b6100a16101233660046113dd565b6106de565b6100a16101363660046113dd565b610879565b6100a16101493660046113dd565b610b1a565b34801561015a57600080fd5b50610163610d5e565b6040516100be929190611412565b6100a161017f3660046113dd565b610dfb565b6100a16101923660046113dd565b610f92565b6101a760016000541460096110e8565b6101c1813515806101ba57506001548235145b600a6110e8565b6000808055600280546101d39061146f565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff9061146f565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b505050505080602001905181019061026491906114c0565b905061027781606001514310600b6110e8565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516102a8929190611539565b60405180910390a16102c18160200151341460086110e8565b6102c9611296565b815181516001600160a01b039091169052602080830180518351830152604080850151845190910152825133606090910152818301805160009052514392019190915251610317908061158c565b6020820151604001526103298161110d565b505050565b61033e600160005414600d6110e8565b6103588135158061035157506001548235145b600e6110e8565b60008080556002805461036a9061146f565b80601f01602080910402602001604051908101604052809291908181526020018280546103969061146f565b80156103e35780601f106103b8576101008083540402835291602001916103e3565b820191906000526020600020905b8154815290600101906020018083116103c657829003601f168201915b50505050508060200190518101906103fb91906114c0565b905061040f8160600151431015600f6110e8565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503383604051610440929190611539565b60405180910390a16104543415600c6110e8565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610491573d6000803e3d6000fd5b50600080805560018190556104a8906002906112ef565b5050565b6104bc60096000541460276110e8565b6104d6813515806104cf57506001548235145b60286110e8565b6000808055600280546104e89061146f565b80601f01602080910402602001604051908101604052809291908181526020018280546105149061146f565b80156105615780601f1061053657610100808354040283529160200191610561565b820191906000526020600020905b81548152906001019060200180831161054457829003601f168201915b505050505080602001905181019061057991906115a4565b905061058c8160e00151431060296110e8565b604080513381528335602080830191909152840135818301529083013560608201527f71b5093cb50f6a6c807d17b0994efe213c21a3f7fc6bd14bf50facf7ea99022e9060800160405180910390a16105e7341560246110e8565b80516105ff906001600160a01b0316331460256110e8565b6040805161064b9161062591602080870135928701359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8260a001511460266110e8565b610653611296565b815181516001600160a01b03918216905260208084015183519091015260408084015183518201526060808501518451931692019190915260c083015190840135106106b65760c08201516040840135116106af5760006106b9565b60026106b9565b60015b602080830180519290925281514391015260808301519051604001526103298161110d565b6106ee60056000541460176110e8565b6107088135158061070157506001548235145b60186110e8565b60008080556002805461071a9061146f565b80601f01602080910402602001604051908101604052809291908181526020018280546107469061146f565b80156107935780601f1061076857610100808354040283529160200191610793565b820191906000526020600020905b81548152906001019060200180831161077657829003601f168201915b50505050508060200190518101906107ab9190611650565b90506107bf8160a0015143101560196110e8565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516107f0929190611539565b60405180910390a1610804341560156110e8565b8051610838906001600160a01b0316331461082e5760608201516001600160a01b03163314610831565b60015b60166110e8565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f19350505050158015610491573d6000803e3d6000fd5b610889600760005414601c6110e8565b6108a38135158061089c57506001548235145b601d6110e8565b6000808055600280546108b59061146f565b80601f01602080910402602001604051908101604052809291908181526020018280546108e19061146f565b801561092e5780601f106109035761010080835404028352916020019161092e565b820191906000526020600020905b81548152906001019060200180831161091157829003601f168201915b505050505080602001905181019061094691906116e4565b905061095e6040518060200160405280600081525090565b61096f8260c001514310601e6110e8565b7fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c33846040516109a0929190611782565b60405180910390a16109b43415601a6110e8565b60608201516109cf906001600160a01b03163314601b6110e8565b60408201516109de904361158c565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a080860151908401528581013560c0840152835160e08401526009600055436001559051610aef9183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b60405160208183030381529060405260029080519060200190610b1392919061132c565b5050505050565b610b2a60056000541460126110e8565b610b4481351580610b3d57506001548235145b60136110e8565b600080805560028054610b569061146f565b80601f0160208091040260200160405190810160405280929190818152602001828054610b829061146f565b8015610bcf5780601f10610ba457610100808354040283529160200191610bcf565b820191906000526020600020905b815481529060010190602001808311610bb257829003601f168201915b5050505050806020019051810190610be79190611650565b9050610bff6040518060200160405280600081525090565b610c108260a00151431060146110e8565b7f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc03384604051610c41929190611782565b60405180910390a1610c55341560106110e8565b8151610c6d906001600160a01b0316331460116110e8565b6040820151610c7c904361158c565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b039081168083526020808601518185019081526040808801518187019081526060808a015187168189019081526080808c0151818b019081528d88013560a0808d019182528d5160c0808f0191825260076000554360015589519b8c019c909c529851978a0197909752945193880193909352905190971696850196909652945190830152925191810191909152905160e082015261010001610aef565b600060606000546002808054610d739061146f565b80601f0160208091040260200160405190810160405280929190818152602001828054610d9f9061146f565b8015610dec5780601f10610dc157610100808354040283529160200191610dec565b820191906000526020600020905b815481529060010190602001808311610dcf57829003601f168201915b50505050509050915091509091565b610e0b60076000541460216110e8565b610e2581351580610e1e57506001548235145b60226110e8565b600080805560028054610e379061146f565b80601f0160208091040260200160405190810160405280929190818152602001828054610e639061146f565b8015610eb05780601f10610e8557610100808354040283529160200191610eb0565b820191906000526020600020905b815481529060010190602001808311610e9357829003601f168201915b5050505050806020019051810190610ec891906116e4565b9050610edc8160c0015143101560236110e8565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610f0d929190611539565b60405180910390a1610f213415601f6110e8565b8051610f55906001600160a01b03163314610f4b5760608201516001600160a01b03163314610f4e565b60015b60206110e8565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610491573d6000803e3d6000fd5b610fa2600960005414602c6110e8565b610fbc81351580610fb557506001548235145b602d6110e8565b600080805560028054610fce9061146f565b80601f0160208091040260200160405190810160405280929190818152602001828054610ffa9061146f565b80156110475780601f1061101c57610100808354040283529160200191611047565b820191906000526020600020905b81548152906001019060200180831161102a57829003601f168201915b505050505080602001905181019061105f91906115a4565b90506110738160e00151431015602e6110e8565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd33836040516110a4929190611539565b60405180910390a16110b83415602a6110e8565b8051610838906001600160a01b031633146110e25760608201516001600160a01b031633146110e5565b60015b602b5b816104a85760405163100960cb60e01b81526004810182905260240160405180910390fd5b60408051602081019091526000815260208201515161123157815160400151602080840151015161113e919061158c565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e0016040516020818303038152906040526002908051906020019061122b92919061132c565b50505050565b6020820151516001146112495781516060015161124d565b8151515b6001600160a01b03166108fc836000015160200151600261126e91906117a9565b6040518115909202916000818181858888f19350505050158015610491573d6000803e3d6000fd5b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819081526020016112ea60405180606001604052806000815260200160008152602001600081525090565b905290565b5080546112fb9061146f565b6000825580601f1061130b575050565b601f01602090049060005260206000209081019061132991906113b0565b50565b8280546113389061146f565b90600052602060002090601f01602090048101928261135a57600085556113a0565b82601f1061137357805160ff19168380011785556113a0565b828001600101855582156113a0579182015b828111156113a0578251825591602001919060010190611385565b506113ac9291506113b0565b5090565b5b808211156113ac57600081556001016113b1565b6000604082840312156113d757600080fd5b50919050565b6000604082840312156113ef57600080fd5b6113f983836113c5565b9392505050565b6000606082840312156113d757600080fd5b82815260006020604081840152835180604085015260005b818110156114465785810183015185820160600152820161142a565b81811115611458576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061148357607f821691505b602082108114156113d757634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146114bb57600080fd5b919050565b6000608082840312156114d257600080fd5b6040516080810181811067ffffffffffffffff8211171561150357634e487b7160e01b600052604160045260246000fd5b60405261150f836114a4565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461156757600080fd5b80604085015250509392505050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561159f5761159f611576565b500190565b60006101008083850312156115b857600080fd5b6040519081019067ffffffffffffffff821181831017156115e957634e487b7160e01b600052604160045260246000fd5b816040526115f6846114a4565b81526020840151602082015260408401516040820152611618606085016114a4565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b600060c0828403121561166257600080fd5b60405160c0810181811067ffffffffffffffff8211171561169357634e487b7160e01b600052604160045260246000fd5b60405261169f836114a4565b815260208301516020820152604083015160408201526116c1606084016114a4565b60608201526080830151608082015260a083015160a08201528091505092915050565b600060e082840312156116f657600080fd5b60405160e0810181811067ffffffffffffffff8211171561172757634e487b7160e01b600052604160045260246000fd5b604052611733836114a4565b81526020830151602082015260408301516040820152611755606084016114a4565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6001600160a01b0383168152606081016113f9602083018480358252602090810135910152565b60008160001904831182151516156117c3576117c3611576565b50029056fea2646970667358221220bea14cb4734c6222aaa9f643821c10450588855054810bb16ef728ea10b3f60264736f6c634300080c0033`,
  BytecodeLen: 6941,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:89:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:94:63:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:131:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:99:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:107:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:108:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:115:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:116:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:123:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
