from PIL import Image
import glob, os

size = 1389, 1037

for infile in glob.glob("/Users/garylai/Desktop/Product_Image_Out2/*.jpg"):
    file, ext = os.path.splitext(infile)
    im = Image.open(infile)
    im.thumbnail(size)
    im.save(file + ".jpg", "JPEG")