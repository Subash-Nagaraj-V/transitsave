import sys
try:
    from PIL import Image
    import pytesseract
except ImportError:
    print("Missing PIL or pytesseract")
    sys.exit(1)

try:
    img = Image.open(sys.argv[1])
    text = pytesseract.image_to_string(img)
    print("--- OCR RESULTS ---")
    print(text)
    print("-------------------")
except Exception as e:
    print(f"Error: {e}")
