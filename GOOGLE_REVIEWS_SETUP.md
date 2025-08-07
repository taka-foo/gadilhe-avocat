# Configuration du Widget Google Reviews

## 🎯 Comment obtenir le bon iframe Google

### Étape 1 - Aller sur Google Maps

1. Va sur [Google Maps](https://maps.google.com)
2. Recherche "Cabinet Maître Julia GADILHE Roubaix"
3. Clique sur le lieu du cabinet

### Étape 2 - Obtenir le code d'intégration

1. Clique sur "Partager" (bouton en bas à gauche)
2. Clique sur "Intégrer une carte"
3. Copie le code iframe qui s'affiche

### Étape 3 - Remplacer dans le code

1. Ouvre le fichier `src/components/GoogleReviews.jsx`
2. Remplace la ligne `src="..."` dans l'iframe par ton code
3. Garde seulement la partie `src="..."` du code Google

## 📝 Exemple de code à remplacer

**Actuellement dans le fichier :**

```jsx
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2547.1234567890123!2d3.1817!3d50.6901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDQxJzI0LjQiTiAzwrAxMCc1NC4xIkU!5e0!3m2!1sfr!2sfr!4v1234567890123"
  // ... autres attributs
/>
```

**Remplace par ton vrai code Google :**

```jsx
<iframe
  src="TON_VRAI_CODE_GOOGLE_ICI"
  // ... autres attributs
/>
```

## ✅ Avantages du widget Google

- ✅ **Avis en temps réel** - Toujours à jour
- ✅ **Pas de clé API** - Pas de configuration complexe
- ✅ **Design officiel** - Style Google authentique
- ✅ **Interactif** - Les visiteurs peuvent cliquer et naviguer
- ✅ **Responsive** - S'adapte à tous les écrans

## 🎨 Personnalisation

Le widget est intégré dans le design du site avec :

- Même arrière-plan que les autres sections
- Même typographie et couleurs
- Animations FadeIn cohérentes
- Bouton "Voir tous les avis" qui redirige vers Google Maps
