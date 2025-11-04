 
export default async function handler(req, res) {
  const site = req.query.site || "https://exemple.fr";
  // simulation de données
  res.status(200).json({
    success: true,
    site,
    backlinks: Math.floor(Math.random() * 200),  // chiffre aléatoire
    referringDomains: Math.floor(Math.random() * 50),
    message: "Simulation réussie (aucune API réelle utilisée)."
  });
}
