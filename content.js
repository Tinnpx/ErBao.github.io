(function() {
    window.changeHashPlatform = () => {
        var lochash = location.hash.toString();
        if (lochash.indexOf('tgWebAppPlatform=weba') !== -1) {
            lochash = lochash.replaceAll("tgWebAppPlatform=weba", "tgWebAppPlatform=android");
        } else if (lochash.indexOf('tgWebAppPlatform=web') !== -1) {
            lochash = lochash.replaceAll("tgWebAppPlatform=web", "tgWebAppPlatform=android");
        }
        location.hash = lochash;
        if (index == 0) {
            location.reload();
            index = 1;
        }
    };
    window.changeHashPlatform();
    addEventListener("hashchange", (event) => {
        window.changeHashPlatform();
    });
})();
var index = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function Squad() {
    var TabSquad = document.querySelector("#root > div > nav > button:nth-child(4)"); // button_squad.6
    if (TabSquad) {
        TabSquad.click();
        await sleep(Math.random() * 200 + 400);
        var Claim_Invite = document.querySelector("#root > div > div > div > div:nth-child(3) > button"); // friends_earnings.15
        if (Claim_Invite && !Claim_Invite.disabled) {
            Claim_Invite.click();
            await sleep(Math.random() * 200 + 400);
        }
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 100);
    });
}

var CountTap = 0;

async function Tap() {
    var Morrre = document.querySelector("#radix-\\:r0\\: > button"); // document.4
    if (Morrre) {
        Morrre.click();
        await sleep(Math.random() * 200 + 400);
    }
    var TabTap = document.querySelector("#root > div > nav > button:nth-child(1)"); // document.6
    if (TabTap) {
        TabTap.click();
        await sleep(Math.random() * 200 + 400);
        var TapsLeft = document.querySelector("#root > div > div > div > div.Tap_tapContainer__1IclA > div.Tap_tapInfoContainer__LZK72 > div.Tap_tapInfoLeft__SF0kC > div");
        if (TapsLeft && TapsLeft.textContent[0] == 0) {
            let WaitTaps = Date.now();
            var Taps = 0;
            while (Taps == 0 && Date.now() - WaitTaps < 60000) {
                await sleep(1000);
                TapsLeft = document.querySelector("#root > div > div > div > div.Tap_tapContainer__1IclA > div.Tap_tapInfoContainer__LZK72 > div.Tap_tapInfoLeft__SF0kC > div");
                if (TapsLeft) {
                    Taps = TapsLeft.textContent[0];
                }
            }
        }
        var BtnTap = document.querySelector("#root > div > div > div > div.Tap_tapContainer__1IclA > div.Tap_tapBtnContainer__GazWz > button"); // document.8
        if (BtnTap && !BtnTap.disabled) {
            BtnTap.click();
            CountTap++;
            await sleep(Math.random() * 100 + 200);
            var Element_SoDu = document.querySelector("#root > div > div > div > div.Tap_claimContainer__mbHyw > div > span.Text_text__g5dgG.Text_white__Gl2oO.Text_h3__BtnyX.Text_semiBold__iPCTR.Text_center__cmN\\+H");
            if (Element_SoDu && Element_SoDu.textContent > 7 || CountTap > 28) {
                var Element_Claim = document.querySelector("#root > div > div > div > div.Tap_claimContainer__mbHyw > button");
                if (Element_Claim && !Element_Claim.disabled) {
                    Element_Claim.click();
                    CountTap = 0;
                    await sleep(Math.random() * 100 + 200);
                }
            }
        } else {
            await Squad();
        }
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 100);
    });
}

async function Main() {
    const tenMinutes = 5 * 60 * 1000; // 5 phút tính bằng milliseconds
    const thirtyMinutes = 30 * 60 * 1000; // 30 phút tính bằng milliseconds
    let SquadTime = Date.now();
    while (true) {
        const now = Date.now();
        if (now - SquadTime >= thirtyMinutes) {
            await Squad();
            SquadTime = Date.now();
        }
        await Tap();
        await sleep(Math.random() * 200 + 400);
    }
}

// Bắt đầu chuỗi các hàm thực thi tuần tự
Main();