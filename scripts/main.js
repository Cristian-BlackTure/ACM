

const abcde = new JavaAdapter(Planet, {}, "abcde", Planets.sun, 4, 1);
abcde.generator = new SerpuloPlanetGenerator();
abcde.mesh = new HexMesh(abcde, 5);
  abcde.orbitRadius = 100;
    abcde.orbitTime = 1500;
    abcde.rotateTime = 30;
    abcde.bloom = false;
    abcde.accessible = true;
    abcde.startSector = 1;
    abcde.hasAtmosphere = false;
    abcde.atmosphereColor = Color.valueOf("63353cFF");
    abcde.atmosphereRadIn = 0.0;
    abcde.atmosphereRadOut = 0.0;
    abcde.alwaysUnlocked = true;
    abcde.localizedName = "abcde";

var h = new SectorPreset("a1", abcde, 1);
h.difficulty = 1; 
h.alwaysUnlocked = true;
h.captureWave = 12; 
h.localisedName = "1a";