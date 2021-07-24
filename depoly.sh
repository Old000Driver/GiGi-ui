rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:Old000Driver/GiGi-ui-website.git &&
git push -f -u origin master &&
cd .. &&
echo "https://old000driver.github.io/GiGi-ui-website/index.html"