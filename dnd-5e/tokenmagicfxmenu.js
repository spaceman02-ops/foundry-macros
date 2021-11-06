const TOKENMAGICMENU = {
  bevel: async () => {
    let params = [
      {
        filterType: "bevel",
        filterId: "myBevel",
        rotation: 0,
        thickness: 5,
        lightColor: 0xff0000,
        lightAlpha: 0.8,
        shadowColor: 0x00ff00,
        shadowAlpha: 0.5,
        animated: {
          rotation: {
            active: true,
            clockWise: true,
            loopDuration: 1600,
            animType: "syncRotation",
          },
        },
      },
    ];

    TokenMagic.addUpdateFiltersOnSelected(params);
  },
  adjustment: async () => {
    let params = [
      {
        filterType: "adjustment",
        filterId: "myAdjust",
        saturation: 1,
        brightness: 1,
        contrast: 1,
        gamma: 1,
        red: 0.2,
        green: 0.2,
        blue: 0.2,
        alpha: 1,
        animated: {
          alpha: {
            active: true,
            loopDuration: 2000,
            animType: "syncCosOscillation",
            val1: 0.35,
            val2: 0.75,
          },
        },
      },
    ];

    TokenMagic.addUpdateFiltersOnSelected(params);
  },
  dropShadow: async () => {
    let params = [
      {
        filterType: "shadow",
        filterId: "myShadow",
        rotation: 35,
        blur: 2,
        quality: 5,
        distance: 20,
        alpha: 0.7,
        padding: 10,
        shadowOnly: false,
        color: 0x000000,
        zOrder: 6000,
        animated: {
          blur: {
            active: true,
            loopDuration: 500,
            animType: "syncCosOscillation",
            val1: 2,
            val2: 4,
          },
          rotation: {
            active: true,
            loopDuration: 100,
            animType: "syncSinOscillation",
            val1: 33,
            val2: 37,
          },
        },
      },
    ];

    TokenMagic.addUpdateFiltersOnSelected(params);
  },
  outline: async () => {
      let params = 
    [{
       filterType: "outline",
       filterId: "myOutline",
       padding: 10,
       color: 0xEE6035,
       thickness: 1,
       quality: 5,
       zOrder: 9,
       animated :
       {
          thickness: 
          { 
             active: true,
             loopDuration: 800,
             animType: "syncCosOscillation",
             val1: 1, 
             val2: 6
          }
       }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);
},
  glow: async () => {let params =
    [{
        filterType: "glow",
        filterId: "superSpookyGlow",
        outerStrength: 4,
        innerStrength: 0,
        color: 0x5099DD,
        quality: 0.5,
        padding: 10,
        animated:
        {
            color: 
            {
               active: true, 
               loopDuration: 3000, 
               animType: "colorOscillation", 
               val1:0x5099DD, 
               val2:0x90EEFF
            }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  bloom: async () => {let params = 
    [{
       filterType: "xbloom",
       filterId: "letsShine",
       threshold: 0.35,
       bloomScale: 0,
       brightness: 1,
       blur: 0.1,
       padding: 10,
       quality: 15,
       blendMode: 0,
       animated:
       {
           bloomScale: 
           { 
              active: true, 
              loopDuration: 2000, 
              animType: "syncCosOscillation", 
              val1: 0, 
              val2: 2.1
           },
           threshold:  
           { 
              active: false, 
              loopDuration: 1000, 
              animType: "syncCosOscillation", 
              val1: 0.00, 
              val2: 1.90
           }
       }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);
    },
  distortion: async () => {let params =
    [{
        filterType: "distortion",
        filterId: "myDistortion",
        maskPath: "/modules/tokenmagic/fx/assets/distortion-1.png",
        maskSpriteScaleX: 5,
        maskSpriteScaleY: 5,
        padding: 20,
        animated:
        {
            maskSpriteX: { active: true, speed: 0.05, animType: "move" },
            maskSpriteY: { active: true, speed: 0.07, animType: "move" }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  oldfilm: async () => {let params =
    [{
        filterType: "oldfilm",
        filterId: "myOldfilm",
        sepia: 0.6,
        noise: 0.2,
        noiseSize: 1.0,
        scratch: 0.8,
        scratchDensity: 0.5,
        scratchWidth: 1.2,
        vignetting: 0.9,
        vignettingAlpha: 0.6,
        vignettingBlur: 0.2,
        animated:
        {
            seed:        
            { 
               active: true, 
               animType: "randomNumber", 
               val1: 0, 
               val2: 1 
            },
            vignetting:  
            { 
               active: true, 
               animType: "syncCosOscillation" , 
               loopDuration: 2000, 
               val1: 0.2, 
               val2: 0.4 }
        }
    },
    {
        filterType: "outline",
        filterId: "oldfilmOutline",
        color: 0x000000,
        thickness: 0,
        zOrder: 61
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  twist: async () => {let params =
    [{
        filterType: "transform",
        filterId: "myTwistTransform",
        twRadiusPercent: 70,
        padding: 10,
        animated:
        {
            twRotation:
            {
                animType: "sinOscillation",
                val1: -90,
                val2: +90,
                loopDuration: 5000,
            }
        }
    }];

TokenMagic.addUpdateFiltersOnSelected(params);},
  theMooManDance: async () => {let params =
    [{
        filterType: "transform",
        filterId: "theMooManDance",
        twRadiusPercent: 70,
        bpRadiusPercent: 90,
        padding: 50,
        animated:
        {
            twRotation:
            {
                animType: "sinOscillation",
                val1: -90,
                val2: +90,
                loopDuration: 1000,
            },
            bpStrength:
            {
                animType: "cosOscillation",
                val1: 0,
                val2: 0.55,
                loopDuration: 1000,
            },
            translationX:
            {
                animType: "sinOscillation",
                val1: -0.125,
                val2: +0.125,
                loopDuration: 1400,
            },
            translationY:
            {
                animType: "cosOscillation",
                val1: -0.125,
                val2: +0.125,
                loopDuration: 1400,
            },
            rotation:
            {
                animType: "cosOscillation",
                val1: 90,
                val2: -90,
                loopDuration: 4200,
            },    
        }
    }];

TokenMagic.addUpdateFiltersOnSelected(params);},
  bulge: async () => {let params =
    [{
        filterType: "transform",
        filterId: "myBulgeTransform",
        bpRadiusPercent: 70,
        padding: 100,
        animated:
        {
            bpStrength:
            {
                animType: "cosOscillation",
                val1: 0,
                val2: 0.65,
                loopDuration: 3500,
            }
        }
    }];

TokenMagic.addUpdateFiltersOnSelected(params);},
  pinch: async () => {let params =
    [{
        filterType: "transform",
        filterId: "myPinchTransform",
        bpRadiusPercent: 70,
        padding: 100,
        animated:
        {
            bpStrength:
            {
                animType: "cosOscillation",
                val1: 0,
                val2: -0.65,
                loopDuration: 3500,
            }
        }
    }];

TokenMagic.addUpdateFiltersOnSelected(params);},
  blur: async () => {let params =
    [{
        filterType: "blur",
        filterId: "myBlur",
        padding: 10,
        quality: 4.0,
        blur: 0,
        blurX: 0,
        blurY: 0,
        animated:
        {
            blurX: 
            { 
               active: true, 
               animType: "syncCosOscillation", 
               loopDuration: 500, 
               val1: 0, 
               val2: 6
            },
            blurY: 
            { 
               active: true, 
               animType: "syncCosOscillation", 
               loopDuration: 750, 
               val1: 0, 
               val2: 6}
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  zoomblur: async () => {let params =
    [{
        filterType: "zoomblur",
        filterId: "myZoomBlur",
        strength: 0.15,
        innerRadiusPercent: 65,
        radiusPercent: 100,
        padding: 30,
        animated:
        {
            innerRadiusPercent: 
            { 
               active: true, 
               animType: "sinOscillation", 
               loopDuration: 500, 
               val1: 65, 
               val2: 75
            }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  shockwave: async () => {let params =
    [{
        filterType: "wave",
        filterId: "myShockwave",
        time: 0,
        strength: 0.03,
        frequency: 15,
        maxIntensity: 4.0,
        minIntensity: 0.5,
        padding:25,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: 0.0180,
            animType: "move",
          }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  cosmicray: async () => {let params =
    [{
        filterType: "ray",
        filterId : "myRay",
        time: 0,
        color: 0xCF8000,
        alpha: 0.5,
        divisor: 32,
        anchorX: 0,
        anchorY: 0,
        animated :
        {
           time : 
           { 
              active: true, 
              speed: 0.0005, 
              animType: "move" 
           }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  innerfog: async () => {let params =
    [{
        filterType: "fog",
        filterId: "myFog",
        color: 0x000000,
        density: 0.65,
        time: 0,
        dimX: 1,
        dimY: 1,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: 2.2, 
            animType: "move" 
          }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  fumes: async () => {let params =
    [{
        filterType: "fumes",
        filterId: "myFumes",
        color: 0x808080,
        time: 0,
        blend: 8,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: 0.001, 
            animType: "move" 
          }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  electric: async () => {let params =
    [{
        filterType: "electric",
        filterId: "myElectric",
        color: 0xFFFFFF,
        time: 0,
        blend: 1,
        intensity: 5,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: 0.0020, 
            animType: "move" 
          }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  fire1: async () => {let params =
    [{
        filterType: "fire",
        filterId: "myFire",
        intensity: 1,
        color: 0xFFFFFF,
        amplitude: 1,
        time: 0,
        blend: 2,
        fireBlend : 1,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: -0.0024, 
            animType: "move" 
          },
          intensity:
          {
            active:true,
            loopDuration: 15000,
            val1: 0.8,
            val2: 2,
            animType: "syncCosOscillation"
          },
          amplitude:
          {
            active:true,
            loopDuration: 4400,
            val1: 1,
            val2: 1.4,
            animType: "syncCosOscillation"
          }
          
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  devouringfire: async () => {let params =
    [{
        filterType: "fire",
        filterId: "myFire",
        intensity: 3,
        color: 0xFFFFFF,
        amplitude: 2,
        time: 0,
        blend: 10,
        fireBlend : 1,
        alphaDiscard: true,
        zOrder: 50,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: -0.0024, 
            animType: "move" 
          }
        }
    },{
        filterType: "glow",
        filterId: "glowripples",
        outerStrength: 4,
        innerStrength: 2,
        color: 0xAA6500,
        quality: 0.5,
        padding: 10,
        zOrder: 100,
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  waves: async () => {let params =
    [{
        filterType: "wave",
        filterId: "myWaves",
        time: 0,
        anchorX: 0.5,
        anchorY: 0.5,
        strength: 0.015,
        frequency: 120,
        color: 0xFFFFFF,
        maxIntensity: 2.5,
        minIntensity: 0.9,
        padding:10,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: 0.0085, 
            animType: "move" 
          },
          anchorX :
          {
            active: false,
            val1: 0.15,
            val2: 0.85,
            animType: "syncChaoticOscillation",
            loopDuration: 20000
          },
          anchorY :
          {
            active: false,
            val1: 0.15,
            val2: 0.85,
            animType: "syncSinOscillation",
            loopDuration: 20000
          }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  flood: async () => {let params =
    [{
        filterType: "flood",
        filterId: "myFlood",
        time: 0,
        color: 0x0020BB,
        billowy: 0.43,
        tintIntensity: 0.72,
        glint: 0.31,
        scale: 70,
        padding: 10,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: 0.0006, 
            animType: "move"
          }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  smoke: async () => {let params =
    [{
        filterType: "smoke",
        filterId: "mySmoke",
        color: 0x50FFAA,
        time: 0,
        blend: 2,
        dimX: 1,
        dimY: 1,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: 0.0015, 
            animType: "move"
          }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  mirrorimages: async () => {let params =
    [{
        filterType: "images",
        filterId: "myMirrorImages",
        time: 0,
        nbImage: 4,
        alphaImg: 1.0,
        alphaChr: 0.0,
        blend: 4,
        ampX: 0.10,
        ampY: 0.10,
        zOrder: 20,
        animated :
        {
          time: 
          { 
            active: true, 
            speed: 0.0010, 
            animType: "move" 
          }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  chaoticimages: async () => {let params =
    [{
        filterType: "images",
        filterId: "myChaoticImages",
        time: 0,
        nbImage: 4,
        alphaImg: 1.0,
        alphaChr: 0.0,
        blend: 4,
        ampX: 0.10,
        ampY: 0.10,
        padding: 80,
        zOrder: 20,
        animated :
        {
          time: 
          { 
            active: true, 
            speed: 0.0010, 
            animType: "move" 
          },
          ampX:
          {
            active: true,
            val1: 0.00,
            val2: 0.30,
            chaosFactor: 0.03,
            animType: "syncChaoticOscillation",
            loopDuration: 2000
          },
          ampY:
          {
            active: true,
            val1: 0.00,
            val2: 0.30,
            chaosFactor: 0.04,
            animType: "syncChaoticOscillation",
            loopDuration: 1650
          },
          alphaChr:        
          { 
            active: true, 
            animType: "randomNumberPerLoop", 
            val1: 0.0, 
            val2: 1,
            loopDuration: 250
          },
          alphaImg:        
          { 
            active: true, 
            animType: "randomNumberPerLoop", 
            val1: 0.8, 
            val2: 1,
            loopDuration: 250
          },
          nbImage:
          {
            active: true,
            val1: 1,
            val2: 9,
            animType: "syncSinOscillation",
            loopDuration: 1400
          }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  spectralimages: async () => {let params =
    [{
        filterType: "images",
        filterId: "mySpectralImages",
        time: 0, 
        blend: 4,
        nbImage: 4, 
        padding: 0,
        alphaImg: 0.5, 
        alphaChr: 0.0,
        ampX: 0.10, 
        ampY: 0.10,
        zOrder: 20,
        animated :
        {
          time: 
          { 
            speed: 0.0010, 
            animType: "move" 
          },
          ampX:
          {
            val1: 0, val2: 0.22,
            animType: "syncCosOscillation",
            loopDuration: 2500
          },
          ampY:
          {
            val1: 0, val2: 0.28,
            animType: "syncCosOscillation",
            loopDuration: 2500,
          },
          alphaChr:        
          {
            val1: 1, val2: 0,
            animType: "syncCosOscillation",
            loopDuration: 2500
          },
          alphaImg:        
          {
            val1: 0.2, val2: 0.8,
            animType: "syncSinOscillation",
            loopDuration: 2500
          }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  hexafield: async () => {let params =
    [{
        filterType: "field",
        filterId: "myHexaField",
        shieldType: 2,
        gridPadding: 2,
        color: 0xCC00CC,
        time: 0,
        blend: 3,
        intensity: 1,
        lightAlpha: 0.5,
        lightSize: 0.5,
        scale: 0.5,
        radius: 1,
        chromatic: false,
        alphaDiscard: true,
        zOrder: 5000,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: 0.0015, 
            animType: "move" 
          }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  hexafield2: async () => {let params =
    [{
        filterType: "field",
        filterId: "myHexaField",
        shieldType: 2,
        gridPadding: 2,
        color: 0x00CCDD,
        time: 0,
        blend: 2,
        intensity: 0.95,
        lightAlpha: 0,
        lightSize: 0,
        scale: 0.75,
        radius: 1,
        chromatic: false,
        alphaDiscard: true,
        zOrder: 5000,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: 0.0015, 
            animType: "move" 
          }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  hexafield3: async () => {let params =
    [{
        filterType: "field",
        filterId: "myHexaField",
        shieldType: 2,
        gridPadding: 2,
        color: 0x00CCDD,
        time: 0,
        blend: 2,
        intensity: 1,
        lightAlpha: 0,
        lightSize: 0,
        scale: 2,
        radius: 0.98,
        chromatic: false,
        discardThreshold: 0.13,
        alphaDiscard: true,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: 0.0015, 
            animType: "move" 
          }
        }
    },
    {
        filterType: "xglow",
        filterId: "myBurningAura",
        auraType: 2,
        color: 0x500050,
        scale: 1.,
        time: 0,
        auraIntensity: 1,
        subAuraIntensity: 0,
        threshold: 0,
        discard: false,
        zOrder: 3000,
        animated:
        {
            time : 
            {  
               active: true,
               speed: 0.0027, 
               animType: "move" 
            },
            thickness:
            {
               active: true,
               loopDuration: 6000, 
               animType: "cosOscillation", 
               val1:2, 
               val2:4
            }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  fireshield: async () => {let params =
    [{
        filterType: "field",
        filterId: "myFireField",
        shieldType: 1,
        gridPadding: 2,
        color: 0xE58550,
        time: 0,
        blend: 2,
        intensity: 1.2,
        lightAlpha: 1,
        lightSize: 0.7,
        scale: 1,
        radius: 1,
        chromatic: false,
        zOrder: 512,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: 0.0015, 
            animType: "move" 
          }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  fireshield2: async () => {let params =
    [{
        filterType: "field",
        filterId: "myFireField",
        shieldType: 1,
        gridPadding: 2,
        color: 0xE58550,
        time: 0,
        blend: 2,
        intensity: 1.2,
        lightAlpha: 1,
        lightSize: 0.7,
        scale: 1,
        radius: 1,
        chromatic: false,
        discardThreshold: 0.5,
        alphaDiscard: true,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: 0.0015, 
            animType: "move" 
          }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  fireshield3: async () => {let params =
    [{
        filterType: "zapshadow",
        filterId: "myZap",
        alphaTolerance: 0.45
    },{
        filterType: "field",
        filterId: "myFireField",
        shieldType: 1,
        gridPadding: 1.1,
        color: 0xE58550,
        time: 0,
        blend: 2,
        intensity: 1.2,
        lightAlpha: 1,
        lightSize: 0.7,
        scale: 1,
        radius: 1,
        chromatic: false,
        discardThreshold: 0.9,
        hideRadius: 0.95,
        alphaDiscard: true,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: 0.0015, 
            animType: "move" 
          }
        }
    },{
        filterType: "xglow",
        filterId: "myBurningAura",
        auraType: 2,
        color: 0x903010,
        thickness: 9.8,
        scale: 4.,
        time: 0,
        auraIntensity: 2,
        subAuraIntensity: 1.5,
        threshold: 0.40,
        discard: true,
        zOrder: 3000,
        animated:
        {
            time : 
            {  
               active: true,
               speed: 0.0027, 
               animType: "move" 
            },
            thickness:
            {
               active: true,
               loopDuration: 3000, 
               animType: "cosOscillation", 
               val1:2, 
               val2:5
            }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  fireshield4: async () => {let params =
    [{
        filterType: "zapshadow",
        filterId: "myZap",
        alphaTolerance: 0.45
    },{
        filterType: "field",
        filterId: "myLavaRing",
        shieldType: 6,
        gridPadding: 1.25,
        color: 0xFFAA00,
        time: 0,
        blend: 14,
        intensity: 1,
        lightAlpha: 0,
        lightSize: 0.7,
        scale: 1,
        radius: 1,
        chromatic: false,
        discardThreshold: 0.30,
        hideRadius: 0.95,
        alphaDiscard: true,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: 0.0015, 
            animType: "move" 
          },
          radius: 
           {
              active: true, 
              loopDuration: 6000, 
              animType: "cosOscillation", 
              val1:1, 
              val2:0.8
           },
          hideRadius: 
           {
              active: true, 
              loopDuration: 3000, 
              animType: "cosOscillation", 
              val1:0.75, 
              val2:0.4
           }
        }
    },{
        filterType: "xglow",
        filterId: "myBurningAura",
        auraType: 2,
        color: 0xFF5000,
        thickness: 9.8,
        scale: 1.,
        time: 0,
        auraIntensity: 2,
        subAuraIntensity: 1,
        threshold: 0.30,
        discard: true,
        zOrder: 3000,
        animated:
        {
            time : 
            {  
               active: true,
               speed: 0.0027, 
               animType: "move" 
            },
            thickness:
            {
               active: true,
               loopDuration: 600, 
               animType: "cosOscillation", 
               val1:4, 
               val2:8
            }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  poisonsmoke: async () => {let params =
    [{
        filterType: "field",
        filterId: "mySmokeField",
        shieldType: 3,
        gridPadding: 1,
        color: 0x60CC70,
        time: 0,
        blend: 0,
        intensity: 0.9,
        lightAlpha: 1,
        lightSize: 0.7,
        scale: 1,
        radius: 1,
        chromatic: false,
        zOrder: 512,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: 0.0015, 
            animType: "move" 
          }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  earthshell: async () => {let params =
    [{
        filterType: "field",
        filterId: "myEarthField",
        shieldType: 4,
        gridPadding: 2,
        color: 0xBB9070,
        time: 0,
        blend: 1,
        intensity: 1.25,
        lightAlpha: 1,
        lightSize: 0.7,
        scale: 1,
        radius: 1,
        chromatic: false,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: 0.0015, 
            animType: "move" 
          }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  iceshell: async () => {let params =
    [{
        filterType: "field",
        filterId: "myIceField",
        shieldType: 14,
        gridPadding: 1.25,
        color: 0x409090,
        time: 0,
        blend: 9,
        intensity: 1,
        lightAlpha: 2,
        lightSize: 1,
        scale: 1,
        radius: 0.97,
        chromatic: false,
        discardThreshold: 0.2,
        alphaDiscard: true,
        animated :
        {
          posLightX:
          {
            active: true,
            val1: 0.25,
            val2: 0.75,
            animType: "syncCosOscillation",
            loopDuration: 5000
          },
          posLightY:
          {
            active: true,
            val1: 0.25,
            val2: 0.75,
            animType: "syncSinOscillation",
            loopDuration: 5000
          },
          lightSize:
          {
            active: true,
            val1: 0.95,
            val2: 1.05,
            animType: "sinOscillation",
            loopDuration: 900
          }
        }
    },{
            filterType: "xglow",
            filterId: "myIceField",
            auraType: 1,
            color: 0x5099DD,
            thickness: 4.5,
            scale: 1,
            time: 0,
            auraIntensity: 0.25,
            subAuraIntensity: 0.25,
            threshold: 0.1,
            discard: false,
            zOrder: 3000,
            animated:
            {
                time:
                {
                    active: true,
                    speed: 0.0018,
                    animType: "move"
                },
                thickness:
                {
                    val1: 2, val2: 2.5,
                    animType: "cosOscillation",
                    loopDuration: 3000
                },
                subAuraIntensity:
                {
                    val1: 0.45, val2: 0.65,
                    animType: "cosOscillation",
                    loopDuration: 6000
                },
                auraIntensity:
                {
                    val1: 0.9, val2: 2.2,
                    animType: "cosOscillation",
                    loopDuration: 3000
                }
            }
        }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  chromashell: async () => {let params =
    [{
        filterType: "field",
        filterId: "myEarthFieldTop",
        shieldType: 5,
        gridPadding: 3,
        color: 0xAAAAAA,
        time: 0,
        blend: 5,
        intensity: 1.9,
        lightAlpha: 1,
        lightSize: 0.7,
        scale: 1,
        radius: 1,
        zIndex: 5,
        chromatic: true,
        zOrder: 512,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: 0.0015, 
            animType: "move" 
          }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  megaiceshell: async () => {let params =
    [{
        filterType: "field",
        filterId: "myEarthFieldTop",
        shieldType: 5,
        gridPadding: 3,
        color: 0x00DDFF,
        time: 0,
        blend: 5,
        intensity: 1.9,
        lightAlpha: 0,
        lightSize: 0,
        scale: 1,
        radius: 1,
        zIndex: 5,
        discardThreshold: 0.09,
        alphaDiscard: true,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: 0.0015, 
            animType: "move" 
          }
        }
    },
        {
            filterType: "xglow",
            filterId: "myEarthFieldTopGlow",
            auraType: 1,
            color: 0x5099DD,
            thickness: 4.5,
            scale: 1,
            time: 0,
            auraIntensity: 0.25,
            subAuraIntensity: 1,
            threshold: 0.5,
            discard: false,
            zOrder: 3000,
            animated:
            {
                time:
                {
                    active: true,
                    speed: 0.0018,
                    animType: "move"
                },
                thickness:
                {
                    val1: 2, val2: 2.5,
                    animType: "cosOscillation",
                    loopDuration: 3000
                },
                subAuraIntensity:
                {
                    val1: 0.45, val2: 0.65,
                    animType: "cosOscillation",
                    loopDuration: 6000
                },
                auraIntensity:
                {
                    val1: 0.9, val2: 2.2,
                    animType: "cosOscillation",
                    loopDuration: 3000
                }
            }
        }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  airbubble: async () => {let params =
    [{
        filterType: "field",
        filterId: "myAirField",
        shieldType: 6,
        gridPadding: 1.2,
        color: 0x7090AA,
        time: 0,
        blend: 1,
        intensity: 1,
        lightAlpha: 1,
        lightSize: 0.7,
        scale: 1,
        radius: 1,
        chromatic: false,
        zOrder: 512,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: 0.0015, 
            animType: "move" 
          }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  airbubble2: async () => {let params =
    [{
        filterType: "field",
        filterId: "myAirField",
        shieldType: 6,
        gridPadding: 1.2,
        color: 0x7090AA,
        time: 0,
        blend: 2,
        intensity: 1,
        lightAlpha: 0,
        lightSize: 0,
        scale: 1,
        radius: 1,
        chromatic: false,
        discardThreshold: 0.1,
        alphaDiscard: true,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: 0.0015, 
            animType: "move" 
          }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  magearmor: async () => {let params =
    [{
        filterType: "field",
        filterId: "myMageField",
        shieldType: 7,
        gridPadding: 1.,
        color: 0xFFFFFF,
        time: 0,
        blend: 4,
        intensity: 0.8,
        lightAlpha: 1,
        lightSize: 0.45,
        scale: 1,
        radius: 1,
        chromatic: false,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: 0.0015, 
            animType: "move" 
          }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  magearmor2: async () => {let params =
    [{
        filterType: "field",
        filterId: "myMageField",
        shieldType: 7,
        gridPadding: 1,
        color: 0xEEFFFF,
        time: 0,
        blend: 4,
        intensity: 0.8,
        lightAlpha: 0,
        lightSize: 0,
        scale: 1,
        radius: 1,
        chromatic: false,
        discardThreshold: 0.25,
        alphaDiscard: true,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: 0.003, 
            animType: "move" 
          }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  chromaticbubble: async () => {let params =
    [{
        filterType: "field",
        filterId: "myChromaField",
        shieldType: 8,
        gridPadding: 2,
        color: 0xAAAAAA,
        time: 0,
        blend: 2,
        intensity: 1,
        lightAlpha: 0,
        lightSize: 0,
        scale: 1,
        radius: 1,
        chromatic: true,
        zOrder: 512,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: 0.0045, 
            animType: "move" 
          }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  chromaticbubble2: async () => {let params =
    [{
        filterType: "field",
        filterId: "myChromaField",
        shieldType: 8,
        gridPadding: 1,
        color: 0xAAAAAA,
        time: 0,
        blend: 2,
        intensity: 1,
        lightAlpha: 0,
        lightSize: 0,
        scale: 1,
        radius: 1,
        chromatic: true,
        discardThreshold: 0.3,
        alphaDiscard: true,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: 0.0045, 
            animType: "move" 
          }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  waterdefense: async () => {let params =
    [{
        filterType: "field",
        filterId: "myWaterField",
        shieldType: 9,
        gridPadding: 1.2,
        color: 0x20BBEE,
        time: 0,
        blend: 4,
        intensity: 1,
        lightAlpha: 0.7,
        lightSize: 0.5,
        scale: 0.6,
        radius: 1,
        chromatic: false,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: 0.0015, 
            animType: "move" 
          }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  waterdefense2: async () => {let params =
    [{
        filterType: "field",
        filterId: "myWaterField",
        shieldType: 9,
        gridPadding: 1.2,
        color: 0x20BBEE,
        time: 0,
        blend: 4,
        intensity: 1,
        lightAlpha: 0.7,
        lightSize: 0.5,
        scale: 0.6,
        radius: 1,
        chromatic: false,
        hideRadius: 0.8,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: 0.0015, 
            animType: "move" 
          },
          radius: 
           {
              active: true, 
              loopDuration: 6000, 
              animType: "cosOscillation", 
              val1:1, 
              val2:0.8
           },
          hideRadius: 
           {
              active: true, 
              loopDuration: 3000, 
              animType: "cosOscillation", 
              val1:0.6, 
              val2:0
           }
        }
    },{
        filterType: "liquid",
        filterId: "myDriftLiquid",
        color: 0x002040,
        time: 0,
        blend: 4,
        intensity: 4,
        spectral: false,
        scale: 1.5,
        zOrder: 3000,
        animated :
        {
           time : 
           { 
              active: true, 
              speed: 0.0018, 
              animType: "move" 
           }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  evilaura: async () => {let params =
    [{
        filterType: "field",
        filterId: "myEvilField",
        shieldType: 10,
        gridPadding: 1,
        color: 0xFF3010,
        time: 0,
        blend: 5,
        intensity: 1,
        lightAlpha: 4,
        lightSize: 0.8,
        scale: 0.5,
        radius: 1,
        chromatic: false,
        zOrder: 512,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: 0.0012, 
            animType: "move" 
          },
          lightSize:        
          {
            val1: 0.4, val2: 1.5,
            animType: "syncCosOscillation",
            loopDuration: 5000
          }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  gridforcefield: async () => {let params =
    [{
        filterType: "field",
        filterId: "myGridField",
        shieldType: 11,
        gridPadding: 2,
        color: 0x00CCCC,
        time: 0,
        blend: 2,
        intensity: 1,
        lightAlpha: 1,
        lightSize: 0.3,
        scale: 0.5,
        radius: 1,
        chromatic: false,
        zOrder: 512,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: 0.0009, 
            animType: "move" 
          }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  gridforcefield2: async () => {let params =
    [{
        filterType: "field",
        filterId: "myGridField",
        shieldType: 11,
        gridPadding: 2,
        color: 0xC1C1C1,
        time: 0,
        blend: 2,
        intensity: 1,
        lightAlpha: 0,
        lightSize: 0.3,
        scale: 0.5,
        radius: 1,
        chromatic: true,
        alphaDiscard: true,
        discardThreshold: 0.3,
        zOrder: 512,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: 0.0009, 
            animType: "move" 
          }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  warptimeaura: async () => {let params =
    [{
        filterType: "field",
        filterId: "myWarpField",
        shieldType: 12,
        gridPadding: 2,
        color: 0xFFFFFF,
        time: 0,
        blend: 2,
        intensity: 1.5,
        lightAlpha: 0.8,
        lightSize: 0.5,
        scale: 0.7,
        radius: 1,
        chromatic: false,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: 0.0009, 
            animType: "move" 
          }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  warptimeaura2: async () => {let params =
    [{
        filterType: "field",
        filterId: "myMageField",
        shieldType: 7,
        gridPadding: 2,
        color: 0xFFFFFF,
        time: 0,
        blend: 4,
        intensity: 0.8,
        lightAlpha: 1,
        lightSize: 0.45,
        scale: 1,
        radius: 1,
        chromatic: true,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: 0.0080, 
            animType: "move" 
          }
        }
    },{
        filterType: "field",
        filterId: "myWarpField",
        shieldType: 12,
        gridPadding: 2,
        color: 0xFFFFFF,
        time: 0,
        blend: 2,
        intensity: 1,
        lightAlpha: 0,
        lightSize: 0,
        scale: 0.7,
        radius: 1,
        chromatic: false,
        alphaDiscard: true,
        discardThreshold: 0.1,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: 0.0009, 
            animType: "move" 
          }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  simplecolor: async () => {let params =
    [{
        filterType: "field",
        filterId: "mySimpleField",
        shieldType: 13,
        gridPadding: 2,
        alpha: 0.25,
        color: 0xCCCC00,
        time: 0,
        blend: 14,
        intensity: 1.10,
        lightSize: 0,
        scale: 1,
        radius: 1,
        chromatic: false,
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  sunburstrays: async () => {let params =
    [{
        filterType: "xray",
        filterId: "mySunburstRays",
        time: 0,
        color: 0xFFBB00,
        blend: 9,
        dimX: 1,
        dimY: 1,
        anchorX: 0,
        anchorY: 0,
        divisor: 36,
        intensity: 4,
        animated :
        {
           time : 
           { 
              active: true, 
              speed: 0.0012, 
              animType: "move" 
           },
           anchorX:
           {
              animType: "syncCosOscillation",
              loopDuration : 6000,
              val1: 0.40,
              val2: 0.60
           }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  luckyclover: async () => {let params =
    [{
        filterType: "xray",
        filterId: "myLuckyRays",
        time: 0,
        color: 0x00FF00,
        blend: 9,
        dimX: 0.05,
        dimY: 0.05,
        anchorX: 0.5,
        anchorY: 0.5,
        divisor: 4,
        intensity: 1,
        animated :
        {
           time : 
           { 
              active: true, 
              speed: 0.0012, 
              animType: "move" 
           },
           anchorX:
           {
              animType: "syncCosOscillation",
              loopDuration : 6000,
              val1: 0.40,
              val2: 0.60
           },
           anchorY:
           {
              animType: "syncSinOscillation",
              loopDuration : 6000,
              val1: 0.40,
              val2: 0.60
           }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  xrayscan: async () => {let params =
    [{
        filterType: "xray",
        filterId: "myXrayScan",
        time: 0,
        color: 0xFFFFFF,
        blend: 5,
        dimX: 20,
        dimY: 20,
        anchorX: 0.5,
        anchorY: 0,
        divisor: 8,
        intensity: 1,
        animated :
        {
           time : 
           { 
              active: true, 
              speed: 0.00038, 
              animType: "move" 
           }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  bluerays: async () => {let params =
    [{
        filterType: "xray",
        filterId: "myBlueRay",
        time: 0,
        color: 0x1030FF,
        blend: 9,
        dimX: 1,
        dimY: 1,
        anchorX: 0,
        anchorY: 0,
        divisor: 24,
        intensity: 1,
        animated :
        {
           time : 
           { 
              active: true, 
              speed: 0.0002, 
              animType: "move" 
           },
           anchorX:
           {
              animType: "syncCosOscillation",
              loopDuration : 18000,
              val1: 0.05,
              val2: 0.95
           },
           anchorY:
           {
              animType: "syncSinOscillation",
              loopDuration : 18000,
              val1: 0.05,
              val2: 0.95
           }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  spectralbody: async () => {let params =
    [{
        filterType: "liquid",
        filterId: "mySpectralBody",
        color: 0x20AAEE,
        time: 0,
        blend: 8,
        intensity: 4,
        spectral: true,
        scale: 0.9,
        animated :
        {
           time : 
           { 
              active: true, 
              speed: 0.0010, 
              animType: "move" 
           },
           color: 
           {
              active: true, 
              loopDuration: 6000, 
              animType: "colorOscillation", 
              val1:0xFFFFFF, 
              val2:0x00AAFF
           }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  mantleofmadness: async () => {let params =
    [{
        filterType: "liquid",
        filterId: "myMantle",
        color: 0x0090FF,
        time: 0,
        blend: 5,
        intensity: 0.0001,
        spectral: false,
        scale: 7,
        animated :
        {
           time : 
           { 
              active: true, 
              speed: 0.0015, 
              animType: "move" 
           },
           intensity : 
           { 
              active: true, 
              animType: "syncCosOscillation",
              loopDuration: 30000,
              val1: 0.0001, 
              val2: 4 
           },
           scale: 
           { 
              active: true, 
              animType: "syncCosOscillation",
              loopDuration: 30000,
              val1: 7, 
              val2: 1 
           }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  driftin: async () => {let params =
    [{
        filterType: "wave",
        filterId: "myDriftWaves",
        time: 0,
        anchorX: 0.5,
        anchorY: 0.5,
        strength: 0.035,
        frequency: 20,
        color: 0xFFFFFF,
        maxIntensity: 1.5,
        minIntensity: 0.5,
        padding:10,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: 0.0085, 
            animType: "move" 
          },
          anchorX :
          {
            active: true,
            val1: 0.35,
            val2: 0.65,
            animType: "syncCosOscillation",
            loopDuration: 10000
          },
          anchorY :
          {
            active: true,
            val1: 0.35,
            val2: 0.65,
            animType: "syncSinOscillation",
            loopDuration: 10000
          }
        }
    },
    {
        filterType: "liquid",
        filterId: "myDriftLiquid",
        color: 0xFF0000,
        time: 0,
        blend: 6,
        intensity: 5,
        spectral: false,
        scale: 2.5,
        animated :
        {
           time : 
           { 
              active: true, 
              speed: 0.0018, 
              animType: "move" 
           },
           color: 
           {
              active: true, 
              loopDuration: 9000, 
              animType: "colorOscillation", 
              val1:0xFF0000, 
              val2:0xFFFFFF
           }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  burningaura: async () => {let params =
    [{
        filterType: "zapshadow",
        filterId: "myZapShadow",
        alphaTolerance: 0.50
    },
    {
        filterType: "xglow",
        filterId: "myBurningAura",
        auraType: 2,
        color: 0x903010,
        thickness: 9.8,
        scale: 4.,
        time: 0,
        auraIntensity: 2,
        subAuraIntensity: 1.5,
        threshold: 0.40,
        discard: true,
        animated:
        {
            time : 
            {  
               active: true,
               speed: 0.0027, 
               animType: "move" 
            },
            thickness:
            {
               active: true,
               loopDuration: 3000, 
               animType: "cosOscillation", 
               val1:2, 
               val2:5
            }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  villainaura: async () => {let params =
    [{
        filterType: "zapshadow",
        filterId: "myUglyZapShadow",
        alphaTolerance: 0.50
    },
    {
        filterType: "xglow",
        filterId: "myUglyGlow",
        auraType: 2,
        color: 0x050505,
        thickness: 2.7,
        scale: 7,
        time: 0,
        auraIntensity: 5,
        subAuraIntensity: 2,
        threshold: 0.08,
        discard: false,
        animated:
        {
            time : 
            {  
               active: true,
               speed: 0.0012, 
               animType: "move" 
            },
            auraIntensity:
            {
               active: true,
               loopDuration: 3000, 
               animType: "syncCosOscillation", 
               val1:5, 
               val2:0
            },
            subAuraIntensity:
            {
               active: true,
               loopDuration: 3000, 
               animType: "syncCosOscillation", 
               val1:2, 
               val2:0
            },
            color:
            {
               active: true,
               loopDuration: 6000, 
               animType: "syncColorOscillation", 
               val1:0x050505, 
               val2:0x200000
            },
            threshold:
            {
               active: true,
               loopDuration: 1500, 
               animType: "syncCosOscillation", 
               val1:0.02, 
               val2:0.50
            }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  purefire: async () => {let params =
    [{
        filterType: "fire",
        filterId: "myPureFire",
        intensity: 1,
        color: 0xFFFFFF,
        amplitude: 1,
        time: 0,
        blend: 2,
        fireBlend : 1,
        animated :
        {
          time : 
          { 
            active: true, 
            speed: -0.0024, 
            animType: "move" 
          },
          intensity:
          {
            active:true,
            loopDuration: 15000,
            val1: 0.8,
            val2: 2,
            animType: "syncCosOscillation"
          },
          amplitude:
          {
            active:true,
            loopDuration: 4400,
            val1: 1,
            val2: 1.4,
            animType: "syncCosOscillation"
          }
          
        }
    },
    {
        filterType: "zapshadow",
        filterId: "myPureFireShadow",
        alphaTolerance: 0.50
    },
    {
        filterType: "xglow",
        filterId: "myPureFireAura",
        auraType: 2,
        color: 0x903010,
        thickness: 9.8,
        scale: 4.,
        time: 0,
        auraIntensity: 2,
        subAuraIntensity: 1.5,
        threshold: 0.40,
        discard: true,
        animated:
        {
            time : 
            {  
               active: true,
               speed: 0.0027, 
               animType: "move" 
            },
            thickness:
            {
               active: true,
               loopDuration: 3000, 
               animType: "cosOscillation", 
               val1:2, 
               val2:5
            }
        }
    }];
    
    TokenMagic.addUpdateFiltersOnSelected(params);},
  pureice: async () => {let params =
    [{
        filterType: "zapshadow",
        filterId: "myPureIceZapShadow",
        alphaTolerance: 0.50
    },
    {
        filterType: "xglow",
        filterId: "myPureIceAura",
        auraType: 1,
        color: 0x5099DD,
        thickness: 4.5,
        scale: 10,
        time: 0,
        auraIntensity: 0.25,
        subAuraIntensity: 1,
        threshold: 0.5,
        discard: false,
        animated:
        {
            time:
            {
                active: true,
                speed: 0.0018,
                animType: "move"
            },
            thickness:
            {
                val1: 2, val2: 2.5,
                animType: "cosOscillation",
                loopDuration: 3000
            },
            subAuraIntensity:
            {
                val1: 0.45, val2: 0.65,
                animType: "cosOscillation",
                loopDuration: 6000
            },
            auraIntensity:
            {
                val1: 0.9, val2: 2.2,
                animType: "cosOscillation",
                loopDuration: 3000
            }
        }
    },
    {
        filterType: "smoke",
        filterId: "myPureIceSmoke",
        color: 0x80CCFF,
        time: 0,
        blend: 2,
        dimX: 0.3,
        dimY: 1,
        animated:
        {
            time:
            {
                active: true,
                speed: -0.006,
                animType: "move"
            },
            dimX:
            {
                val1: 0.4, val2: 0.2,
                animType: "cosOscillation",
                loopDuration: 3000
            }
        }
    }];

TokenMagic.addUpdateFiltersOnSelected(params);},
};
async function choose(options = [], prompt = ``) {
  let value = await new Promise((resolve, reject) => {
    let dialog_options =
      options[0] instanceof Array
        ? options
            .map((o) => `<option value="${o[0]}">${o[1]}</option>`)
            .join(``)
        : options.map((o) => `<option value="${o}">${o}</option>`).join(``);

    let content = `${prompt}<br><select id="choice">${dialog_options}</select>`;

    new Dialog({
      content,
      buttons: {
        OK: {
          label: `OK`,
          callback: async (html) => {
            resolve(html.find("#choice").val());
          },
        },
      },
    }).render(true);
  });
  return value;
}
async function pickEffect() {
  let choice = await choose(Object.keys(TOKENMAGICMENU), `Choose: `);
  console.log(choice);
  TOKENMAGICMENU[choice]();
}
pickEffect();
